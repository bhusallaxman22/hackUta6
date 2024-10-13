import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api',
});

// Add a request interceptor to include the token in all requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const login = async (username: string, password: string) => {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
};

export const register = async (username: string, password: string, role: string) => {
    const response = await api.post('/auth/register', { username, password, role });
    return response.data;
};

export const getResolutions = async () => {
    const response = await api.get('/resolutions');
    return response.data;
};

export const submitResolution = async (title: string, name: string, resolutionLink: string) => {
    const response = await api.post('/resolutions', { title, name, resolutionLink });
    return response.data;
};

export const approveOrDenyResolution = async (id: string, status: 'approved' | 'denied') => {
    const response = await api.put(`/resolutions/${id}`, { status });
    return response.data;
};

export const voteOnResolution = async (id: string) => {
    const response = await api.post(`/resolutions/${id}/vote`);
    return response.data;
};

export const getResolutionDetails = async (id: string) => {
    const response = await api.get(`/resolutions/${id}`);
    return response.data;
};

export const changeResolutionStatus = async (id: any, newStatus: any) => {
    const response = await api.put(`/resolutions/${id}/status`, { status: newStatus });
    return response.data;
};
export const requestPasswordReset = async (email: string) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
};

// Assuming we have a user management endpoint in our backend
export const getUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};
