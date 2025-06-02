import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Home from './home';
import About from './about';
import { useRef } from 'react';
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
  // const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { label: 'HOME', ref: homeRef },
    { label: 'ABOUT', ref: aboutRef },
    // { label: 'PROJECTS', ref: projectsRef },
    { label: 'Experience', ref: experienceRef },
    { label: 'CONTACT', ref: contactRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const yOffset = -64; // Adjust this value based on your navbar height
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
                      color={item.label === 'HOME' ? 'primary' : 'inherit'}
                      onClick={() => scrollToSection(item.ref)}
                      sx={{ fontWeight: 'bold' }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>
              </Box>

              <Button style={{color:'white'}} onClick={() => window.open('https://www.linkedin.com/in/vidya-agre-1aa495189/', '_blank')}>
                <LinkedInIcon />
              </Button>
              
            </Toolbar>
          </Box>
        </AppBar>

        {/* Main content with even spacing */}
        <Box sx={{ py: 4 }}> {/* Add padding to the main container */}
          <Box ref={homeRef} sx={{ minHeight: '100vh', mb: 8 }}>
            <Home />
          </Box>
          
          <Box ref={aboutRef} sx={{ minHeight: '100vh', mb: 8 }}>
            <About />
          </Box>
          
          {/* <Box ref={projectsRef} sx={{ minHeight: '100vh', mb: 8 }}>
            <Projects />
          </Box> */}
          
          <Box ref={experienceRef} sx={{ minHeight: '100vh', mb: 8 }}>
            <Experience />
          </Box>
          
          <Box ref={contactRef} sx={{ minHeight: '100vh' }}> {/* No bottom margin for last section */}
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