"use client"
import Link from 'next/link';
import { DarkMode, LightMode, LogoutOutlined, Menu } from '@mui/icons-material'
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { useContext, useState } from 'react';
import { AppThemeContext } from '@/lib/theme_registry';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './theme_switcher';

interface Route {
  name: string
  link: string
}

const Header = () => {

  const [routeId, setRouteId] = useState<number>(0);

  const themeContext = useContext(AppThemeContext)

  const links: Route[] = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Portfolio',
      link: '/portfolio'
    },
    {
      name: 'Blog',
      link: '/blog'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Dashboard',
      link: '/dashboard/login'
    },
  ];

  const path = usePathname();



  const handleThemeChange = () => {
    themeContext?.toggle();
  }

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            bgcolor: "white",
            // mb: 3,
          }}
        >
          <Stack
            // container
            width='100%'
            direction='row'
            py={1}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Link href='/' style={{ textDecoration: 'none' }} >
              <Typography color="secondary" sx={{ fontSize: "2.5rem", fontWeight: 'bold', '&:hover': { color: 'black' }, cursor: 'pointer' }} >
                DeBlog
              </Typography>
            </Link>

            <Stack
              direction="row"
              display={{
                xs: "none",
                md: "flex",
              }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <ThemeSwitch sx={{display: { xs: "flex" },}} value={themeContext?.mode != 'light'} onClick={() => themeContext?.toggle()} />
              {
                links.map((route, index) => (
                  <Link href={route.link} key={index} style={{ textDecoration: 'none' }} >
                    <Typography variant="h6" color={path == route.link ? "primary" : 'secondary'} sx={{ fontSize: 20, fontWeight: 'bold', '&:hover': { color: 'primary.dark' }, cursor: 'pointer' }} >
                      {route.name}
                    </Typography>
                  </Link>
                )
                )
              }
              <IconButton size='large' >
                <LogoutOutlined fontSize='large' />
              </IconButton>

              {/* Resonsive menu icon */}
              <IconButton
                // onClick={openDrawer}
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <Menu sx={{ color: "#005B41" }} />
                {/* <MenuIcon sx={{ color: "#005B41" }} /> */}
              </IconButton>
            </Stack>

            {/* <Button>
              <Typography variant="h6" color="#166B54">
                <Screen />
              </Typography>
            </Button> */}


          </Stack>
        </Toolbar>
      </AppBar>
      <br/>
      <br/>
      {/* <Toolbar /> */}
    </>
  )
}



export default Header