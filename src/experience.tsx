import { Container, Typography, Box, Stack } from "@mui/material";

const ExperienceCard = ({ title, company, responsibilities }: any) => (
    <Box
        sx={{
            backgroundColor: 'rgba(2, 12, 27, 0.7)',
            borderRadius: '8px',
            padding: '24px',
            width: '400px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            zIndex: 2
        }}
    >
        <Typography
            variant="h6"
            color="white"
            sx={{ 
                fontSize: '1.25rem', 
                mb: 1,
                fontWeight: '500'
            }}
        >
            {title}
        </Typography>
        <Typography
            sx={{ 
                fontSize: '0.9rem', 
                mb: 2,
                color: '#ffffff'
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
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            flex: 1,
                            color: 'rgba(255, 255, 255, 0.7)'
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
                mb: 8,
                zIndex: 2
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    pr: 6,
                    visibility: isEven ? 'visible' : 'hidden'
                }}
            >
                {isEven && children}
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: 0
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: '3px solid #ffffff',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '4px',
                        zIndex: 2
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
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap',
                        fontWeight: '500',
                        position: 'absolute',
                        top: '12px',
                        ...(isEven ? {
                            left: '40px'
                        } : {
                            right: '40px'
                        })
                    }}
                >
                    {date}
                </Typography>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    pl: 6,
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
            logo: 'src/assets/leadtronicsLogo.jpg',
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
            logo: 'src/assets/leadtronicsLogo.jpg',
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
            logo: 'src/assets/invimatic_logo.jpg',
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
            logo: 'src/assets/invimatic_logo.jpg',
            responsibilities: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers."
            ]
        }
    ];

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                px: { xs: 3, sm: 4, md: 6 },
                py: 8,
                minHeight: '100vh',
                bgcolor: '#011627',
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '250px',
                    left: '50%',
                    width: '2px',
                    height: 'calc(100% - 300px)',
                    bgcolor: '#ffffff',
                    transform: 'translateX(-50%)',
                    zIndex: 1
                }
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '3rem',
                    fontWeight: '600',
                    mb: 12,
                    position: 'relative',
                    zIndex: 2
                }}
            >
                Work Experience.
            </Typography>

            <Stack>
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
    );
};

export default Experience;