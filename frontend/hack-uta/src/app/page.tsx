import { Box, Container, Typography, Button } from "@mui/material";
import Image from 'next/image';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{
        position: 'relative',
        height: 'calc(100vh - 64px)',
        backgroundColor: '#0064b1',
        overflow: 'hidden'
      }}>
        {/* Rest of the content remains the same */}
        <Container maxWidth="lg" sx={{ height: '100%', position: 'relative', zIndex: 1 }}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            maxWidth: '50%'
          }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h1" component="div" sx={{ fontWeight: 'bold', fontSize: '6rem' }}>
                SG
              </Typography>
              <Typography variant="h4" component="div">
                UT ARLINGTON
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Welcome to the Student Government resolution page where you can be the solution to the problems on campus.
            </Typography>
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
          </Box>
        </Container>
        <Box sx={{
          position: 'absolute',
          right: -100,
          bottom: -100,
          width: '60%',
          height: '120%',
          backgroundColor: 'white',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <Box sx={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '50%',
          height: '70%',
          zIndex: 1
        }}>
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