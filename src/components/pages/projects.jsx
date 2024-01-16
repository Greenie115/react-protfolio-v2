import React from "react";
import { Box, Paper, Typography, Button, Link  } from "@mui/material";

const myProjects = [
    {
        "id": "1",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./src/assets/READMEGeneratorImg.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "2",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./src/assets/READMEGeneratorImg.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "3",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./src/assets/READMEGeneratorImg.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "4",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./src/assets/READMEGeneratorImg.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "5",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./src/assets/READMEGeneratorImg.png",
        "description": "Here's a README Generator"
    },
    {
        "id": "6",
        "name": "README Generator",
        "URL": "https://www.youtube.com/watch?v=S72KH97pHwM",
        "github": "https://github.com/Greenie115/readme-generator",
        "IMG": "./src/assets/READMEGeneratorImg.png",
        "description": "Here's a README Generator"
    }
]

function Projects() {
    return (
        <>
            <Typography variant="h3"
                sx={{
                    mt: 9,
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                Projects
            </Typography>
            <Box sx={{
                mt: 2,
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Box> 
                {myProjects.map((project) => {
                    return (
                        <Paper key={project.id} square={false} elevation={4} sx={{
                            m: 2,
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Typography variant="h5" sx={{
                                m: 2
                            }}>
                                {project.name}
                            </Typography>
                            <Typography variant="h6" sx={{
                                m: 2
                            }}>
                                {project.description}
                            </Typography>
                            <img src={project.IMG} alt="project-screenshot" width={500} height={300} sx={{
                                m: 2,
                                p:5
                            }}/>
                            <Button variant="contained" fullWidth
                                href={project.URL} 
                                sx={{
                                m: 2,
                    
                            }}
                            >Check It Out!</Button>
                        </Paper>
                    )
                })}
                </Box>
            </Box>
        </>
    )
}

export default Projects; 