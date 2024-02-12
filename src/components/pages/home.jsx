import React from "react";
import { Box, Avatar, Typography, Grid, Paper, Button } from "@mui/material";
import reactLogo from "../../../public/React-logo-removebg-preview.png";
import jsLogo from "../../../public/JavaScript-logo.png";
import tailwindLogo from "../../../public/tailwind-logo.png";
import HTMLLogo from "../../../public/HTML5_logo.png";
import CSSLogo from "../../../public/CSS3_logo.png";

// Assuming you have a more detailed array of technologies with descriptions
const technologies = [
  { name: "React", logo: reactLogo, description: "I've built multiple SPA with React, utilizing hooks and context for state management." },
  { name: "JavaScript", logo: jsLogo, description: "Experienced in ES6+ features, asynchronous programming, and performance optimization." },
  { name: "Tailwind CSS", logo: tailwindLogo, description: "I apply Tailwind for rapid UI development, focusing on responsive and adaptive designs." },
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
                bgcolor: '#f5f5f5', // A light background color for better contrast and readability
            }}>
                <Avatar
                    alt="profile-img"
                    src='./react-portfolio-v2/img-20220404-wa0001-cropped.jpg'
                    sx={{ height: 200, width: 200, m: 5 }}
                />
                <Typography variant="h3" sx={{ color: '#333', fontWeight: 'bold' }}>
                    Hey there! I'm Dan.
                </Typography>
                <Typography variant="h4" sx={{ color: '#555' }}>
                    Frontend React Developer
                </Typography>
                <Typography sx={{ mt: 2, textAlign: 'center', maxWidth: '600px', color: '#666' }}>
                    Passionate about building interactive, performant web applications using the latest technologies. Focused on creating responsive, user-friendly interfaces.
                </Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center" sx={{ p: 3 }}>
                {technologies.map((tech, index) => (
                    <Grid item key={index} xs={6} sm={4} md={2}>
                        <Paper elevation={2} sx={{
                            mt: 2,
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            '&:hover': {
                                backgroundColor: '#e0e0e0', // A hover effect to indicate interactivity
                            },
                        }}>
                            <Avatar src={tech.logo} alt={`${tech.name} Logo`} sx={{ height: 80, width: 80 }} />
                            <Typography variant="body1" sx={{ mt: 1 }}>{tech.name}</Typography>
                    
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Home;
