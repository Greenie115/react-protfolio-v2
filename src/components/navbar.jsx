import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <AppBar position= 'fixed' spacing={2} sx={{
            bgcolor: "secondary.main"
        }}>
            <Toolbar >
                <Typography variant='h5' sx={{flexGrow: 1}}>
                    Daniel Green
                </Typography>
                <Stack direction='row' spacing={2}>
                <NavLink to='/'>
                    <Button sx={{
                        color: "white"
                    }}>Home</Button>
                </NavLink>
                <NavLink to='aboutMe'>
                    <Button sx={{
                        color: "white"
                    }}>About Me</Button>
                </NavLink>
                <NavLink to='projects'>
                    <Button sx={{
                        color: "white"
                    }}>Projects</Button>
                </NavLink>
                <NavLink to='cv'>
                    <Button sx={{
                        color: "white"
                    }}>CV</Button>
                </NavLink>
                <NavLink to='contactMe'>
                    <Button sx={{
                        color: "white"
                    }}>Contact Me</Button>
                </NavLink>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;