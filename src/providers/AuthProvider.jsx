'use client';

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
                    { withCredentials: true }
                );
                setUser(res?.data?.data);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const register = async (form) => {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
            form
        );

        return res.data;
    };


    const login = async (payload) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
                payload,
                { withCredentials: true }
            );
            const userData = res?.data?.data?.user;
            setUser(userData);

            return res.data
        } catch (err) {
            setLoading(false);
            console.error("Login error:", err);
            throw err;
        }
    };
    const logout = async () => {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, null, { withCredentials: true })
        setUser(null);
        return res.data;
    };

    const sendResetPassword = async (payload) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/forgot-password`,
                payload
            );
            return res.data;
        } catch (err) {
            setLoading(false);
        }
    };




    const sendContactEmail = async (payload) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/send-email`,
                payload
            );
            return res.data;
        } catch (err) {
            setLoading(false);
        }
    };
    const resetPassword = async (payload) => {
        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/reset-password`,
                { password: payload.password },
                {
                    headers: {
                        'Authorization': `${payload.token}`
                    }
                }
            );
            return res.data;
        } catch (err) {
            setLoading(false);
            return err
        }
    };
    const updateProfile = async (payload) => {
        try {
            const res = await axios.patch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/update-profile`,
                payload,
                { withCredentials: true }
            );
            return res.data;
        } catch (err) {
            throw err;
        }
    };

    const getProfile = async () => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile`,
                { withCredentials: true }
            );
            return res.data;
        } catch (err) {
            throw err;
        }
    };


    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register, updateProfile, sendResetPassword, resetPassword, getProfile, sendContactEmail }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);