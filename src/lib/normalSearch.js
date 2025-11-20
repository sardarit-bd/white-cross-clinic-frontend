export async function normalSearch(query) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_API}/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) throw new Error("Search failed");

    return await response.json();
  } catch (err) {
    console.error("Normal Search Error:", err);
    return { success: false, results: [], error: err.message };
  }
}
