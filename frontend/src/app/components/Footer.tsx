"use client"
import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              123 University Ave<br />
              Arlington, TX 76019<br />
              Email: sg@uta.edu<br />
              Phone: (817) 272-0556
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block">Home</Link>
            <Link href="/information" color="inherit" display="block">Information</Link>
            <Link href="/resolutions" color="inherit" display="block">Resolutions</Link>
            <Link href="/faqs" color="inherit" display="block">FAQs</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="https://facebook.com" color="inherit" sx={{ mr: 2 }}>
                <Facebook />
              </Link>
              <Link href="https://twitter.com" color="inherit" sx={{ mr: 2 }}>
                <Twitter />
              </Link>
              <Link href="https://instagram.com" color="inherit">
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} UT Arlington Student Government. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;