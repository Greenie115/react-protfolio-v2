import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <AppBar position= 'fixed' spacing={2}>
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow: 1}}>
                    React Portfolio
                </Typography>
                <Stack direction='row' spacing={2}>
                <NavLink to='/'>
                    <Button color='inherit'>Home</Button>
                </NavLink>
                <NavLink to='aboutMe'>
                    <Button color='inherit'>About Me</Button>
                </NavLink>
                <NavLink to='projects'>
                    <Button color='inherit'>Projects</Button>
                </NavLink>
                <NavLink to='cv'>
                    <Button color='inherit'>CV</Button>
                </NavLink>
                <NavLink to='contactMe'>
                    <Button color='inherit'>Contact Me</Button>
                </NavLink>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;