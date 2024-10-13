'use client';
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, useMediaQuery, Theme, IconButton, Menu, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
    const { user, logout } = useAuth();
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Information', href: '/information' },
        { label: 'Resolutions', href: '/resolutions' },
        ...(user ? [
            { label: 'Submit Resolution', href: '/submit-resolution' },
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Logout', onClick: logout }
        ] : [
            { label: 'Login', href: '/login' },
            { label: 'Register', href: '/register' }
        ])
    ];

    return (
        <AppBar position="static" sx={{ background: '#F58025', backdropFilter: 'blur(10px)' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                            Student Gov
                        </Typography>
                    </motion.div>
                    {isMobile ? (
                        <>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {menuItems.map((item) => (
                                    <MenuItem key={item.label} onClick={handleClose}>
                                        {item.href ? (
                                            <Link href={item.href} passHref>
                                                <Typography textAlign="center" style={{
                                                    color: "black"
                                                }}>{item.label}</Typography>
                                            </Link>
                                        ) : (
                                            <Typography textAlign="center" onClick={item.onClick}>{item.label}</Typography>
                                        )}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {menuItems.map((item) =>
                                item.href ? (
                                    <Link key={item.label} href={item.href} passHref>
                                        <Button style={{
                                            color: "black"
                                        }} color="inherit" component="a">{item.label}</Button>
                                    </Link>
                                ) : (
                                    <Button key={item.label} color="inherit" onClick={item.onClick}>{item.label}</Button>
                                )
                            )}
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;