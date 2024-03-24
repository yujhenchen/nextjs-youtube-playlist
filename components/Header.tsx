'use client';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import AppLink from './AppLink';

const navItems = [
  { id: 'bands', href: '/bands', text: 'Bands' },
  { id: 'playlists', href: '/playlists', text: 'Playlists' },
  { id: 'about', href: '/about', text: 'About' }
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* <AppLink href='/'>LOGO</AppLink> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {navItems.map(({ id, href, text }) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <AppLink
                    key={id}
                    href={href}
                    prefetch={true}
                    onClick={handleCloseNavMenu}
                  >
                    {text}
                  </AppLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          {/* <AppLink href='/'>LOGO</AppLink> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map(({ id, href, text }) => (
              <AppLink
                key={id}
                href={href}
                prefetch={true}
                onClick={handleCloseNavMenu}
              >
                {text}
              </AppLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
