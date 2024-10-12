'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import Link from 'next/link';
import { getResolutions } from '../utils/api';

export default function ResolutionsPage() {
    const [resolutions, setResolutions] = useState([]);

    useEffect(() => {
        const fetchResolutions = async () => {
            const data = await getResolutions();
            setResolutions(data);
        };
        fetchResolutions();
    }, []);

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ mt: 4, p: 4, background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                <Typography variant="h4" gutterBottom>Resolutions</Typography>
                <List>
                    {resolutions.map((resolution: any) => (
                        <ListItem key={resolution.id} divider>
                            <ListItemText
                                primary={resolution.title}
                                secondary={`Status: ${resolution.status}`}
                            />
                            <Box>
                                <Link href={`/resolutions/${resolution.id}`} passHref>
                                    <Button variant="outlined" color="primary" sx={{ mr: 1 }}>View</Button>
                                </Link>
                                {resolution.status === 'approved' && (
                                    <Button variant="contained" color="primary">Vote</Button>
                                )}
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}
