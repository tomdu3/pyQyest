import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const api = axios.create({
        baseURL: 'http://localhost:8000/api',
    });

    api.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    const checkUser = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const res = await api.get('/auth/me');
                setUser(res.data);
            }
        } catch (error) {
            console.error("Failed to authenticate token");
            localStorage.removeItem('token');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkUser();
    }, []);

    const login = async (username, password) => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        const res = await api.post('/auth/token', formData);
        localStorage.setItem('token', res.data.access_token);
        await checkUser();
    };

    const register = async (username, email, password) => {
        await api.post('/auth/register', { username, email, password });
        return login(username, password);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const submitProgress = async (lessonId, timeSpent, pointsEarned) => {
        if (!user) return;
        try {
            await api.post('/progress/submit', {
                lesson_id: lessonId,
                time_spent_seconds: timeSpent,
                session_points_earned: pointsEarned
            });
            await checkUser(); // Refresh user data to get updated points
        } catch (error) {
            console.error("Failed to submit progress", error);
        }
    };

    const value = {
        user,
        loading,
        api,
        login,
        register,
        logout,
        submitProgress
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
