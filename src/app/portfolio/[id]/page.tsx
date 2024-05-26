import { Stack, Typography, Box, Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const Works = ({ params }: { params: { id: string } }) => {

    // console.log(params.id);

    return (
        <Stack justifyContent='space-between' alignItems='start' spacing={2}>
            <Typography fontSize={{ xs: '6rem' }} fontWeight='bold' >
                Our works
            </Typography>
            <Typography fontSize={{ xs: '1.5rem' }} fontWeight='bold' >
                {params.id.toUpperCase()}
            </Typography>

            {
                [1, 2, 3, 4, 5].map((_, index) => (
                    <Stack key={index} width='100%' direction={(index % 2 == 0) ? 'row' : 'row-reverse'} justifyContent='space-between' alignItems='center' spacing={5} >

                        <Stack width='50%' alignItems='start' justifyContent='start' spacing={2}>
                            <Typography fontSize={{ xs: '2rem' }} fontWeight='bold' >
                                Creative Portfolio
                            </Typography>
                            <Typography fontSize={{ xs: '1.3rem' }} fontWeight='bold' >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium tempore laudantium nam
                                praesentium dolore in odit iste, totam tempora asperiores officia quaerat quasi fugiat reprehenderit
                                molestiae provident non cumque dictature.
                            </Typography>
                            <Link style={{ textDecoration: 'none' }} href='/'>
                                <Button variant="contained" color="success" sx={{ px: 2, py: 1 }} >See More</Button>
                            </Link>
                        </Stack>
                        <Box width='50%' >
                            <Image height={400} width={500} src='/assets/portfolio_image.png' alt="Code example" />
                        </Box>

                    </Stack>
                ))
            }

        </Stack>
    )
}

export default Works