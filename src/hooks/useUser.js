import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchProfile = async () => {
    const res = await axios.get(`${BASE}/api/users/profile`,
        { withCredentials: true, });
    return res.data.data;
};
const fetchDoctorsBySubDept = async (id) => {
    const res = await axios.get(`${BASE}/api/users/doctors/${id}`,
        { withCredentials: true, });
    return res.data.data;
}

const fetchDoctorsByDept = async (id) => {
    const res = await axios.get(`${BASE}/api/users/doctors-by-department/${id}`,
        { withCredentials: true, });
    return res.data.data;
}

const fetchSingleUserById = async (id) => {
    const res = await axios.get(`${BASE}/api/users/single-profile/${id}`,
        { withCredentials: true, });
    return res.data.data;
}
export const useProfile = () => {
    const queryClient = useQueryClient();

    const profileQuery = useQuery({
        queryKey: ["profile"],
        queryFn: fetchProfile,
    });

    const updateProfile = useMutation({
        mutationFn: (payload) =>
            axios.patch(`${BASE}/api/users/update-profile`, payload, {
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

export const useDoctorsBySubDept = (id) => {
    return useQuery({
        queryKey: ["profile", "subcategory", id],
        queryFn: () => fetchDoctorsBySubDept(id),
        enabled: !!id,
    });
};

export const useDoctorsByDept = (id) => {
    return useQuery({
        queryKey: ["profile", "subcategory", id],
        queryFn: () => fetchDoctorsByDept(id),
        enabled: !!id,
    });
};

export const useSingleUserById = (id) => {
    return useQuery({
        queryKey: ["profile", "subcategory", id],
        queryFn: () => fetchSingleUserById(id),
        enabled: !!id,
    });
};