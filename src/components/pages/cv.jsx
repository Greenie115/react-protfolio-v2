import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

function CV() {
    return (
        <>
            <Box sx={{
                my: 12,
                display: "flex",
                justifyContent: "center"
            }}>
                <Paper elevation={3} sx={{
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                }}>
                    <Typography variant="h3" sx={{
                        textAlign: "center",
                        pb: 2
                    }}>
                        Check out my CV
                    </Typography>
                    <img src="./react-protfolio-v2/cv-screenshot.png" alt="cv-screenshot"></img>
                    <Button variant="contained" sx={{
                        mt: 2,
                        color: 'white'
                    }} href="./react-protfolio-v2/Frontend Developer Daniel Green (1).pdf"
                        target="_blank"
                        download="./react-protfolio-v2/Frontend Developer Daniel Green (1).pdf"
                        fullWidth
                    >Download</Button>
                </Paper>
            </Box>
        </>
    )
}

export default CV;