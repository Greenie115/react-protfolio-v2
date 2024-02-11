import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import reactLogo from "../../../public/React-logo-removebg-preview.png"
import jsLogo from "../../../public/JavaScript-logo.png"
import tailwindLogo from "../../../public/tailwind-logo.png"
import HTMLLogo from "../../../public/HTML5_logo.png"
import CSSLogo from "../../../public/CSS3_logo.png"

function Home() {
    return (
        <>
            <Box sx={{
                mt: 9,
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Avatar
                    alt="profile-img"
                    src='./react-protfolio-v2/img-20220404-wa0001-cropped.jpg'
                    sx={{ height: 200, width: 200, m: 5 }}
                ></Avatar>
                <Typography variant="h2">
                    Hey there! I'm Dan. Frontend React Developer
                </Typography>
            </Box>
            <Box 
            sx={{
                width: 'auto',
                bgcolor: "green",
                display: 'flex',
                justifyContent: 'center'
            }}>
            <Avatar src={reactLogo} alt="React Logo" sx={{
                height: 100, width: 100, m: 1, p: 3
            }} />
            <Avatar src={jsLogo} alt="React Logo" sx={{
                height: 100, width: 100, m: 1, p: 3, 
            }} />
            <Avatar src={tailwindLogo} alt="React Logo" sx={{
                height: 100, width: 100, m: 1, p: 3, 
            }} />
            <Avatar src={HTMLLogo} alt="React Logo" sx={{
                height: 100, width: 100, m: 1, p: 3, 
            }} />
            <Avatar src={CSSLogo} alt="React Logo" variant="plain" sx={{
                height: 100, width: 100, m: 1, p: 3, 
            }} />
            </Box>
        </>
    )
}

export default Home;