import { Container, Typography, Box, Stack } from "@mui/material";

const ExperienceCard = ({ title }: any) => (
    <Box
        sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '12px 24px',
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
            }
        }}
    >
        <Typography
            variant="h6"
            sx={{
                color: 'white',
                fontSize: '1.1rem',
                textAlign: 'center',
            }}
        >
            {title}
        </Typography>
    </Box>
);

const About = () => {
    return (
        <Container
            maxWidth="lg"
            disableGutters
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                px: { xs: 3, sm: 4, md: 6 },
                height: 'calc(100vh - 64px)',
                color: 'white',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    mb: 4,
                    textAlign: 'center',
                    '& span': {
                        color: 'primary.main',
                    }
                }}
            >
                About <span>Me</span>
            </Typography>

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
                As a passionate Frontend Developer, I bring ideas to life through cutting-edge web technologies.
                My expertise lies in crafting performant applications using React, Next.js, and Redux, JavaScript, TypeScript, HTML, and CSS with a
                strong focus on delivering exceptional user experiences. Led development of enterprise-level applications utilizing React and Next.js.
                Specialized in building high-performance web applications with a focus on SEO optimization and modern deployment practices. Passionate about mentoring junior
                developers and fostering a collaborative team environment.
            </Typography>

            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 4 }}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 6,
                }}
            >
                <ExperienceCard title="+3 Years Development" />
                <ExperienceCard title="10+ Projects Delivered" />
                <ExperienceCard title="Frontend Developer" />
            </Stack>
        </Container>
    );
};

export default About;
