"use client"
import Utils from "@/lib/utils";
import { Box, Stack, Button, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react";

const postMessage = async (data: object) => {
    try {
        const post = await fetch(
            `${Utils.baseUrl}/contacts`,
            { method: "POST", body: JSON.stringify(data), }
        );

        const result = await post.json();

        return { message: result };
    } catch (error: any) {
        return `An error occurred: ${error.message}`;
    }

}

const Contact = () => {

    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleInputChanges = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setFormData((previous) => ({ ...previous, [inputName]: inputValue }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const postData = postMessage(formData);
        // console.log(postData);
        
    };

    return (
        <Stack alignItems='center' spacing={4} >
            <Typography fontSize='2.5rem' fontWeight='bold' >Let's Keep in Touch</Typography>
            <Stack width='100%' alignItems='center' flexDirection={{ xs: 'column', md: 'row' }} direction='row' spacing={4} >
                <Box position='relative' width={{xs: '100%', md: '50%'}} height={{xs: 300, md: 500, xl: 600}} >
                    <Image fill={true} objectFit="contain" src={"/assets/contact.png"} alt="Ad illustration" />
                </Box>
                <Stack onSubmit={(e) => handleSubmit(e)} justifyContent={{ xs: 'center' ,md: 'start' }} alignItems={{xs: 'center', md: 'start',}} width={{xs: '100%' ,md: '50%', xl: '40%'}} spacing={3} component="form" >
                    <TextField name="name" onChange={(e) => handleInputChanges(e)} fullWidth placeholder="Name" type="text" />
                    <TextField name="email" onChange={(e) => handleInputChanges(e)} fullWidth placeholder="Email" type="email" />
                    <TextField name="message" onChange={(e) => handleInputChanges(e)} fullWidth placeholder="Message" type="text" multiline rows={4} />
                    <Button type="submit" variant='contained' color='success' sx={{ px: 2, py: 1, width: { xs: 150 }, fontWeight: 'bold' }} >Submit</Button>
                    {/* <TextField sx={{ width: '100%', height: 100 }} /> */}
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Contact