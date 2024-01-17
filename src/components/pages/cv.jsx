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
                    <img src="./src/assets/images/CVScreenshot.png" alt="cv-screenshot"></img>
                    <Button variant="contained" sx={{
                        mt: 2
                    }} href="Daniel Green Business Development CV.pdf"
                        target="_blank"
                        download="Daniel Green Business Development CV.pdf"
                        fullWidth
                    >Download</Button>
                </Paper>
            </Box>
        </>
    )
}

export default CV;