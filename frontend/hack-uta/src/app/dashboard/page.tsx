'use client';

import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';
import LeaderDashboard from '../components/LeaderDashboard';
import SenatorDashboard from '../components/SenatorDashboard';
import { useAuth } from '../context/AuthContext';
import AdminDashboard from '../components/AdminDashboard';

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
        <Container>
            <Paper elevation={3} sx={{ mt: 4, p: 4, background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                <Typography variant="h4" gutterBottom>Dashboard</Typography>
                <Box>
                    <DashboardComponent />
                </Box>
            </Paper>
        </Container>
    );
}
