import { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Box,
  Menu,
  MenuItem,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link to="settings">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { lg: 'none', xs: 'block' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Movies</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Link to="settings">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Settings
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
