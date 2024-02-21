import React from "react";
import { Box, Paper, Typography, Button, Grid } from "@mui/material";
import { motion } from 'framer-motion';
import CC_IMG from '../../../public/homepage.png'
import INVEST_IMG from '../../../public/investment-calc.png'
import TTT_REACT from '../../../public/ttt-react.png'

const myProjects = [

    {
        "id": "1",
        "name": "Culinary Compass",
        "URL": "https://culinary-compasses.netlify.app/",
        "github": "https://github.com/Chae-Lee/Culinary_Compass",
        "IMG": CC_IMG,
        "description": "Group project for users to find Michelin Star restaurants near them"
    },
    {
        "id": "2",
        "name": "Investment Calculator",
        "URL": "https://github.com/Greenie115/investment-calculator",
        "github": "https://github.com/Greenie115/investment-calculatorr",
        "IMG": INVEST_IMG,
        "description": "SPA build in React for a simple way to show compounding interest"
    },
    {
        "id": "3",
        "name": "Tic-Tak-Toe",
        "URL": "https://ttt-react-daniel-green.netlify.app/",
        "github": "https://github.com/Greenie115/tik-tac-toe-react",
        "IMG": TTT_REACT,
        "description": "A fun example of React best practices all in one application"
    },
    {
        "id": "4",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./react-portfolio-v2/readme-generator-img.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "5",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./react-portfolio-v2/readme-generator-img.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "6",
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
                textAlign: "center",
                color: 'white'
            }}>
                My Projects
            </Typography>
            <Grid container spacing={4} sx={{ px: 3, justifyContent: "center" }}>
                {myProjects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <motion.div whileHover={{ scale: 1.05 }}>
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
                                height: '250px',
                                maxWidth: '500px', 
                                borderRadius: '4px',
                                 
                            }}/>
                            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                                {project.description}
                            </Typography>
                            <Box sx={{ mt: 2, width: '100%' }}>
                                <Button variant="contained" color='primary' href={project.URL} sx={{ mr: 1, color: 'white'}}>
                                    Demo
                                </Button>
                                <Button variant="outlined" href={project.github}>
                                    GitHub
                                </Button>
                            </Box>
                        </Paper>
                    </motion.div>
                 </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Projects;
