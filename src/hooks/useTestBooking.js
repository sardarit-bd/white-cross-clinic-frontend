import axios from "axios";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchBookableDates = async () => {
    const res = await axios.get(`${BASE}/api/test-booking/dates`);
    return res.data.data;
};

const fetchAvailableSlots = async (date) => {
    const res = await axios.get(`${BASE}/api/test-booking/slots`, {
        params: { date },
    });
    return res.data.data;
};

export const useBookableDates = () =>
    useQuery({
        queryKey: ["test-booking", "dates"],
        queryFn: fetchBookableDates,
        staleTime: 5 * 60 * 1000,
    });

export const useAvailableSlots = (date) =>
    useQuery({
        queryKey: ["test-booking", "slots", date],
        queryFn: () => fetchAvailableSlots(date),
        enabled: !!date,
    });

export const useCreateTestBooking = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (payload) => {
            const res = await axios.post(`${BASE}/api/test-booking`, payload);
            return res.data.data;
        },
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["test-booking", "slots"] }),
    });
};