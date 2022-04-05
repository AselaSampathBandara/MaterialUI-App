import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { IconButton } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function SwipeableFooterDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 55 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
            <IconButton>
              <CalendarMonthIcon />
            </IconButton>
      </List>
      <List>
            <IconButton>
              <NoteAltIcon />
            </IconButton>
      </List>
      <List>
            <IconButton>
              <TaskAltRoundedIcon />
            </IconButton>
      </List>
      <List>
            <IconButton>
              <AccountCircleRoundedIcon />
            </IconButton>
      </List>
      <List>
            <IconButton>
              <LocationOnRoundedIcon />
            </IconButton>
      </List>
      <Divider />
      <list>
      <IconButton>
              <AddRoundedIcon />
            </IconButton>
      </list>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}