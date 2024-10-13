'use client';

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Container, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { register } from '../utils/api';
import { motion } from 'framer-motion';

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: { username: string; password: string; confirmPassword: string }) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords don't match");
            return;
        }
        setIsLoading(true);
        try {
            await register(data.username, data.password, 'guest');
            toast.success("Registration Successful!")
            router.push('/login');
        } catch (error) {
            console.error('Registration failed:', error);
            toast.error('Registration failed. Please try again.');
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
                    <Typography variant="h4" gutterBottom>Register</Typography>
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
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{ required: 'Please confirm your password' }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    type="password"
                                    label="Confirm Password"
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
                            {isLoading ? <CircularProgress size={24} /> : 'Register'}
                        </Button>
                    </Box>
                </Paper>
            </motion.div>
        </Container>
    );
}
