import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

// ===== FETCH FUNCTIONS =====

const fetchCategories = async () => {
  const res = await axios.get(`${BASE}/api/category`, {
    withCredentials: true,
  });
  return res.data.data;
};

const fetchSubcategories = async () => {
  const res = await axios.get(`${BASE}/api/category/subcategory`, {
    withCredentials: true,
  });
  return res.data.data;
};

// ===== HOOK =====

export const useCategory = () => {
  const queryClient = useQueryClient();

  // ⭐ Queries

  const { data: categories = [], isLoading: catLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: subcategories = [], isLoading: subLoading } = useQuery({
    queryKey: ["subcategories"],
    queryFn: fetchSubcategories,
  });

  // ⭐ Mutations

  const createCategory = useMutation({
    mutationFn: (payload) =>
      axios.post(`${BASE}/api/category`, payload, {
        withCredentials: true,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["categories"] }),
  });

  const createSubcategory = useMutation({
    mutationFn: (payload) =>
      axios.post(`${BASE}/api/category/subcategory`, payload, {
        withCredentials: true,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["subcategories"] }),
  });

  const updateCategory = useMutation({
    mutationFn: ({ id, name, description, thumbnail }) =>
      axios.put(
        `${BASE}/api/category/${id}`,
        { name, description, thumbnail },
        { withCredentials: true }
      ),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["categories"] }),
  });

  const updateSubCategory = useMutation({
    mutationFn: ({ id, name, category }) =>
      axios.put(
        `${BASE}/api/category/subcategory/${id}`,
        { name, category },
        { withCredentials: true }
      ),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["subcategories"] }),
  });

  const deleteCategory = useMutation({
    mutationFn: (id) =>
      axios.delete(`${BASE}/api/category/${id}`, {
        withCredentials: true,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["categories"] }),
  });

  const deleteSubCategory = useMutation({
    mutationFn: (id) =>
      axios.delete(`${BASE}/api/category/subcategory/${id}`, {
        withCredentials: true,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["subcategories"] }),
  });

  return {
    categories,
    subcategories,
    catLoading,
    subLoading,

    createCategory,
    createSubcategory,
    updateCategory,
    updateSubCategory,
    deleteCategory,
    deleteSubCategory,
  };
};
