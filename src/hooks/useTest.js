import axios from "axios";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

// ===== FETCH FUNCTIONS =====

const fetchTests = async () => {
    const res = await axios.get(`${BASE}/api/tests`, {
        withCredentials: true,
    });
    return res.data.data;
};


const fetchSingleTestBySlug = async (slug) => {
    const res = await axios.get(`${BASE}/api/tests/single/${slug}`, {
        withCredentials: true,
    });
    return res.data.data;
};

// ===== MAIN HOOK =====

export const useTest = () => {
    const queryClient = useQueryClient();

    const { data: tests = [], isLoading: testsLoading } = useQuery({
        queryKey: ["tests"],
        queryFn: fetchTests,
    });

    const createTest = useMutation({
        mutationFn: (payload) =>
            axios.post(`${BASE}/api/tests`, payload, {
                withCredentials: true,
            }),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["tests"] }),
    });

    const updateTest = useMutation({
        mutationFn: (payload) =>
            axios.put(
                `${BASE}/api/tests/${payload.id}`,
                payload,
                { withCredentials: true }
            ),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["tests"] }),
    });

    const deleteTest = useMutation({
        mutationFn: (id) =>
            axios.delete(`${BASE}/api/tests/${id}`, {
                withCredentials: true,
            }),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["tests"] }),
    });

    return {
        tests,
        testsLoading,
        createTest,
        updateTest,
        deleteTest,
    };
};

// ===== FILTERED QUERIES =====


export const useSingleTestBySlug = (slug) => {
    return useQuery({
        queryKey: ["tests", "single", slug],
        queryFn: () => fetchSingleTestBySlug(slug),
        enabled: !!slug,
    });
};