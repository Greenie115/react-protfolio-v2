import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

function Home() {
    return (
        <>
            <Box sx={{
                m: 9,
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Avatar
                    alt="profile-img"
                    src='public/assets/images/img-20220404-wa0001-cropped.jpg'
                    sx={{ height: 200, width: 200, m: 5 }}
                ></Avatar>
                <Typography variant="h2">
                    Hey there! I'm Dan.         Frontend React Developer
                </Typography>
            </Box>
        </>
    )
}

export default Home;