"use client"
import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

const Footer = () => {
    return (
        <Box position='fixed' sx={{ bottom: 0, width: '80vw' }} py={2} component="footer">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <Typography color='black' sx={{ fontSize: { xs: '0.7em', sm: '1em' } }} align="center">
                    @kdessi {new Date().getFullYear()} | All rights reserved
                </Typography>
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={4} >
                    <Facebook sx={{ color: 'black' }} />
                    <Instagram sx={{ color: 'black' }} />
                    <X sx={{ color: 'black' }} />
                    <YouTube sx={{ color: 'black' }} />
                </Stack>
            </Box>
        </Box>
    )
}

const Element = (): ReactElement => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                // backgroundColor: 'secondary.main',
                pt: "1rem",
                pb: "1rem",
            }}
            component='footer'
        >
            <Container maxWidth="lg" >
                <Grid container flexDirection={{xs: 'column-reverse',md: 'row'}} alignItems='center' >
                    <Grid item xs={6} >
                        <Typography fontSize={{ xs: '0.7em', sm: '1em' }} >@kdessi {new Date().getFullYear()} | All rights reserved</Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <Stack direction='row' justifyContent='center' alignItems='center' spacing={4} >
                            <Facebook sx={{ color: 'black' }} />
                            <Instagram sx={{ color: 'black' }} />
                            <X sx={{ color: 'black' }} />
                            <YouTube sx={{ color: 'black' }} />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Element