import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";


function NavBar(){
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow: 1}}>
                    Reach Portfolio
                </Typography>
                <Stack direction='row' spacing={2}>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>About Me</Button>
                <Button color='inherit'>Projects</Button>
                <Button color='inherit'>CV</Button>
                <Button color='inherit'>Contact Me</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;