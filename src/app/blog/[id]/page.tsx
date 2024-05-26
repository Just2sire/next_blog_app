import Utils from "@/lib/utils";
import { Stack, Typography, Box, Button } from "@mui/material"
import Image from "next/image"

const getPost = async (id: string) => {

    try {
        const data = await fetch(
            `${Utils.baseUrl}/posts/${id}`,
            { next: { revalidate: 10 } }
        );

        const result: { data: any, message: string } = await data.json();

        return result.data;
    } catch (error: any) {
        return `An error occurred: ${error.message}`;
    }
};

export const generateMetadata = async ({ params, searchParams }: { params: { id: string }, searchParams: any }) => {
    const post = await getPost(params.id);

    return {
        title: post.title,
        description: post.body,
    }
}

const Blog = async ({ params }: { params: { id: string } }) => {

    const data = await getPost(params.id);

    return (
        <Stack width='100%' flexDirection={{ xs: 'column', md: 'column' }} direction='row' justifyContent='space-between' alignItems='start' my={2} py={3} spacing={5} >
            <Stack width="100%" flexDirection={{xs: 'column-reverse', md: 'row' }} justifyContent={{xs: 'space-between'}} >

                <Stack width={{xs: '58%', xl: '58%' }} border="2px solid black" p={1} alignItems='start' justifyContent='start' spacing={2}>

                    <Typography color='secondary' textOverflow='clip' fontSize={{ xs: '3.5rem' }} fontWeight='bold' >
                        {data?.titles ?? 'Titre secondaire dans le monde noir'}
                    </Typography>
                    <Typography color='secondary.light' fontSize={{ xs: '1.1rem' }} >
                        {
                            data?.body ?? "La description de ce post rencontre un petit problème..."
                        }
                    </Typography>
                    <Typography display='flex' flexDirection='row' color='secondary' fontSize={{ xs: '1rem' }} >
                        Written by<Typography fontStyle='italic' >{`__${data?.user?.name}` ?? 'John Doe'}</Typography>
                    </Typography>
                </Stack>

                <Box position='relative' width={{xs: '40%', xl: '40%' }} height={{xs: 300, xl: 400}} >
                    <Image fill={true} objectFit="contain" src={`/assets/${data?.image ?? 'portfolio_image.png'}`} alt="Code example" />
                </Box>
            </Stack>
                        
        </Stack>
    )
}

export default Blog