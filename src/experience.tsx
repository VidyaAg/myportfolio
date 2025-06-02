import { Container, Box, Stack, Typography } from "@mui/material";
import { Header } from "./App";
import { motion } from 'framer-motion';

const TechBadges = () => {
    const badges = [
        { name: "HTML5", logo: "src/assets/html.png" },
        { name: "CSS3", logo: "src/assets/css.png" },
        { name: "JavaScript", logo: "src/assets/js.png" },
        { name: "TypeScript", logo: "src/assets/ts.jpg" },
        { name: "React", logo: "src/assets/React-icon.svg.png" },
        { name: "Redux", logo: "src/assets/redux.png" },
        { name: "Node.js", logo: "src/assets/nodejs.png" },
        { name: "Git", logo: "src/assets/git.png" },
    ];

    return (
        <Box sx={{ bgcolor: '#011627', py: 8 }}>
            <Typography
                variant="h3"
                sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontWeight: 600,
                    mb: 6
                }}
            >
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    Tech Stack
                </motion.div>
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: { xs: 3, sm: 4, md: 5 },
                    maxWidth: '900px',
                    mx: 'auto',
                    px: { xs: 3, md: 4 }
                }}
            >
                {badges.map((badge, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                            flex: '0 0 auto'
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: '70px', sm: '80px', md: '85px' },
                                height: { xs: '70px', sm: '80px', md: '85px' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                backgroundColor: '#ffffff',
                                borderRadius: '16px',
                                padding: '16px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-8px) scale(1.05)',
                                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
                                    backgroundColor: '#f8f9fa'
                                }
                            }}
                        >
                            <img
                                src={badge.logo}
                                alt={badge.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>
                        <Typography
                            sx={{
                                color: 'white',
                                fontSize: { xs: '0.85rem', sm: '0.9rem' },
                                textAlign: 'center',
                                fontWeight: 600,
                                letterSpacing: '0.5px'
                            }}
                        >
                            {badge.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const ExperienceCard = ({ title, company, responsibilities }: any) => (
    <Box
        sx={{
            backgroundColor: 'rgba(2, 12, 27, 0.8)',
            borderRadius: '12px',
            padding: '32px',
            width: '420px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            zIndex: 2,
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
            }
        }}
    >
        <Typography
            variant="h6"
            color="white"
            sx={{
                fontSize: '1.375rem',
                mb: 1.5,
                fontWeight: '600',
                lineHeight: 1.3
            }}
        >
            {title}
        </Typography>
        <Typography
            sx={{
                fontSize: '1rem',
                mb: 3,
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '500'
            }}
        >
            {company}
        </Typography>
        <Stack spacing={2.5}>
            {responsibilities.map((item: any, index: any) => (
                <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box
                        sx={{
                            width: '8px',
                            height: '8px',
                            bgcolor: '#ffffff',
                            borderRadius: '50%',
                            mt: 1,
                            flexShrink: 0
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            flex: 1,
                            color: 'rgba(255, 255, 255, 0.75)'
                        }}
                    >
                        {item}
                    </Typography>
                </Box>
            ))}
        </Stack>
    </Box>
);

const TimelineEntry = ({ date, logo, children, index }: any) => {
    const isEven = index % 2 === 0;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                mb: 10, // Consistent spacing between timeline entries
                zIndex: 2
            }}
        >
            {/* Left side content */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    pr: 8, // Consistent padding from timeline
                    visibility: isEven ? 'visible' : 'hidden'
                }}
            >
                {isEven && children}
            </Box>

            {/* Timeline center with logo and date */}
            <Box
                sx={{
                    position: 'relative',
                    width: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {/* Company logo */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        border: '4px solid #ffffff',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                        zIndex: 3,
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <img
                        src={logo}
                        alt="company logo"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            borderRadius: '50%'
                        }}
                    />
                </Box>
                
                {/* Date label */}
                <Typography
                    sx={{
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        whiteSpace: 'nowrap',
                        fontWeight: '600',
                        position: 'absolute',
                        top: '16px',
                        backgroundColor: 'rgba(1, 22, 39, 0.9)',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        ...(isEven ? {
                            left: '48px'
                        } : {
                            right: '48px'
                        })
                    }}
                >
                    {date}
                </Typography>
            </Box>

            {/* Right side content */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    pl: 8, // Consistent padding from timeline
                    visibility: isEven ? 'hidden' : 'visible'
                }}
            >
                {!isEven && children}
            </Box>
        </Box>
    );
};

const Experience = () => {
    const experiences = [
        {
            date: "Sep 2021 - Jan 2022",
            title: "Web Developer - Intern",
            company: "Leadtronics Pvt Ltd",
            logo: '/leadtronicsLogo.jpg',
            responsibilities: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers."
            ]
        },
        {
            date: "Feb 2022 - Jun 2022",
            title: "Web Developer",
            company: "Leadtronics Pvt Ltd",
            logo: '/leadtronicsLogo.jpg',
            responsibilities: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers."
            ]
        },
        {
            date: "July 2022 - Apr 2024",
            title: "Software Engineer",
            company: "Invimatic Technologies Pvt Ltd",
            logo: '/invimatic_logo.jpg',
            responsibilities: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers."
            ]
        },
        {
            date: "May 2024 - Present",
            title: "Senior Software Engineer",
            company: "Invimatic Technologies Pvt Ltd",
            logo: '/invimatic_logo.jpg',
            responsibilities: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers."
            ]
        }
    ];

    return (
        <>
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    px: { xs: 4, sm: 6, md: 8 },
                    py: 10, // Increased top/bottom padding
                    minHeight: '100vh',
                    bgcolor: '#011627',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '240px', // Adjusted for header spacing
                        left: '50%',
                        width: '3px', // Slightly thicker timeline
                        height: 'calc(100% - 320px)', // Adjusted for footer spacing
                        bgcolor: 'rgba(255, 255, 255, 0.3)',
                        transform: 'translateX(-50%)',
                        zIndex: 1,
                        borderRadius: '2px'
                    }
                }}
            >
                <Box sx={{ mb: 8 }}> {/* Consistent header spacing */}
                    <Header>
                        Work <span>Experience</span>
                    </Header>
                </Box>

                <Stack sx={{ pt: 4 }}> {/* Additional top padding for timeline */}
                    {experiences.map((exp, index) => (
                        <TimelineEntry
                            key={index}
                            date={exp.date}
                            index={index}
                            logo={exp.logo}
                        >
                            <ExperienceCard
                                title={exp.title}
                                company={exp.company}
                                responsibilities={exp.responsibilities}
                            />
                        </TimelineEntry>
                    ))}
                </Stack>
            </Container>
            <TechBadges />
        </>
    );
};

export default Experience;