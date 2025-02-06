import { Container, Typography, Box, Stack, Grid } from "@mui/material";
import './index.css';

const ExperienceCard = ({ title, company, responsibilities }: any) => (
    <Box
        sx={{
            backgroundColor: 'rgba(20, 28, 47, 0.7)',
            borderRadius: '8px',
            padding: '24px',
            width: '450px',
        }}
    >
        <Typography
            variant="h6"
            color="white"
            sx={{ fontSize: '1.25rem', mb: 1 }}
        >
            {title}
        </Typography>
        <Typography
            color="primary"
            sx={{ fontSize: '0.9rem', mb: 2 }}
        >
            {company}
        </Typography>
        <Stack spacing={2}>
            {responsibilities.map((item: any, index: any) => (
                <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                    <Box
                        sx={{
                            width: '4px',
                            height: '4px',
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            mt: 1,
                        }}
                    />
                    <Typography
                        color="rgba(255, 255, 255, 0.8)"
                        sx={{
                            fontSize: '0.85rem',
                            lineHeight: 1.6,
                            flex: 1
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
    const isEven = index % 2 === 1;

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                mb: 4
            }}
        >
            {/* Content left side if odd, empty if even */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    pr: 6,
                    visibility: isEven ? 'hidden' : 'visible'
                }}
            >
                {!isEven && children}
            </Box>

            {/* Center timeline */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    width: '48px'
                }}
            >
                <Box
                    sx={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                    }}
                >
                    <img src={logo} />
                </Box>
                <Typography
                    color="white"
                    sx={{
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap',
                        position: 'absolute',
                        top: '55px'
                    }}
                >
                    {date}
                </Typography>
            </Box>

            {/* Content right side if even, empty if odd */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    pl: 6,
                    visibility: isEven ? 'visible' : 'hidden'
                }}
            >
                {isEven && children}
            </Box>
        </Box>
    );
};

const TechBadges = () => {
    const badges = [
        { name: "HTML5", logo: "src/assets/html.png" },
        { name: "CSS3", logo: "src/assets/css.png" },
        { name: "JavaScript", logo: "src/assets/js.png" },
        { name: "TypeScript", logo: "src/assets/ts.jpg" },
        { name: "React", logo: "src/assets/React-icon.svg.png" },
        { name: "Redux", logo: "src/assets/redux.png" },
        { name: "Git", logo: "src/assets/git.png" },
    ];

    return (
        <Box sx={{ bgcolor: '#011627', py: 4 }}>
            <Typography
                variant="h3"
                sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontWeight: 600,
                    mb: 4
                }}
            >
                Tech Stack
            </Typography>

            <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{
                    maxWidth: '1000px',
                    mx: 'auto',
                    px: { xs: 2, md: 0 }
                }}
            >
                {badges.map((badge, index) => (
                    <Grid item key={index} xs={4} sm={3} md={2}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <Box
                                sx={{
                                    width: '80px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.3s ease',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '8px',
                                    padding: '12px',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
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
                                    fontSize: '0.85rem',
                                    textAlign: 'center'
                                }}
                            >
                                {badge.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
const Experience = () => {
    const experiences = [
        {
            date: "Sep 2021 - Jan 2022",
            title: "Web Developer - Intern",
            company: "Leadtronics Pvt Ltd",
            logo: 'src/assets/leadTronicsLogo.jpg',
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
            logo: 'src/assets/leadTronicsLogo.jpg',
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
        <>
            <Container
                maxWidth="lg"
                disableGutters
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    px: { xs: 3, sm: 4, md: 6 },
                    py: 8,
                    minHeight: 'calc(100vh - 64px)',
                    bgcolor: '#011627',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '250px',
                        left: '50%',
                        width: '3px',
                        height: 'calc(100% - 300px)',
                        bgcolor: 'rgba(255, 255, 255, 0.96)',
                        transform: 'translateX(-50%)',
                        zIndex: 0,
                        marginLeft: '9px'
                    }
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '2.5rem',
                        fontWeight: 600,
                        mb: 8
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
                            logoClass="logo-image"
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