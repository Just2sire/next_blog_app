import Utils from "@/lib/utils";
import { Stack, Typography, Box, Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const getPosts = async () => {
    
    try {
        const data = await fetch(
            `${Utils.baseUrl}/posts`,
            { next: { revalidate: 10 } }
        );
    
    
        const result: { data: any[], message: string } = await data.json();
    
        return result.data;
    } catch (error: any) {
        return `An error occurred: ${error.message}`;
    }
};

const Blog = async () => {
    const data = await getPosts();
    // console.log(data);


    return (
        <Stack>
            {
                !Array.isArray(data) || data.length == 0 ?
                    <Stack alignItems='center' justifyContent='center' spacing={4} >
                        <Typography color='secondary' fontSize={{ xs: '2rem' }} fontWeight='bold' >
                            Aucun post actuellement
                        </Typography>
                        <Box width={{ xs: '50%' }} >
                            <Image height={400} width={400} src='/assets/empty_blog.png' alt="Empty post" />
                        </Box>
                    </Stack>
                    :
                    data.map((value, index) => (
                        <Stack key={index} width='100%' flexDirection={{ xs: 'column', md: 'row' }} direction='row' justifyContent={{xs: 'space-between', xl: 'start'}} alignItems='center' my={2} py={3} spacing={{xs: 5, xl: 2}} >

                            <Box position='relative' width={{ xs: '50%',xl: '30%' }} height={{xs: 300}} >
                                <Image fill={true} objectFit="contain" src={`/assets/${value?.image ?? 'portfolio_image.png'}`} alt="Code example" />
                            </Box>

                            <Stack width={{ xs: '60%' }} alignItems='start' justifyContent='start' p={3} spacing={2}>
                                <Link style={{ textDecoration: 'none', }} href={`/blog/${value.id}`}>
                                    <Typography color='secondary' fontSize={{ xs: '2rem' }} fontWeight='bold' >
                                        {value?.title ?? 'Titre secondaire'}
                                    </Typography>
                                </Link>
                                <Typography color='secondary.light' fontSize={{ xs: '1.1rem' }} >
                                    {
                                        value?.body?.substring(0, 100) + "..." ?? "La description de ce post rencontre un petit problème..."
                                    }
                                </Typography>
                                <Typography display='flex' flexDirection='row' color='secondary' fontSize={{ xs: '1rem' }} >
                                    Written by<Typography fontStyle='italic' >{`__${value?.user?.name}` ?? 'John Doe'}</Typography>
                                </Typography>
                            </Stack>

                        </Stack>
                    ))
            }
        </Stack>
    )
}

export default Blog