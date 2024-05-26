'use client' // Error components must be Client Components
 
import { Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Stack justifyContent='space-evenly' alignItems='center' height="100vh" >
      <Typography fontSize='4rem' fontWeight='bold' >Something went wrong!</Typography>
      <Image height={500} width={500} src='/assets/404.png' alt='404 error' />
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Stack>
  )
}