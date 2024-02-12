import React from "react";
import { Box, Paper, Typography, Button, Grid, Link } from "@mui/material";

const myProjects = [

    {
        "id": "1",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./react-portfolio-v2/readme-generator-img.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "1",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./react-portfolio-v2/readme-generator-img.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "1",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./react-portfolio-v2/readme-generator-img.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "1",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./react-portfolio-v2/readme-generator-img.png",
        "description": "Here's a README Generator"
    },

];

function Projects() {
    return (
        <>
            <Typography variant="h3" sx={{
                mt: 9,
                mb: 4,
                textAlign: "center"
            }}>
                My Projects
            </Typography>
            <Grid container spacing={4} sx={{ px: 3, justifyContent: "center" }}>
                {myProjects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Paper elevation={4} sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 2,
                        }}>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                {project.name}
                            </Typography>
                            <img src={project.IMG} alt="project-screenshot" style={{
                                width: '100%', 
                                height: 'auto',
                                maxWidth: '500px', 
                                borderRadius: '4px', 
                            }}/>
                            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                                {project.description}
                            </Typography>
                            <Box sx={{ mt: 2, width: '100%' }}>
                                <Button variant="contained" color='primary' href={project.URL} sx={{ mr: 1 }}>
                                    Demo
                                </Button>
                                <Button variant="outlined" href={project.github}>
                                    GitHub
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Projects;
