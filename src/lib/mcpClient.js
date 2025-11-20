export async function callMCP(query) {
    try {
        console.log("🔍 Searching for:", query);
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_API}/mcp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                id: "1",
                method: "tools/call",
                params: {
                    name: "ai_search",
                    arguments: { query }
                }
            })
        });

        console.log("📊 Response status:", response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error("❌ HTTP Error:", response.status, errorText);
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const json = await response.json();
        console.log("✅ Full MCP response:", json);

        // Extract results from the MCP response structure
        if (json.error) {
            console.error("❌ MCP Error:", json.error);
            return { error: json.error.message, results: [] };
        }

        // Handle different possible response structures
        let results;
        if (json.result?.content?.[0]?.text) {
            // Parse the text content
            results = JSON.parse(json.result.content[0].text);
        } else if (json.result?.content) {
            // Direct structured content
            results = json.result.content;
        } else {
            console.warn("⚠️ Unexpected response structure:", json);
            results = { results: [] };
        }

        return results;

    } catch (err) {
        console.error("🔥 MCP Request Error:", err);
        return { 
            error: true, 
            message: err.message,
            results: [] 
        };
    }
}

// Enhanced version with better error handling
export async function searchWithMCP(query, options = {}) {
    const defaultOptions = {
        timeout: 10000,
        retries: 2
    };
    
    const config = { ...defaultOptions, ...options };
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), config.timeout);
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_API}/mcp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                id: Date.now().toString(),
                method: "tools/call",
                params: {
                    name: "ai_search",
                    arguments: { query }
                }
            }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        // Success response
        if (data.result?.content?.[0]?.text) {
            return JSON.parse(data.result.content[0].text);
        }
        
        // Error response
        if (data.error) {
            throw new Error(data.error.message || 'MCP tool error');
        }
        
        throw new Error('Unexpected response format');
        
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('⏰ MCP request timeout');
            return { error: 'Request timeout', results: [] };
        }
        
        console.error('🔧 MCP search error:', error);
        return { error: error.message, results: [] };
    }
}