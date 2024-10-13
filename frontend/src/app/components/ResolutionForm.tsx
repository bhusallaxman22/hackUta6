'use client';

import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

export default function ResolutionForm() {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: '',
            content: '',
        },
    });

    const onSubmit = (data: { title: string; content: string }) => {
        console.log(data);
        // Here you would typically send the data to your API
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 300, mx: 'auto' }}>
            <Controller
                name="title"
                control={control}
                rules={{ required: 'Title is required' }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        label="Title"
                        fullWidth
                        margin="normal"
                        error={!!error}
                        helperText={error?.message}
                    />
                )}
            />
            <Controller
                name="content"
                control={control}
                rules={{ required: 'Content is required' }}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        label="Content"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        error={!!error}
                        helperText={error?.message}
                    />
                )}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Submit Resolution
            </Button>
        </Box>
    );
}
