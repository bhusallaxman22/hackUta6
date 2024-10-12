'use client';

import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Navigation: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <AppBar position="static" sx={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    Student Gov
                </Typography>
                <Box>
                    <Link href="/" passHref>
                        <Button color="inherit" component="a">Home</Button>
                    </Link>
                    <Link href="/information" passHref>
                        <Button color="inherit" component="a">Information</Button>
                    </Link>
                    <Link href="/resolutions" passHref>
                        <Button color="inherit" component="a">Resolutions</Button>
                    </Link>
                    <Link href="/faqs" passHref>
                        <Button color="inherit" component="a">FAQs</Button>
                    </Link>
                    {user && (
                        <Link href="/submit-resolution" passHref>
                            <Button color="inherit" component="a">Submit Resolution</Button>
                        </Link>
                    )}
                    {user && (
                        <Link href="/dashboard" passHref>
                            <Button color="inherit" component="a">Dashboard</Button>
                        </Link>
                    )}
                    {user ? (
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    ) : (
                        <>
                            <Link href="/login" passHref>
                                <Button color="inherit" component="a">Login</Button>
                            </Link>
                            <Link href="/register" passHref>
                                <Button color="inherit" component="a">Register</Button>
                            </Link>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;