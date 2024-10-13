import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button, Paper, CircularProgress, Box } from '@mui/material';
import { getResolutions, approveOrDenyResolution } from '../utils/api';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function LeaderDashboard() {
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

    const handleApprove = async (id: string) => {
        try {
            await approveOrDenyResolution(id, 'approved');
            toast.success('Resolution approved successfully');
            await fetchResolutions();
        } catch (error) {
            console.error('Failed to approve resolution:', error);
            toast.error('Failed to approve resolution. Please try again.');
        }
    };

    const handleDeny = async (id: string) => {
        try {
            await approveOrDenyResolution(id, 'denied');
            toast.success('Resolution denied successfully');
            await fetchResolutions();
        } catch (error) {
            console.error('Failed to deny resolution:', error);
            toast.error('Failed to deny resolution. Please try again.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>Leader Dashboard</Typography>
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Pending Resolutions:</Typography>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" my={4}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <List>
                        {resolutions.filter((res: any) => res.status === 'pending').map((resolution: any) => (
                            <ListItem key={resolution.id}>
                                <ListItemText primary={resolution.title} secondary={resolution.content} />
                                <Button onClick={() => handleApprove(resolution.id)} color="primary" variant="contained" sx={{ mr: 1 }}>Approve</Button>
                                <Button onClick={() => handleDeny(resolution.id)} color="secondary" variant="contained">Deny</Button>
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </motion.div>
    );
}