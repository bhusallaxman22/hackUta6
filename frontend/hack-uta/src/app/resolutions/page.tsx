'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper, List, ListItem, ListItemText, Button, Box, CircularProgress } from '@mui/material';
import Link from 'next/link';
import { getResolutions } from '../utils/api';
import { motion } from 'framer-motion';

export default function ResolutionsPage() {
    const [resolutions, setResolutions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchResolutions = async () => {
            setIsLoading(true);
            try {
                const data = await getResolutions();
                setResolutions(data);
            } catch (error) {
                console.error('Failed to fetch resolutions:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchResolutions();
    }, []);

    return (
        <Container maxWidth="md">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paper elevation={3} sx={{ mt: 4, p: 4 }}>
                    <Typography variant="h4" gutterBottom>Resolutions</Typography>
                    {isLoading ? (
                        <Box display="flex" justifyContent="center" my={4}>
                            <CircularProgress />
                        </Box>
                    ) : (
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
                    )}
                </Paper>
            </motion.div>
        </Container>
    );
}