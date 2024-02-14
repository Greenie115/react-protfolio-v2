import React from "react";
import { Box, Typography, Paper } from "@mui/material"
import SkillsAccordion from "./accordion";

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
                    <Typography variant="p" 
                >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugiat natus reprehenderit deleniti numquam aperiam quis ex iure animi voluptatem doloremque vitae veritatis dolorum eaque, illo quo consequatur incidunt consequuntur!                </Typography>
                </Paper>
                <Typography variant="h3"sx={{
                    color: 'white'
                }}>
                    Skills
                </Typography>
                <Paper elevation={3} sx={{
                    m: 2,
                    p: 10
                }}>
                <SkillsAccordion/>
                </Paper>
            </Box>
        </>
    )
}

export default AboutMe;