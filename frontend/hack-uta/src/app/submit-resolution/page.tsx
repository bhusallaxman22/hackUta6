'use client';

import React from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { submitResolution } from '../utils/api';

export default function SubmitResolutionPage() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = async (data: { title: string; content: string }) => {
    try {
      await submitResolution(data.title, data.content);
      // Handle success (e.g., show a success message, redirect)
    } catch (error) {
      console.error('Failed to submit resolution:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} sx={{ p: 4, background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
        <Typography variant="h4" gutterBottom>Submit a Resolution</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: 300 }}>
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
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Submit Resolution
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}