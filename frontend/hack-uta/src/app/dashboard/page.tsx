'use client';

import React from 'react';
import { Typography, Container, Paper, Box, Grid } from '@mui/material';
import LeaderDashboard from '../components/LeaderDashboard';
import SenatorDashboard from '../components/SenatorDashboard';
import { useAuth } from '../context/AuthContext';
import AdminDashboard from '../components/AdminDashboard';
import { motion } from 'framer-motion';

export default function DashboardPage() {
    const { user } = useAuth();

    if (!user) {
        return <Typography>Please log in to view your dashboard.</Typography>;
    }

    let DashboardComponent;
    switch (user.role) {
        case 'admin':
            DashboardComponent = AdminDashboard;
            break;
        case 'leader':
            DashboardComponent = LeaderDashboard;
            break;
        case 'senator':
            DashboardComponent = SenatorDashboard;
            break;
        default:
            DashboardComponent = () => <Typography>Welcome, {user.username}!</Typography>;
    }

    return (
        <Container maxWidth="lg">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paper elevation={3} sx={{ mt: 4, p: 4 }}>
                    <Typography variant="h4" gutterBottom>Dashboard</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box>
                                <DashboardComponent />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </motion.div>
        </Container>
    );
}
