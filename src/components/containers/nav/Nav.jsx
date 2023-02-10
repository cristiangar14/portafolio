import React, { useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  CssBaseline,
  Drawer,
} from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import MenuIcon from '@mui/icons-material/Menu';

import './nav.scss';
import LinkNav from '../../pure/routerNavLink/LinkNav';

const drawerWidth = 240;
const navItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Acerca',
    path: '/about',
  },
  {
    title: 'Experiencia',
    path: '/experience',
  },
  {
    title: 'Portafolio',
    path: '/portfolio',
  },
  {
    title: 'Recursos',
    path: '/resources',
  },
  {
    title: 'Contacto',
    path: '/contact',
  },
];

const Nav = (props) => {
  const { window, back } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box className="nav--mobile" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem className="nav--mobile__item" key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <LinkNav cls="nav--mobile__link" to={item.path}>
                {item.title}
              </LinkNav>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
    return (
      <Box className={back ? 'nav--fake' : 'nav'} sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <LinkNav key={item.title} to={item.path}>
                  {item.title}
                </LinkNav>
            ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
            sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    );
};

export default Nav;
