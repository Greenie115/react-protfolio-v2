import React from "react";
import { Box, Typography, Paper } from "@mui/material"

function AboutMe() {
    return (
        <>
            <Box sx={{
                my: 20,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>

                <Typography variant="h3" sx={{
                    color: 'white'
                }}>
                    About me
                </Typography>
                <Paper elevation={3} sx={{
                    m: 2,
                    p: 10
                }}>
                    <Typography variant="h5"
                    >
                    I'm Daniel Green, a Frontend Developer with expertise in JavaScript, CSS, HTML, React, and Node.js. My career pivot through a focused 4-month boot camp showcases my adaptability and dedication to mastering new technologies. With a knack for problem-solving and a commitment to innovation, I'm passionate about using my skills to create meaningful tech solutions.</Typography>
                </Paper>
            </Box>
        </>
    )
}

export default AboutMe;