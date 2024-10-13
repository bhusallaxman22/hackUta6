"use client"

import React from 'react';
import { Box, Container, Typography, Button } from "@mui/material";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{
        position: 'relative',
        height: 'calc(100vh - 64px)',
        backgroundColor: '#0064b1',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg" sx={{ height: '100%', position: 'relative', zIndex: 1 }}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            maxWidth: { xs: '100%', md: '50%' }
          }}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', fontSize: { xs: '4rem', md: '6rem' } }}>
                  SG
                </Typography>
                <Typography variant="h4" component="div">
                  UT ARLINGTON
                </Typography>
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="h5" sx={{ mb: 4 }}>
                Welcome to the Student Government resolution page where you can be the solution to the problems on campus.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="https://mavengage.uta.edu/submitter/form/start/494506" passHref>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#f58025',
                    color: 'white',
                    borderRadius: '50px',
                    padding: '10px 40px',
                    fontSize: '1.5rem',
                    '&:hover': {
                      backgroundColor: '#d86d1b'
                    }
                  }}
                >
                  Submit Now!
                </Button>
              </Link>
            </motion.div>
          </Box>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: { xs: '100%', sm: '70%', md: '50%' },
            height: '100%',
            clipPath: {
              xs: 'circle(100% at 50% 100%)',
              sm: 'circle(100% at 70% 100%)',
              md: 'circle(100% at 100% 50%)'
            },
            zIndex: 0,
            overflow: 'hidden'
          }}
        >
          <Image
            src="/meeting-room.png"
            alt="Meeting Room"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Box>
  );
}