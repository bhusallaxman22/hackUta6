"use client"

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Container, CircularProgress } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { submitResolution } from '../utils/api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Resolution } from '../interfaces';

export default function SubmitResolutionPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      name: '',
      resolutionLink: '',
    },
  });

  const onSubmit = async (data: Resolution) => {
    setIsLoading(true);
    try {
      await submitResolution(data.title, data.name, data.resolutionLink);
      toast.success('Resolution submitted successfully!');
      router.push('/resolutions');
    } catch (error) {
      console.error('Failed to submit resolution:', error);
      toast.error('Failed to submit resolution. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ mt: 4, p: 4 }}>
          <Typography variant="h4" gutterBottom>Submit a Resolution</Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
              name="name"
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
            <Controller
              name="resolutionLink"
              control={control}
              rules={{ required: 'Resolution Link is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Resolution Link (PDF)"
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
              {isLoading ? <CircularProgress size={24} /> : 'Submit Resolution'}
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
}