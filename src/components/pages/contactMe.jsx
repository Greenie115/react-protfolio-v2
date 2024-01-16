import React from "react";
import { useRef } from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography, Box } from '@mui/material'
import emailjs from '@emailjs/browser';

function ContactMe() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ao0evsn', 'template_6qidspd', form.current, 'bleXIAnrfoXdXnLQE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

  

    return (
        <>
        <Box sx={{
            mt: 10
        }}>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" sx={{ textAlign: "center"}}>
                            Contact Me
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and I will get back to you within 24 hours.
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button 
                                    onSubmit={sendEmail}
                                    type="submit" 
                                    variant="contained" 
                                    color="primary" 
                                    fullWidth>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            </Box>
        </>
    )
}

export default ContactMe;
