'use client';
import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Paper, CircularProgress, Box } from '@mui/material';
import { getUsers } from '../utils/api';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h5" gutterBottom>Admin Dashboard</Typography>
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>User List:</Typography>
                {isLoading ? (
                    <Box display="flex" justifyContent="center" my={4}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <List>
                        {users.map((user: any) => (
                            <ListItem key={user.id}>
                                <ListItemText primary={user.username} secondary={`Role: ${user.role}`} />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </motion.div>
    );
}