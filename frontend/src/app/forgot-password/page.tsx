'use client';

import React from 'react';
import { TextField, Button, Box, Typography, Paper, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { requestPasswordReset } from '../utils/api';

export default function ForgotPasswordPage() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = async (data: { email: string }) => {
        try {
            await requestPasswordReset(data.email);
            alert('Password reset instructions have been sent to your email.');
        } catch (error) {
            console.error('Password reset request failed:', error);
            alert('Failed to request password reset. Please try again.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ mt: 4, p: 4, background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                <Typography variant="h4" gutterBottom>Forgot Password</Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Email"
                                fullWidth
                                margin="normal"
                                error={!!error}
                                helperText={error?.message}
                            />
                        )}
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Reset Password
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
