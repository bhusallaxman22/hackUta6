"use client"

import React, { useState, useEffect } from 'react';
import {
    Typography,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Box,
    CircularProgress,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import Link from 'next/link';
import { getResolutions, voteOnResolution, changeResolutionStatus } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { Resolution } from '../interfaces';

export default function ResolutionsPage() {
    const [resolutions, setResolutions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

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

    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            await changeResolutionStatus(id, newStatus);
            toast.success('Resolution status updated successfully');
            await fetchResolutions();
        } catch (error) {
            console.error('Failed to update resolution status:', error);
            toast.error('Failed to update resolution status. Please try again.');
        }
    };

    return (
        <Container maxWidth="lg">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
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
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Total Votes</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {resolutions.map((resolution: Resolution) => (
                                        <TableRow key={resolution._id}>
                                            <TableCell>{resolution.title}</TableCell>
                                            <TableCell>{resolution.status}</TableCell>
                                            <TableCell>{resolution.votes}</TableCell>
                                            <TableCell>
                                                <Link href={`/resolutions/${resolution._id}`} passHref>
                                                    <Button variant="outlined" color="primary" sx={{ mr: 1 }}>View</Button>
                                                </Link>
                                                {user?.role === 'senator' && (
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => handleVote(resolution._id)}
                                                        sx={{ mr: 1 }}
                                                    >
                                                        Vote
                                                    </Button>
                                                )}
                                                {user?.role === 'leader' && (
                                                    <FormControl sx={{ minWidth: 120 }}>
                                                        <InputLabel id={`status-select-label-${resolution._id}`}>Status</InputLabel>
                                                        <Select
                                                            labelId={`status-select-label-${resolution._id}`}
                                                            value={resolution.status}
                                                            label="Status"
                                                            onChange={(e) => handleStatusChange(resolution._id, e.target.value)}
                                                        >
                                                            <MenuItem value="pending">Pending</MenuItem>
                                                            <MenuItem value="approved">Approved</MenuItem>
                                                            <MenuItem value="denied">Denied</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Paper>
            </motion.div>
        </Container>
    );
}