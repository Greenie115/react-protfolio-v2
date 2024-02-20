import { Box, Avatar, Typography, Grid, Paper, Divider } from "@mui/material";
import { motion } from 'framer-motion';
import React from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import reactLogo from "../../../public/React-logo-removebg-preview.png";
import jsLogo from "../../../public/JavaScript-logo.png";
import tailwindLogo from "../../../public/tailwind-logo.png";
import HTMLLogo from "../../../public/HTML5_logo.png";
import CSSLogo from "../../../public/CSS3_logo.png";
import ProfileImg from "../../../public/img-20220404-wa0001-cropped.jpg";

const technologies = [
    { name: "React", logo: reactLogo, description: "Built multiple SPA with React, utilizing hooks and context for state management." },
    { name: "JavaScript", logo: jsLogo, description: "Experienced in ES6+ features, asynchronous programming, and performance optimization." },
    { name: "Tailwind CSS", logo: tailwindLogo, description: "Applying Tailwind for rapid UI development, focusing on responsive and adaptive designs." },
    { name: "HTML5", logo: HTMLLogo, description: "Semantic HTML markup is my standard for SEO-friendly and accessible web applications." },
    { name: "CSS3", logo: CSSLogo, description: "Skilled in creating visually appealing, responsive layouts with CSS Flexbox and Grid." },
];

function Home() {
    return (
        <>
            <Box sx={{
                mt: 9,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Avatar
                        alt="profile-img"
                        src={ProfileImg}
                        sx={{ height: 200, width: 200, m: 5 }}
                    />
                </motion.div>
                <Typography variant="h3" sx={{ color: '#white', fontWeight: 'bold' }}>
                    Hey there! I'm Dan.
                </Typography>
                <Typography variant="h4" sx={{ color: '#555' }}>
                    Frontend React Developer
                </Typography>
                <Typography sx={{ mt: 2, textAlign: 'center', maxWidth: '600px', color: '#666' }}>
                    Passionate about building interactive, performant web applications using the latest technologies. Focused on creating responsive, user-friendly interfaces.
                </Typography>
            </Box>
            <Divider variant="middle" sx={{ my: 8 }} />
            <Grid container spacing={2} justifyContent="center" sx={{ my: 8, p: 3 }}>
                {technologies.map((tech, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={2} sx={{ p: 2, '&:hover': { backgroundColor: '#e0e0e0' } }}>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Avatar src={tech.logo} alt={`${tech.name} Logo`} sx={{ height: 80, width: 80 }} />
                                <Typography variant="body1" sx={{ mt: 1 }}>{tech.name}</Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>{tech.description}</Typography>
                            </motion.div>
                        </Paper>
                    </Grid>
                ))}


            </Grid>
            <Divider variant="middle" sx={{ my: 8, color: 'red' }} />
            <AboutMe />
            <Divider variant="middle" sx={{ my: 8 }} />
            <Projects />
        </>
    );
}

export default Home;
