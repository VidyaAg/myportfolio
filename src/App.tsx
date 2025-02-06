import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';

import Home from './home';
import About from './about';

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


import { useRef } from 'react';
// import Projects from './projects';
import Experience from './experience';
import Contact from './contact';

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
                    src="src/assets/LogoName.png"
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

              <Button variant="contained" color="primary">
                Let's Talk
              </Button>
            </Toolbar>
          </Box>
        </AppBar>

        <Box ref={homeRef} sx={{ height: '100vh' }}>
          <Home />
        </Box>
        <Box ref={aboutRef} sx={{ height: '100vh' }}>
          <About />
        </Box>
        {/* <Box ref={projectsRef} sx={{ height: '100vh' }}>
          <Projects />
        </Box> */}
         <Box ref={experienceRef} sx={{ height: '370vh' }}>
          <Experience />
        </Box>
        <Box ref={contactRef} sx={{ height: '100vh' }}>
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;