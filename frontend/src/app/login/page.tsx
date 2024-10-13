'use client';
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Container, CircularProgress } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = async (data: { username: string; password: string }) => {
        setIsLoading(true);
        try {
            await login(data.username, data.password);
            toast.success('Login successful!');
            router.push('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paper elevation={3} sx={{ mt: 4, p: 4 }}>
                    <Typography variant="h4" gutterBottom>Login</Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
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
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2 }}
                            disabled={isLoading}
                        >
                            {isLoading ? <CircularProgress size={24} /> : 'Login'}
                        </Button>
                    </Box>
                </Paper>
            </motion.div>
        </Container>
    );
}
