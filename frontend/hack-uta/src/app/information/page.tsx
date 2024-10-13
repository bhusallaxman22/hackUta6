"use client"

import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function InformationPage() {
    return (
        <Container maxWidth="lg">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paper elevation={3} sx={{ mt: 4, p: 4 }}>
                    <Typography variant="h4" gutterBottom>Student Government Information</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography variant="h6" gutterBottom>About Us</Typography>
                                <Typography paragraph>
                                    The Student Government at our university is dedicated to representing and advocating for the student body. We work tirelessly to ensure that student voices are heard and that their needs are met.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography variant="h6" gutterBottom>Our Mission</Typography>
                                <Typography paragraph>
                                    Our mission is to foster a vibrant and inclusive campus community, promote student welfare, and facilitate communication between students, faculty, and administration.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="h6" gutterBottom>Get Involved</Typography>
                                <Typography paragraph>
                                    There are many ways to get involved with Student Government. You can attend our meetings, join a committee, or run for office. We encourage all students to participate and make their voices heard!
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </motion.div>
        </Container>
    );
}
