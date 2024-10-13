"use client"

import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import Image from 'next/image';

const InformationPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ position: 'relative', width: '100%', height: '300px' }}>
        <Image
          src="/student-room.png"
          alt="Student Assembly"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                How can you submit your resolution?
              </Typography>
              <Typography variant="body1" paragraph>
                Resolutions are documents outlining the changes you want on campus, usually as a solution to a problem. To submit a resolution, you need a senator to sponsor your resolution. After you have found a sponsor, you just have to click the "Submit Now!" button on the home page. This will redirect you to mavengage where you log in and start a new submission. You can look up sample resolution formats online and fill out the "whereas" and "be it therefore resolved that" sections. After submission, the student government will review your resolution. If and when they are approved, you will be able to see your resolution on the resolutions page and eventually whether they were implemented or killed.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>About Us</Typography>
              <Typography paragraph>
                The Student Government at our university is dedicated to representing and advocating for the student body. We work tirelessly to ensure that student voices are heard and that their needs are met.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>Our Mission</Typography>
              <Typography paragraph>
                Our mission is to foster a vibrant and inclusive campus community, promote student welfare, and facilitate communication between students, faculty, and administration.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>Get Involved</Typography>
              <Typography paragraph>
                There are many ways to get involved with Student Government. You can attend our meetings, join a committee, or run for office. We encourage all students to participate and make their voices heard!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InformationPage;