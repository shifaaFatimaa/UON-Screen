import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ErrorIcon from '@mui/icons-material/Error';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SearchBar from './SearchBar';
import Tabs from './Tabs'

const drawerWidth = 240;

export default function LeftDrawer() {
    const items = [
        { text: 'Flagged Items 100+', icon: <ErrorIcon /> },
        { text: 'Users', icon: <AccountCircleIcon /> },
        { text: 'Admin Users', icon: <PeopleAltIcon /> },
        { text: 'Dating Events', icon: <EventIcon /> },
        { text: 'Events', icon: <GroupsIcon /> },
      ];
    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* First AppBar */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            UON 
          </Typography>

          {/* Right side Profile Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Profile Avatar" src="/static/images/avatar/1.jpg" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Second AppBar */}
      <AppBar
        position="fixed"
        sx={{
          top: '64px',  
          left: drawerWidth, 
          width: `calc(100% - ${drawerWidth}px)`, 
          backgroundColor: 'lightblue', 
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              padding: '16px',
              color:'black'
            }}
          >
            UON Users
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: '64px', // Shift the drawer below AppBar 
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          {items.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}  {/* Display the respective icon for each list item */}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider 
          sx={{ 
            backgroundColor: 'gray', 
            width: '80%',           
            height: '1px',
            marginLeft: 3,
            marginRight: 3
          }} 
        />

        <List>
          {['System Settings', 'System Messages'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <SettingsIcon /> : <MessageOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider 
          sx={{ 
            backgroundColor: 'gray', 
            width: '80%',           
            height: '1px',
            marginLeft: 3,
            marginRight: 3
          }} 
        />
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          bgcolor: 'background.default', 
          p: 3, 
          marginTop: '128px', // Avoid overlap with both AppBars (64px + 64px)
        }}
      >
        <Tabs/>
        
      </Box>
    </Box>
  );
}
