import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', mt: 25, py: 3, width: '100%', display: 'block' }}>
            <Container maxWidth="lg">
                <Grid container spacing={3} justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="body1">Daniel Green © {new Date().getFullYear()}</Typography>
                    </Grid>
                    <Grid item>
                        <Link href="https://github.com/Greenie115" color="inherit" target="_blank" rel="noopener noreferrer">
                            <IconButton color="inherit">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://www.linkedin.com/in/daniel-green545/" color="inherit" target="_blank" rel="noopener noreferrer">
                            <IconButton color="inherit">
                                <LinkedInIcon />
                            </IconButton>
                        </Link>
                        <Link href="dggreen545@gmail.com" color="inherit" target="_blank" rel="noopener noreferrer">
                            <IconButton color="inherit">
                                <MailOutlineIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
                <Typography variant="body2" align="center" sx={{ pt: 3 }}>
                    Built with React & Material UI
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
