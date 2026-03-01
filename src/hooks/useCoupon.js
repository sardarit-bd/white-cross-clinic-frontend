import axios from "axios";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

// ===== FETCH FUNCTIONS =====

const fetchCoupons = async () => {
    const res = await axios.get(`${BASE}/api/coupon`, {
        withCredentials: true,
    });
    return res.data.data;
};


export const fetchSingleCoupon = async (coupon) => {
    const res = await axios.get(`${BASE}/api/coupon/single/${coupon}`, {
        withCredentials: true,
    });
    return res.data;
};

// ===== MAIN HOOK =====

export const useCoupon = () => {
    const queryClient = useQueryClient();

    const { data: coupons = [], isLoading: couponsLoading } = useQuery({
        queryKey: ["coupons"],
        queryFn: fetchCoupons,
    });

    const createCoupon = useMutation({
        mutationFn: (payload) =>
            axios.post(`${BASE}/api/coupon`, payload, {
                withCredentials: true,
            }),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["coupons"] }),
    });

    const updateCoupon = useMutation({
        mutationFn: (payload) =>
            axios.put(
                `${BASE}/api/coupon/${payload.id}`,
                payload,
                { withCredentials: true }
            ),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["coupons"] }),
    });

    const deleteCoupon = useMutation({
        mutationFn: (id) =>
            axios.delete(`${BASE}/api/coupon/${id}`, {
                withCredentials: true,
            }),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["coupons"] }),
    });

    return {
       coupons,
       createCoupon,
       deleteCoupon,
       updateCoupon
    };
};

// ===== FILTERED QUERIES =====


export const useSingleCoupon = (coupon) => {
    return useQuery({
        queryKey: ["coupons", "single", coupon],
        queryFn: () => fetchSingleCoupon(coupon),
        enabled: !!coupon,
    });
};