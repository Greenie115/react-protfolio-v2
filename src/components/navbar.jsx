import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About Me', path: '/aboutMe' },
        { label: 'Projects', path: '/projects' },
        { label: 'CV', path: '/cv' },
        { label: 'Contact Me', path: '/contactMe' },
    ];

    return (
        <AppBar position="fixed" sx={{ bgcolor: "secondary.main" }}>
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    Daniel Green
                </Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                    }}
                >
                    {navItems.map((item) => (
                        <MenuItem key={item.label} onClick={handleCloseNavMenu}>
                            <NavLink to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography textAlign="center">{item.label}</Typography>
                            </NavLink>
                        </MenuItem>
                    ))}
                </Menu>
                <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {navItems.map((item) => (
                        <NavLink key={item.label} to={item.path} style={{ textDecoration: 'none' }}>
                            <Button sx={{ color: 'white' }}>
                                {item.label}
                            </Button>
                        </NavLink>
                    ))}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
