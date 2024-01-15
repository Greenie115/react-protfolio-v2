import React from "react";
import { myProjects } from "../localProjects"
import { Box, Paper, Typography } from "@mui/material";

function Projects(){
    return(
    <>
        <Box sx={{
        mt: 9,
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
       {myProjects.map((project) => {
        <Paper elevation={3}>
            <Typography variant="h4">{project.name}</Typography>
        </Paper>
       })}
    </Box>
    </>
    )
}  

export default Projects; 