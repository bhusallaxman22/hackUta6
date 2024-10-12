'use client';

import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { getResolutions, voteOnResolution } from '../utils/api';

export default function SenatorDashboard() {
    const [resolutions, setResolutions] = useState([]);

    useEffect(() => {
        const fetchResolutions = async () => {
            const data = await getResolutions();
            setResolutions(data);
        };
        fetchResolutions();
    }, []);

    const handleVote = async (id: string) => {
        await voteOnResolution(id);
        // Refresh resolutions
        const data = await getResolutions();
        setResolutions(data);
    };

    return (
        <div>
            <Typography variant="h5" gutterBottom>Senator Dashboard</Typography>
            <Typography variant="h6">Active Resolutions:</Typography>
            <List>
                {resolutions.filter((res: any) => res.status === 'approved').map((resolution: any) => (
                    <ListItem key={resolution.id}>
                        <ListItemText primary={resolution.title} secondary={resolution.content} />
                        <Button onClick={() => handleVote(resolution.id)}>Vote</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
