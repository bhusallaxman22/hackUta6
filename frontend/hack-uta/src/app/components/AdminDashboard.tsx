'use client';

import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { getUsers } from '../utils/api';

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <Typography variant="h5" gutterBottom>Admin Dashboard</Typography>
            <Typography variant="h6">User List:</Typography>
            <List>
                {users.map((user: any) => (
                    <ListItem key={user.id}>
                        <ListItemText primary={user.username} secondary={`Role: ${user.role}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}