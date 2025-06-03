import { Container, Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Header } from "./App";
import { motion } from 'framer-motion';

const TechBadges = () => {
    const theme = useTheme();
    
    const badges = [
        { name: "HTML5", logo: "assets/html.png" },
        { name: "CSS3", logo: "assets/css.png" },
        { name: "JavaScript", logo: "assets/js.png" },
        { name: "TypeScript", logo: "assets/ts.jpg" },
        { name: "React", logo: "assets/React-icon.svg.png" },
        { name: "Redux", logo: "assets/redux.png" },
        // { name: "Node.js", logo: "assets/nodejs.png" },
        { name: "Git", logo: "assets/git.png" },
        { name: "Next.js", logo: "assets/next.png" },
    ];

    return (
        <Box sx={{ 
            bgcolor: '#011627', 
            py: { xs: 4, sm: 6, md: 8 },
            px: { xs: 2, sm: 3, md: 4 }
        }}>
            <Typography
                variant="h3"
                sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                    mb: { xs: 3, sm: 4, md: 6 }
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
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        sm: 'repeat(3, 1fr)',
                        md: 'repeat(4, 1fr)',
                        lg: 'repeat(5, 1fr)'
                    },
                    gap: { xs: 2, sm: 3, md: 4 },
                    maxWidth: '1200px',
                    mx: 'auto',
                    px: { xs: 1, sm: 2, md: 3 }
                }}
            >
                {badges.map((badge, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 0.5, sm: 1, md: 1.5 }
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: '50px', sm: '60px', md: '75px' },
                                height: { xs: '50px', sm: '60px', md: '75px' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                backgroundColor: '#ffffff',
                                borderRadius: { xs: '8px', sm: '10px', md: '12px' },
                                padding: { xs: '8px', sm: '10px', md: '12px' },
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
                                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
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

const ExperienceCard = ({ title, company, responsibilities, date, logo }: any) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(2, 12, 27, 0.8)',
                borderRadius: '12px',
                padding: { xs: '20px', sm: '24px', md: '32px' },
                width: '100%',
                maxWidth: { xs: 'none', md: '420px' },
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
            {/* Mobile: Show date and logo at top */}
            {isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                        sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '2px solid #ffffff',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '4px',
                            flexShrink: 0
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
                    <Typography
                        sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            padding: '4px 12px',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                    >
                        {date}
                    </Typography>
                </Box>
            )}
            
            <Typography
                variant="h6"
                color="white"
                sx={{
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.375rem' },
                    mb: 1.5,
                    fontWeight: '600',
                    lineHeight: 1.3
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    mb: 3,
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: '500'
                }}
            >
                {company}
            </Typography>
            <Stack spacing={2}>
                {responsibilities.map((item: any, index: any) => (
                    <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box
                            sx={{
                                width: '6px',
                                height: '6px',
                                bgcolor: '#ffffff',
                                borderRadius: '50%',
                                mt: 1,
                                flexShrink: 0
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: { xs: '0.85rem', md: '0.95rem' },
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
};

const TimelineEntry = ({ date, logo, children, index }: any) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isEven = index % 2 === 0;

    if (isMobile) {
        // Mobile layout: Simple vertical stack
        return (
            <Box sx={{ mb: 4, position: 'relative' }}>
                {children}
            </Box>
        );
    }

    // Desktop layout: Keep your original alternating design
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                mb: 10,
                zIndex: 2
            }}
        >
            {/* Left side content */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    pr: 8,
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
                    pl: 8,
                    visibility: isEven ? 'hidden' : 'visible'
                }}
            >
                {!isEven && children}
            </Box>
        </Box>
    );
};

const Experience = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const experiences = [
        {
            date: "Sep 2021 - Jan 2022",
            title: "Web Developer - Intern",
            company: "Leadtronics Pvt Ltd",
            logo: '/assets/leadtronicsLogo.jpg',
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
            logo: '/assets/leadtronicsLogo.jpg',
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
            logo: '/assets/invimatic_logo.jpg',
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
            logo: '/assets/invimatic_logo.jpg',
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
                    px: { xs: 2, sm: 4, md: 8 },
                    py: { xs: 6, md: 10 },
                    minHeight: '100vh',
                    bgcolor: '#011627',
                    position: 'relative',
                    // Desktop timeline line
                    ...(!isMobile && {
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: '240px',
                            left: '50%',
                            width: '3px',
                            height: 'calc(100% - 320px)',
                            bgcolor: 'rgba(255, 255, 255, 0.3)',
                            transform: 'translateX(-50%)',
                            zIndex: 1,
                            borderRadius: '2px'
                        }
                    }),
                    // Mobile timeline line
                    ...(isMobile && {
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '140px',
                            left: '20px',
                            width: '2px',
                            height: 'calc(100% - 200px)',
                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                            zIndex: 1,
                            borderRadius: '1px'
                        }
                    })
                }}
            >
                <Box sx={{ mb: { xs: 4, md: 8 } }}>
                    <Header>
                        Work <span>Experience</span>
                    </Header>
                </Box>

                <Stack sx={{ pt: { xs: 2, md: 4 } }}>
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
                                date={exp.date}
                                logo={exp.logo}
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