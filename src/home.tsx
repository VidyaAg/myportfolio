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
                px: { xs: 2, sm: 3, md: 4, lg: 6 }, // Responsive padding
                py: { xs: 4, md: 0 }, // Add vertical padding on mobile
                height: { xs: 'auto', md: 'calc(100vh - 64px)' }, // Auto height on mobile
                minHeight: { xs: 'calc(100vh - 64px)', md: 'calc(100vh - 64px)' }
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: { xs: 3, sm: 4, md: 6 }, // Responsive gap
                    alignItems: 'center',
                    width: '100%',
                    maxHeight: { xs: 'none', md: 'calc(100vh - 80px)' }
                }}
            >
                {/* Left Content */}
                <Box sx={{ 
                    position: 'relative', 
                    zIndex: 1, 
                    maxHeight: '100%',
                    order: { xs: 2, md: 1 } // Move content below image on mobile
                }}>
                    <Typography 
                        variant="h1" 
                        gutterBottom 
                        sx={{ 
                            color: 'white',
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                        HI! I'M VIDYA
                    </Typography>
                    <Typography 
                        variant="h2" 
                        gutterBottom
                        sx={{
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
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
                            textAlign: { xs: 'center', md: 'left' },
                            mx: { xs: 'auto', md: 0 }
                        }}
                    >
                        Specializing in React.js. I create responsive, user-friendly interfaces with clean and scalable code.
                        Passionate about design, performance optimization, and turning ideas into impactful digital experiences. Let's create something amazing!
                    </Typography>

                    <Stack 
                        direction="row" 
                        spacing={4} 
                        alignItems="center"
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                    >
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
                    height: { xs: '300px', sm: '350px', md: '450px' },
                    maxHeight: { xs: '40vh', md: 'calc(100vh - 100px)' },
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    borderRadius: 4,
                    maxWidth: { xs: '100%', md: '400px' },
                    mx: 'auto',
                    order: { xs: 1, md: 2 } // Move image above content on mobile
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