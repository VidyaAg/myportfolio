import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  IconButton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Home from './home';
import About from './about';
import { useRef, useState, useEffect } from 'react';
import Experience from './experience';
import Contact from './contact';

// Create custom theme
export const theme = createTheme({
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
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('HOME');

  const navigationItems = [
    { label: 'HOME', ref: homeRef },
    { label: 'ABOUT', ref: aboutRef },
    { label: 'EXPERIENCE', ref: experienceRef },
    { label: 'CONTACT', ref: contactRef },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setActiveSection(section);
          }
        }
      });
    }, observerOptions);

    navigationItems.forEach((item) => {
      if (item.ref.current) {
        observer.observe(item.ref.current);
      }
    });

    return () => {
      navigationItems.forEach((item) => {
        if (item.ref.current) {
          observer.unobserve(item.ref.current);
        }
      });
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const yOffset = -64;
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <AppBar position="sticky" elevation={0}>
          <Box sx={{ px: { xs: 3, sm: 4, md: 6 } }}>
            <Toolbar sx={{ justifyContent: 'space-between', height: '64px' }}>
              <Stack direction="row" alignItems="center">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '48px',
                    width: '48px'
                  }}
                >
                  <Box
                    component="img"
                    src="/assets/LogoName.png"
                    alt="VA Logo"
                    sx={{
                      height: '76px',
                      width: '209px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderRadius: '4px',
                    }}
                  />
                </Box>
              </Stack>

              <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
                <Stack
                  direction="row"
                  spacing={4}
                  sx={{
                    display: { xs: 'none', md: 'flex' }
                  }}
                >
                  {navigationItems.map((item) => (
                    <Button
                      key={item.label}
                      color={activeSection === item.label ? 'primary' : 'inherit'}
                      onClick={() => scrollToSection(item.ref)}
                      sx={{
                        fontWeight: 'bold',
                        position: 'relative',
                        '&::after': activeSection === item.label ? {
                          content: '""',
                          position: 'absolute',
                          bottom: -2,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          backgroundColor: 'primary.main',
                          transform: 'scaleX(1)',
                          transition: 'transform 0.3s ease-in-out'
                        } : {
                          content: '""',
                          position: 'absolute',
                          bottom: -2,
                          left: 0,
                          width: '100%',
                          height: '2px',
                          backgroundColor: 'primary.main',
                          transform: 'scaleX(0)',
                          transition: 'transform 0.3s ease-in-out'
                        },
                        '&:hover::after': {
                          transform: 'scaleX(1)'
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>
              </Box>

              <Stack direction="row" spacing={1}>
                <IconButton 
                  color="inherit" 
                  onClick={() => window.open('https://github.com/VidyaAg', '_blank')}
                  sx={{ '&:hover': { color: 'primary.main' } }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  onClick={() => window.open('https://www.linkedin.com/in/vidya-agre-1aa495189/', '_blank')}
                  sx={{ '&:hover': { color: 'primary.main' } }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  onClick={() => window.open('https://x.com/vidya_agre', '_blank')}
                  sx={{ '&:hover': { color: 'primary.main' } }}
                >
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Toolbar>
          </Box>
        </AppBar>

        <Box sx={{ py: 4 }}>
          <Box ref={homeRef} data-section="HOME" sx={{ minHeight: '100vh', mb: 8 }}>
            <Home />
          </Box>
          
          <Box ref={aboutRef} data-section="ABOUT" sx={{ minHeight: '100vh', mb: 8 }}>
            <About />
          </Box>
          
          <Box ref={experienceRef} data-section="EXPERIENCE" sx={{ minHeight: '100vh', mb: 8 }}>
            <Experience />
          </Box>
          
          <Box ref={contactRef} data-section="CONTACT" sx={{ minHeight: '100vh' }}>
            <Contact />
          </Box>
        </Box>
      </Box>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'background.paper',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          textAlign: 'center'
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2025 Vidya Agre. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;

// src/components/Typography.tsx

export const Header = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h2"
    sx={{
      mb: 4,
      textAlign: 'center',
      '& span': {
        color: 'primary.main',
      },
    }}
  >
    {children}
  </Typography>
);

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h6"
    sx={{
      mb: 6,
      lineHeight: 1.8,
      maxWidth: '1000px',
      mx: 'auto',
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.9)',
    }}
  >
    {children}
  </Typography>
);