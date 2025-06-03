import { Container, Typography, Box, Grid } from "@mui/material";
import { Mail, Phone, LocationOn } from "@mui/icons-material";
import { Header } from "./App";

const ContactCard = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) => (
    <Box
        sx={{
            bgcolor: 'rgba(74, 47, 120, 0.5)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
            }
        }}
    >
        <Box
            sx={{
                color: '#fff',
                fontSize: '2rem'
            }}
        >
            {icon}
        </Box>
        <Typography
            variant="h6"
            sx={{
                color: '#fff',
                fontSize: '1.25rem',
                fontWeight: 500
            }}
        >
            {title}
        </Typography>
        <Typography
            sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                textAlign: 'center'
            }}
        >
            {content}
        </Typography>
    </Box>
);

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail />,
            title: "Email",
            content: "vidyaagre@gmail.com"
        },
        {
            icon: <Phone />,
            title: "Phone",
            content: "(+91) 7775970819"
        },
        {
            icon: <LocationOn />,
            title: "Location",
            content: "Pune, India"
        }
    ];

    return (
        <Container
            disableGutters // Remove default Container padding
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, row on desktop
                alignItems: { xs: 'center', md: 'flex-start' }, // Center on mobile, align top on desktop
                px: { xs: 3, sm: 4, md: 6 },
                py: { xs: 6, md: 10 }, // Add vertical padding
                minHeight: '100vh', // Ensure it takes at least full viewport height
                bgcolor: '#011627' // Set background color
            }}
        >
             <Box
                sx={{
                    flexShrink: 0,
                    mb: { xs: 6, md: 0 }, // Margin bottom on mobile, none on desktop
                    mr: { md: 8 }, // Margin right on desktop
                    width: { xs: '100%', md: 'auto' },
                    textAlign: { xs: 'center', md: 'left' }
                }}
            >
                <Header>
                    Contact <span>Me</span>
                </Header>
            </Box>

            <Box sx={{ flexGrow: 1, width: { xs: '100%', md: 'auto' } }}>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    sx={{
                        maxWidth: '1200px',
                        mx: 'auto'
                    }}
                >
                    {contactInfo.map((info, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ContactCard
                                icon={info.icon}
                                title={info.title}
                                content={info.content}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Contact;