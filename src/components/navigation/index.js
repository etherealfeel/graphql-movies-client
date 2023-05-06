import { useState, useContext, useCallback } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Divider,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { AppContext } from '../../providers/appContext';
import { LOCALES } from '../../const';
import translate from '../../utils/translate';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: 'setLocale',
      locale,
    });
  }, []);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={translate('navigation.settings')} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: (theme) => theme.palette.grey[900] }}
      >
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
          <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: 'white' }}
            >
              <FormattedMessage id="navigation.home" />
            </Typography>
          </Link>

          <Box
            sx={{
              p: 1,
              border: '1px solid white',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: '#4a4a4a',
            }}
          >
            {state.locale}
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button
              disabled={state.locale === LOCALES.ENGLISH}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              ENG
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button
              disabled={state.locale === LOCALES.UKRAINIAN}
              onClick={() => setLanguage(LOCALES.UKRAINIAN)}
            >
              УКР
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              to="settings"
              component={RouterLink}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <FormattedMessage id="navigation.settings" />
            </Button>
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
