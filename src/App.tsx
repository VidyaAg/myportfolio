import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// Create custom theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    background: {
      default: '#011627', // Darker blue background to match your image
      paper: '#011627',
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    }
  }
});

function App() {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', height: '100vh' }}>
        {/* Navigation */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent' }}>
          <Box sx={{ px: { xs: 2, sm: 3, md: 5, lg: 10 } }}>
            <Toolbar sx={{ justifyContent: 'space-between', height: '64px' }}>
              {/* Logo */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '48px', // Increased height
                    width: '48px'
                  }}
                >
                  <Box
                    component="img"
                    src="src/assets/LogoVA.png"
                    alt="VA Logo"
                    sx={{
                      height: '100%',
                      width: '100%', // Changed to 100% to fill container
                      objectFit: 'cover', // Changed to cover for tighter crop
                      objectPosition: 'center', // Center the image
                      borderRadius: '4px', // Optional: adds slight rounding to corners
                    }}
                  />
                </Box>
              </Stack>

              {/* Navigation Links */}
              <Stack
                direction="row"
                spacing={4}
                sx={{
                  display: { xs: 'none', md: 'flex' }
                }}
              >
                {['HOME', 'ABOUT', 'PROJECTS', 'SERVICES', 'CONTACT'].map((item) => (
                  <Button
                    key={item}
                    color={item === 'HOME' ? 'primary' : 'inherit'}
                    sx={{ fontWeight: 'bold' }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>

              {/* Let's Talk Button */}
              <Button variant="contained" color="primary">
                Let's Talk
              </Button>
            </Toolbar>
          </Box>
        </AppBar>

        {/* Hero Section */}
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
                Passionate about design, performance optimization, and turning ideas into impactful digital experiences. Let’s create something amazing!
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
                src="src/assets/Media.jpeg"
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

      </Box>
    </ThemeProvider>
  );
}

export default App;