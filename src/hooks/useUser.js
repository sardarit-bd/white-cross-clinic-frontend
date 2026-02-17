import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchProfile = async () => {
    const res = await axios.get(`${BASE}/api/users/profile`,
        { withCredentials: true, });
    return res.data.data;
};

export const useProfile = () => {
    const queryClient = useQueryClient();

    const profileQuery = useQuery({
        queryKey: ["profile"],
        queryFn: fetchProfile,
    });

    const updateProfile = useMutation({
        mutationFn: (payload) =>
            axios.put(`${BASE}/api/users/profile`, payload, {
                withCredentials: true,
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile"] });
        },
    });

    return {
        profile: profileQuery.data,
        loading: profileQuery.isLoading,
        updateProfile,
    };
};
