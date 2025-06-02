import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
const Home = () => {
     const [text, setText] = useState('');
     const [isTyping, setIsTyping] = useState(true);
     const fullText = "DEVELOPER";
     useEffect(() => {
        if (isTyping) {
          if (text.length < fullText.length) {
            const timeout = setTimeout(() => {
              setText(fullText.slice(0, text.length + 1));
            }, 200);
            return () => clearTimeout(timeout);
          } else {
            const timeout = setTimeout(() => {
              setIsTyping(false);
            }, 2000);
            return () => clearTimeout(timeout);
          }
        } else {
          if (text.length > 0) {
            const timeout = setTimeout(() => {
              setText(text.slice(0, -1));
            }, 100);
            return () => clearTimeout(timeout);
          } else {
            const timeout = setTimeout(() => {
              setIsTyping(true);
            }, 1000);
            return () => clearTimeout(timeout);
          }
        }
      }, [text, isTyping]);
    return (
        <Container maxWidth="lg"
            disableGutters // Remove default Container padding
            sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                px: { xs: 3, sm: 4, md: 6 }, // Match header padding exactly
                height: 'calc(100vh - 64px)' // Subtract header height
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: 4, // Reduced gap
                    alignItems: 'center',
                    width: '100%',
                    maxHeight: 'calc(100vh - 80px)'
                }}
            >
                {/* Left Content */}
                <Box sx={{ position: 'relative', zIndex: 1, maxHeight: '100%' }}>
                    <Typography variant="h1" gutterBottom sx={{ color: 'white' }}>
                        HI! I'M VIDYA
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        I'M A <Box component="span" sx={{ color: 'primary.main' }}>{text}</Box>
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                width: '3px',
                                height: '1em',
                                bgcolor: 'primary.main',
                                ml: 1,
                                animation: 'pulse 1s infinite',
                                '@keyframes pulse': {
                                    '0%, 100%': { opacity: 1 },
                                    '50%': { opacity: 0 },
                                },
                            }}
                        />
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            mb: 4,
                            maxWidth: 'sm',
                            fontSize: '1.1rem'
                        }}
                    >
                        Specializing in React.js. I create responsive, user-friendly interfaces with clean and scalable code.
                        Passionate about design, performance optimization, and turning ideas into impactful digital experiences. Let's create something amazing!
                    </Typography>

                    <Stack direction="row" spacing={4} alignItems="center">
                        <Stack direction="row" spacing={2}>
                            {[
                                { Icon: GitHubIcon, url: 'https://github.com/VidyaAg' },
                                { Icon: LinkedInIcon, url: 'https://www.linkedin.com/in/vidya-agre-1aa495189/' },
                                { Icon: TwitterIcon, url: 'https://x.com/vidya_agre' }
                            ].map(({ Icon, url }, index) => (
                                <IconButton
                                    key={index}
                                    color="inherit"
                                    component="a"
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ '&:hover': { color: 'primary.main' } }}
                                >
                                    <Icon />
                                </IconButton>
                            ))}
                        </Stack>
                    </Stack>
                </Box>

                {/* Right Image */}
                <Box sx={{
                    position: 'relative',
                    height: { xs: '350px', md: '450px' },
                    maxHeight: 'calc(100vh - 100px)', // Ensure image fits in viewport
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    borderRadius: 4,
                    maxWidth: { xs: '100%', md: '400px' },
                    mx: 'auto',
                }}>
                    {/* Blur Effect */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -40,
                            right: -40,
                            width: 300,
                            height: 300,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            opacity: 0.2,
                            filter: 'blur(60px)',
                            zIndex: 0,
                        }}
                    />
                    <Box
                        component="img"
                        src="/assets/Media.jpeg"
                        alt="Profile"
                        sx={{
                            width: '100%',
                            height: '120%', // Increased to allow some cropping
                            objectFit: 'cover', // Changed to cover for controlled cropping
                            objectPosition: 'center 35%', // Adjust this value to control vertical positioning
                            zIndex: 1,
                        }}
                    />
                </Box>
            </Box>
        </Container>
    )
}
export default Home;