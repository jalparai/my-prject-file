import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import useTheme from '@mui/material/styles/useTheme';
import Sidebar from './SideBar';
import '../asserts/css/drawer.css';
import imgT from '../asserts/imgs/english.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import profile from '../asserts/imgs/profile.png'
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

interface LayoutProps {
  children: React.ReactNode;

}

const drawerWidth = 240;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    console.log('== children ===', children);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    const theme = createTheme({
        palette: {
          primary: {
            main: '#ff7777',
          },
          secondary: {
            main: '#0dcaf0',
          },
        },
      });

  return (
  <ThemeProvider theme={theme}>
      <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            zIndex: 1,
          }}
      >
        <Toolbar>
        {mobileOpen ? (
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <CloseIcon />
        </IconButton>
      ) : (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      )}
          <div className='header_flx'>
            <div className='searchbar'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path d="M17.4375 15.75H16.5488L16.2338 15.4463C17.3744 14.1233 18.0012 12.4343 18 10.6875C18 9.24123 17.5711 7.82743 16.7676 6.6249C15.9641 5.42236 14.8221 4.4851 13.4859 3.93163C12.1497 3.37817 10.6794 3.23336 9.2609 3.51551C7.84242 3.79767 6.53946 4.49411 5.51678 5.51678C4.49411 6.53946 3.79767 7.84242 3.51551 9.2609C3.23336 10.6794 3.37817 12.1497 3.93163 13.4859C4.4851 14.8221 5.42236 15.9641 6.6249 16.7676C7.82743 17.5711 9.24123 18 10.6875 18C12.4988 18 14.1638 17.3363 15.4463 16.2338L15.75 16.5488V17.4375L21.375 23.0513L23.0513 21.375L17.4375 15.75ZM10.6875 15.75C7.88625 15.75 5.625 13.4888 5.625 10.6875C5.625 7.88625 7.88625 5.625 10.6875 5.625C13.4888 5.625 15.75 7.88625 15.75 10.6875C15.75 13.4888 13.4888 15.75 10.6875 15.75Z" fill="#1E1E1E" fill-opacity="0.55" />
              </svg></span>
              <input type="text" name="" id="" placeholder='Search' />
            </div>

            <div>
              <button className='translator_btn'><span><img src={imgT} alt="" />English<ArrowDropDownIcon /> </span></button>
              <img src={profile} alt="" className='fronT-pro' />

            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: '64px', 
          position: 'relative',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  </ThemeProvider>
  );
};

export default Layout;
