import { Stack, Typography, Box } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const sections: object[] = [
    {
        link: 'illustrations',
        image: 'illustrations.png',
        text: 'Illustrations',
        alt: 'Illustration'
    },
    {
        link: 'websites',
        image: 'websites.jpg',
        text: 'Websites',
        alt: 'websites',
    },
    {
        link: 'illustrations',
        image: 'apps.png',
        text: 'Illustrations',
    },
];

const Portfolio = () => {
    return (
        <Stack justifyContent='space-between' alignItems='start' spacing={2}>
            <Typography fontSize={{ xs: '6rem' }} color='secondary' fontWeight='bold' >
                Our works
            </Typography>
            <Typography fontSize={{ xs: '1.5rem' }} color='secondary' fontWeight='bold' >
                Choose a gallery
            </Typography>
            <Stack width='100%' direction='row' justifyContent='space-between' alignItems='center' >

                <Link href='/portfolio/illustrations' style={{ textDecoration: 'none' }} >
                    <Box width={{ xs: '80%', md: 300, xl: 400 }} height={{ xs: 400, md: 450, xl: 550 }} position='relative' borderRadius={2} border='5px solid green' >
                        <Image fill={true} objectFit="cover" src='/assets/illustration.png' alt="Illustration" />
                        <Typography fontSize='2rem' fontWeight='bold' color='secondary.light' sx={{ position: 'absolute', bottom: 10, left: {xs: 60, md: 120}, }} >Illustrations</Typography>
                    </Box>
                </Link>

                <Link href='/portfolio/websites' style={{ textDecoration: 'none' }} >
                    <Box width={{ xs: '80%', md: 300, xl: 400 }} height={{ xs: 400, md: 450, xl: 550 }} position='relative' borderRadius={2} border='5px solid green' >
                        <Image fill={true} objectFit="cover" src='/assets/websites.jpg' alt="copy paste" />
                        <Typography fontSize='2rem' fontWeight='bold' color='secondary.light' sx={{ position: 'absolute', bottom: 10, left: {xs: 110, md: 120}, }} >Websites</Typography>
                    </Box>
                </Link>

                <Link href='/portfolio/applications' style={{ textDecoration: 'none' }} >
                    <Box width={{ xs: '80%', md: 300, xl: 400 }} height={{ xs: 400, md: 450, xl: 550 }} position='relative' borderRadius={2} border='5px solid green' >
                        <Image fill={true} objectFit="cover" src='/assets/apps.jpg' alt="copy paste" />
                        <Typography fontSize='2rem' fontWeight='bold' color='secondary.light' sx={{ position: 'absolute', bottom: 10, left: {xs: 45, md: 120}, }} >Applications</Typography>
                    </Box>
                </Link>

            </Stack>
        </Stack>
    )
}

export default Portfolio