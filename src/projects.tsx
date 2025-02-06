import { Container } from "@mui/material";

const Projects = () => {
    return (
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
        </Container>
    )
}
export default Projects;