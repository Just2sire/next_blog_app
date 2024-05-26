import { Box, Button, Stack, Typography } from "@mui/material"
import Image from "next/image"

const Home = () => {
  return (
    <Stack direction='row' minHeight={{ xs: '75vh' }} justifyContent="space-between" flexDirection={{ xs: 'column-reverse', md: 'row', }} alignItems="center" spacing={1} >
      <Stack width={{md: '48%'}} direction='column' justifyContent="space-between" alignItems="start" spacing={4} >
        <Typography fontSize={{ xs: "3rem", md: "3.5rem", xl: '5rem' }} className="title" fontWeight='bold' color={'black'} >
          Better design for your digital products
        </Typography>
        <Typography fontSize={{ xs: "1.3rem", md: "1.5rem" }} color={'black'} >
          Turning your idea into Reality. We bring together
          the teams from the global tech industry
        </Typography>
        <Button variant="contained" color="success" sx={{ px: 3, py: 2 }} >See Our Works</Button>
      </Stack>
      <Box position='relative' width={{xs: 400, md: 500, xl: 600}} height={{ xs: 400, md: 500, xl: 600 }} >
        <Image fill={true} objectFit="cover" className="home_image" src={"/assets/hero.png"} alt="Ad illustration" />
      </Box>
    </Stack>
  )
}

export default Home