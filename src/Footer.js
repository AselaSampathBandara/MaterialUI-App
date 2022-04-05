import React from 'react';
import { AppBar, IconButton, TextField, Toolbar, Typography} from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComp from './Drawer';

const Footer = () => {
  return (
    <React.Fragment>
      <AppBar position="center" color="inherit" >
        <Toolbar>
          <IconButton
          size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 1 }}
            >
              <AddSharpIcon/>
          </IconButton>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <TextField
              style={{
              left: -1000,
              marginTop: -2,
          }}
          label="Sheet1"/>
        </Toolbar>
        <DrawerComp/>
      </AppBar>
    </React.Fragment>
  );
};

export default Footer;
