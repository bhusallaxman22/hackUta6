'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Typography, Container, Paper, Box, Chip } from '@mui/material';
import { getResolutionDetails } from '@/app/utils/api';

export default function ResolutionDetailsPage() {
    const { id } = useParams();
    const [resolution, setResolution] = useState<any>(null);

    useEffect(() => {
        const fetchResolutionDetails = async () => {
            const data = await getResolutionDetails(id as string);
            setResolution(data);
        };
        fetchResolutionDetails();
    }, [id]);

    if (!resolution) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ mt: 4, p: 4, background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                <Typography variant="h4" gutterBottom>{resolution.title}</Typography>
                <Box sx={{ mb: 2 }}>
                    <Chip label={`Status: ${resolution.status}`} sx={{ mr: 1 }} />
                    <Chip label={`Votes: ${resolution.votes}`} />
                </Box>
                <Typography variant="body1" paragraph>{resolution.content}</Typography>
                <Typography variant="subtitle2">Author: {resolution.submittedBy.username}</Typography>
                <Typography variant="subtitle2">Created: {new Date(resolution.createdAt).toLocaleString()}</Typography>
            </Paper>
        </Container>
    );
}
