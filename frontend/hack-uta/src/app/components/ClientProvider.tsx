'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProvider } from '../context/AppContext';
import { theme } from '../styles/theme';


export default function ClientProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppProvider>{children}</AppProvider>
        </ThemeProvider>
    );
}
