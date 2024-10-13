"use client"
import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button, Paper, CircularProgress, Box } from '@mui/material';
import { getResolutions, voteOnResolution } from '../utils/api';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function SenatorDashboard() {
    const [resolutions, setResolutions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchResolutions();
    }, []);

    const fetchResolutions = async () => {
        setIsLoading(true);
        try {
            const data = await getResolutions();
            setResolutions(data);
        } catch (error) {
            console.error('Failed to fetch resolutions:', error);
            toast.error('Failed to load resolutions. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVote = async (id: string) => {
        try {
            await voteOnResolution(id);
            toast.success('Vote cast successfully');
            await fetchResolutions();
        } catch (error) {
            console.error('Failed to cast vote:', error);
            toast.error('Failed to cast vote. Please try again.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>Senator Dashboard</Typography>
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Active Resolutions:</Typography>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" my={4}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <List>
                        {resolutions.filter((res: any) => res.status === 'approved').map((resolution: any) => (
                            <ListItem key={resolution.id}>
                                <ListItemText primary={resolution.title} secondary={resolution.content} />
                                <Button onClick={() => handleVote(resolution.id)} color="primary" variant="contained">Vote</Button>
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </motion.div>
    );
}