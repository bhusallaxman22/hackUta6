'use client';

import React from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
    const { login } = useAuth();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = async (data: { username: string; password: string }) => {
        try {
            await login(data.username, data.password);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper elevation={3} sx={{ p: 4, background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                <Typography variant="h4" gutterBottom>Login</Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: 300 }}>
                    <Controller
                        name="username"
                        control={control}
                        rules={{ required: 'Username is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Username"
                                fullWidth
                                margin="normal"
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Password is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="password"
                                label="Password"
                                fullWidth
                                margin="normal"
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Login
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

