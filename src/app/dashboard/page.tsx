import Login from '@/components/login'
import { Avatar, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const Dashboard = () => {
  const user: User = {
    id: 1,
    name: "Desiré",
    email: "desiré@gmail.com",
    createdAt: new Date("2024-05-24"),
    updatedAt: new Date("2024-05-24"),
  }
  return (
    <Grid display='flex' container flexDirection={{ xs: 'row', md: 'row' }} alignItems='center' spacing={5} rowSpacing={4} >
      {/* <Login /> */}
      <Grid item xs={8} >
        <Paper>

        </Paper>
      </Grid>
      <Grid item display='flex' flexDirection={{ xs: 'column' }} columnSpacing={3} xs={4} >
        <Paper sx={{ p: 1 }}  >
          <Stack justifyContent='space-around' alignItems='center' >
            <Avatar variant='circular' sx={{ height: 150, width: 150 }} sizes='large'>
              <Typography color='white' fontSize={{ xs: '3.5rem' }} >
                {user?.name?.at(0)?.toUpperCase() ?? "John Smith"}
              </Typography>
            </Avatar>
            <Typography color='secondary.light' fontSize={{ xs: '1.1rem' }} >
              {user?.name}
            </Typography>
            <Typography color='secondary.light' fontSize={{ xs: '1.1rem' }} >
              {user?.email}
            </Typography>
          </Stack>
        </Paper>
        <Paper sx={{ p: 4 }}  >
          <Stack justifyContent='space-around' alignItems='start' >
            <Typography fontSize={{ xs: '2.5rem' }} >
              Stats
            </Typography>
            <Stack width='100%' direction='row' justifyContent='space-around' alignItems='start'  >
              <Typography color='secondary.light' fontSize={{ xs: '1.1rem' }} >
                Posts:
              </Typography>
              <Typography color='secondary.light' fontSize={{ xs: '1.1rem' }} >
                12
              </Typography>
            </Stack>
            <Stack width='100%' direction='row' justifyContent='space-around'  >
              <Typography color='secondary.light' fontSize={{ xs: '1.1rem' }} >
                Messages:
              </Typography>
              <Typography color='secondary.light' fontSize={{ xs: '1.1rem' }} >
                12
              </Typography>
            </Stack>
          </Stack>
        </Paper>

      </Grid>
    </Grid>
  )
}

export default Dashboard