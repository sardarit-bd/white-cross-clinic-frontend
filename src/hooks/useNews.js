import axios from "axios";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

// ===== FETCH FUNCTIONS =====

const fetchNews = async () => {
    const res = await axios.get(`${BASE}/api/news`, {
        withCredentials: true,
    });
    return res.data.data;
};

const fetchNewsBySubCategory = async (id) => {
  const res = await axios.get(`${BASE}/api/news/${id}`, {
    withCredentials: true,
  });
  return res.data.data;
};

const fetchSingleNewsBySlug = async (slug) => {
  const res = await axios.get(`${BASE}/api/news/single/${slug}`, {
    withCredentials: true,
  });
  return res.data.data;
};


export const useNews = () => {
    const queryClient = useQueryClient();

    const { data: news = [], isLoading: newsLoading } = useQuery({
        queryKey: ["news"],
        queryFn: fetchNews,
    });

    const createNews = useMutation({
        mutationFn: (payload) =>
            axios.post(`${BASE}/api/news`, payload, {
                withCredentials: true,
            }),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["news"] }),
    });


    const updateNews = useMutation({
        mutationFn: (payload) =>
            axios.put(
                `${BASE}/api/news/${payload.id}`,
                payload,
                { withCredentials: true }
            ),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["news"] }),
    });


    const deleteNews = useMutation({
        mutationFn: (id) =>
            axios.delete(`${BASE}/api/news/${id}`, {
                withCredentials: true,
            }),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["news"] }),
    });

    return {
        news,
        createNews,
        updateNews,
        deleteNews,
    };
};

export const useNewsBySubCategory = (id) => {
  return useQuery({
    queryKey: ["news", "subcategory", id],
    queryFn: () => fetchNewsBySubCategory(id),
    enabled: !!id,
  });
};
export const useSingleNewsBySlug = (slug) => {
   
  return useQuery({
    queryKey: ["news", "subcategory", slug],
    queryFn: () => fetchSingleNewsBySlug(slug),
    enabled: !!slug,
  });
};