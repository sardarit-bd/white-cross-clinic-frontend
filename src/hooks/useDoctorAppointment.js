import axios from "axios";
import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

const BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

// ===== FETCH FUNCTIONS =====

const fetchDoctorAppointments = async () => {
    const res = await axios.get(`${BASE}/api/doctor-appointment`, {
        withCredentials: true,
    });
    return res.data.data;
};

const fetchDoctorAppointmentByPatient = async () => {
  const res = await axios.get(`${BASE}/api/doctor-appointment/patient`, {
    withCredentials: true,
  });
  return res.data.data;
};

const fetchDoctorAppointmentsByDoctor = async () => {
  const res = await axios.get(`${BASE}/api/doctor-appointment/doctor`, {
    withCredentials: true,
  });
  return res.data.data;
};


export const useDoctorAppointment = () => {
    const queryClient = useQueryClient();

    const { data: appointments = [], isLoading: appointmentsLoading } = useQuery({
        queryKey: ["doctor-appointment"],
        queryFn: fetchDoctorAppointments,
    });

    const createAppointment = useMutation({
        mutationFn: (payload) =>
            axios.post(`${BASE}/api/doctor-appointment`, payload, {
                withCredentials: true,
            }),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["doctor-appointment"] }),
    });


    const updateAppointment = useMutation({
        mutationFn: (payload) =>
            axios.put(
                `${BASE}/api/doctor-appointment/${payload.id}`,
                payload,
                { withCredentials: true }
            ),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["doctor-appointment"] }),
    });


    const deleteAppointment = useMutation({
        mutationFn: (id) =>
            axios.delete(`${BASE}/api/doctor-appointment/${id}`, {
                withCredentials: true,
            }),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ["doctor-appointment"] }),
    });

    return {
        appointments,
        createAppointment,
        updateAppointment,
        deleteAppointment
    };
};

export const useDoctorAppointmentByDoctor = () => {
  return useQuery({
    queryKey: ["doctor-appointment"],
    queryFn: fetchDoctorAppointmentsByDoctor
  });
};

export const useDoctorAppointmentByPatient = () => {
  return useQuery({
    queryKey: ["doctor-appointment"],
    queryFn: fetchDoctorAppointmentByPatient
  });
};