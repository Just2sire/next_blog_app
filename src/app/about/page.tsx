import { Button, List, ListItem, Stack, Typography, Box } from "@mui/material"
import Image from "next/image";
import Link from 'next/link';

export const metadata = {
  title: "About",
  description: "More information about us",
}

const About = () => {
  return (
    <Stack direction='column' >
      <Box width='100%' position='relative' height={300} mb={4} border="2px solid white" borderRadius={2} >
        {/* Banner */}
        <Image fill={true} objectFit="cover" src="/assets/about.jpeg" alt="Crew" />
        <Stack position='absolute' top={170} left={10} p={1} bgcolor='primary.main' >
          <Typography fontSize='2.5rem' color='white' fontWeight='bold' >
            Digital Storytellers
          </Typography>
          <Typography fontSize='1.7rem' color='white' fontWeight='bold' >
            Handcrafting award winning digital experiences
          </Typography>
        </Stack>
      </Box>
      <Stack direction='row' spacing={4} >
        <Stack justifyContent='start' alignItems='start' direction='column' spacing={3} >
          <Typography fontSize='2.5rem' color='secondary' fontWeight='bold' >
            Who Are We ?
          </Typography>
          <Typography fontWeight='bold' color='secondary' fontSize={{ xs: '1rem' }} >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quam excepturi ut facere? Ad deserunt eveniet numquam
          </Typography>
          <Typography fontWeight='bold' color='secondary' fontSize={{ xs: '1rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nam quas porro assumenda? Laboriosam aspernatur maxime laborum.
            Nam quas porro assumenda? Laboriosam aspernatur maxime laborum.
            Quam excepturi ut facere? Ad deserunt eveniet numquam consequuntu
          </Typography>
          <Typography fontWeight='bold' color='secondary' fontSize={{ xs: '1rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nam quas porro assumenda? Laboriosam aspernatur maxime laborum.
            Quam excepturi ut facere? Ad deserunt eveniet numquam consequuntur
          </Typography>
        </Stack>
        <Stack justifyContent='space-between' alignItems='start' direction='column' spacing={3} >
          <Typography fontSize='2.5rem' color='secondary' fontWeight='bold' >
            What We Do ?
          </Typography>
          <Typography color='secondary' fontWeight='bold' fontSize={{ xs: '1rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nam quas porro assumenda? Laboriosam aspernatur maxime laborum.
            Nam quas porro assumenda? Laboriosam aspernatur maxime laborum.
            Nam quas porro assumenda? Laboriosam aspernatur maxime laborum.
            Quam excepturi ut facere? Ad deserunt eveniet numquam consequuntur
          </Typography>
          <List sx={{ fontWeight: 'bold' }}>
            <ListItem  color='secondary' >- Creative Illustrations</ListItem>
            <ListItem  color='secondary' >- Dynamic Websites</ListItem>
            <ListItem  color='secondary' >- Fast and Handy Mobile Apps</ListItem>
          </List>
          <Link href='/contact' style={{ textDecoration: 'none' }} >
            <Button variant='contained' color='success' sx={{ px: 2, py: 1, fontWeight: 'bold' }} >Contact</Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default About