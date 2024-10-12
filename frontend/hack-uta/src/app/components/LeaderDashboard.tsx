'use client';

import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { getResolutions, approveOrDenyResolution } from '../utils/api';

export default function LeaderDashboard() {
    const [resolutions, setResolutions] = useState([]);

    useEffect(() => {
        const fetchResolutions = async () => {
            const data = await getResolutions();
            setResolutions(data);
        };
        fetchResolutions();
    }, []);

    const handleApprove = async (id: string) => {
        await approveOrDenyResolution(id, 'approved');
        // Refresh resolutions
        const data = await getResolutions();
        setResolutions(data);
    };

    const handleDeny = async (id: string) => {
        await approveOrDenyResolution(id, 'denied');
        // Refresh resolutions
        const data = await getResolutions();
        setResolutions(data);
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom>Leader Dashboard</Typography>
            <Typography variant="h6">Pending Resolutions:</Typography>
            <List>
                {resolutions.filter((res: any) => res.status === 'pending').map((resolution: any) => (
                    <ListItem key={resolution.id}>
                        <ListItemText primary={resolution.title} secondary={resolution.content} />
                        <Button onClick={() => handleApprove(resolution.id)}>Approve</Button>
                        <Button onClick={() => handleDeny(resolution.id)}>Deny</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
