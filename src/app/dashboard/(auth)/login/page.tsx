'use client'
import Utils from '@/lib/utils';
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';

const postUser = async (data: object) => {
    try {
        const user = await fetch(
            `${Utils.baseUrl}/users`,
            { method: "POST", body: JSON.stringify(data), }
        );

        const result = await user.json();

        return { message: result };
    } catch (error: any) {
        return `An error occurred: ${error.message}`;
    }

}

const Login = () => {

    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleInputChanges = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setFormData((previous) => ({ ...previous, [inputName]: inputValue }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const postData = postUser(formData);
        console.log(postData);
        
    };

    return (
        <Stack flexDirection='column' alignItems={{ xs: 'center' }} justifyContent={{ xs: 'center' }} width={{ xs: '100%' }} height={{ xs: '100%' }} spacing={3} >
            <Typography color='secondary' fontWeight='bold' fontSize='2.5rem' >Welcome Back</Typography>
            <Typography color='secondary' fontWeight='bold' fontSize='1.5rem' >Please sign in to see the dashboard</Typography>
            <Stack onSubmit={(e) => handleSubmit(e)} width={{ xs: '80%', sm: '40%', lg: '30%', xl: '25%' }} spacing={3} component="form" >
                <TextField name="email" onChange={(e) => handleInputChanges(e)} fullWidth required placeholder="Email" type="email" />
                <TextField name="password" onChange={(e) => handleInputChanges(e)} fullWidth required placeholder="Password" type="text" />
                <Button type="submit" variant='contained' color='success' sx={{ p: 2,  fontSize: '0.8rem', fontWeight: 'bold' }} >Login</Button>
                <Button type="submit" variant='contained' color='error' sx={{ p: 2,  fontSize: '0.8rem', fontWeight: 'bold' }} >Login with Google</Button>
                {/* <TextField sx={{ width: '100%', height: 100 }} /> */}
            </Stack>
            <Typography color='secondary.dark' fontWeight='bold' fontSize='1.3rem' >- OR -</Typography>
            <Link href='/dashboard/register' style={{ textDecorationColor: 'black' }} >
            <Typography color='secondary.dark' fontWeight='bold' fontSize='1.1rem' >Create new account</Typography>

            </Link>

        </Stack>
    )
}

export default Login