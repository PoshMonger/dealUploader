import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Button, Menu, MenuItem, Icon } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import mainlogo from '../../images/dealuploadbeta.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import { useLayoutEffect } from "react";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function useMediaQuery() {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;


}

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={'up'} in={!trigger}>

      {children}
    </Slide>
  )

}



const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const [width] = useMediaQuery();

  const [height] = useMediaQuery();
  const home = () => {

    history.push('/')

  }

  return width < 1000 ? (

    <AppBar className={classes.appBarMobile}>
      <ScrollToTop/>
      <div className={classes.appBarContMobile}>
        <AppBar className={classes.preAppBarMobile}>
        
        <div className={classes.contactCont}>
        <div className={classes.number}><LocalPhoneIcon className={classes.linkIcon}></LocalPhoneIcon><a className={classes.link} href="tel:9412674663"> (941) 267 4663</a></div>
          <div className={classes.email}><EmailIcon className={classes.linkIcon}></EmailIcon> <a className={classes.link} href='mailto:dealuploader@gmail.com'>  dealuploader@gmail.com</a></div>
        </div>
        </AppBar>
        <img onClick={home} className={classes.imageMobile} src={mainlogo} alt="icon" />
  
        <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menu}>

        </MenuIcon>
        <Menu
          className={classes.menuContainer}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {user?.result ? (

            <div justifyContent="center" className={classes.profileMobile}>

              <Avatar component={Link} to={`/creators2/${user?.result.name}`} className={classes.purple} alt={user?.result.name} src={user?.result.profPic}>{user?.result.name.charAt(0)}</Avatar>
              <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to={'/'}>Home</MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to={'/Formpage'}>Upload</MenuItem>
              <MenuItem className={classes.menuItem} component={Link} to={'/auth'}>Account</MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to="/About"  >About</MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to="/Blog"  >Blog</MenuItem>

            </div>
          ) : (

            <div className={classes.profileMobile}>
              <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to={'/'}>Home</MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to={'/Formpage'}>Upload</MenuItem>
              <MenuItem className={classes.menuItem} component={Link} to={'/auth'}>Account</MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to="/About"  >About</MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose} component={Link} to="/Blog"  >Blog</MenuItem>

            </div>
          )}

        </Menu>

      </div>
    </AppBar>
 

  ) : (


    <AppBar className={classes.appBar}>
         <ScrollToTop/>
      <AppBar className={classes.preAppBar}>
        <div className={classes.contactCont}>
        <div className={classes.number}><LocalPhoneIcon className={classes.linkIcon}></LocalPhoneIcon><a className={classes.link} href="tel:9412674663"> (941) 267 4663
</a></div>
          <div className={classes.email}><EmailIcon className={classes.linkIcon}></EmailIcon> <a className={classes.link} href='mailto:dealuploader@gmail.com'>  dealuploader@gmail.com</a></div>
        </div>

      </AppBar>

      <div className={classes.appBarCont}>
        <img onClick={home} className={classes.imagetext} src={mainlogo} alt="icon" />
        {user?.result ? (

          <div justifyContent="center" className={classes.profile}>
            <div className={classes.linkcont}>
              <Button className={classes.button1} component={Link} to={'/'}>Home
              </Button>
              <Button className={classes.button1} component={Link} to={'/Formpage'}>Upload</Button>
              <Button className={classes.button1} component={Link} to={'/auth'}>Account</Button>
              <Button component={Link} to="/About" className={classes.button1} >About</Button>
              <Button component={Link} to="/Blog" className={classes.button1} >Blog</Button>

              <Avatar component={Link} to={`/creators2/${user?.result.name}`} className={classes.purple} alt={user?.result.name} src={user?.result.profPic}>{user?.result.name.charAt(0)}wewe</Avatar>

            </div>

          </div>

        ) : (


          <div className={classes.profile}>
            <div className={classes.linkcont}>
              <Button className={classes.button1} component={Link} to={'/'}>Home
              </Button>
              <Button className={classes.button1} component={Link} to={'/Formpage'}>Upload
              </Button>
 <Button className={classes.button1} component={Link} to={'/auth'}>Account</Button>
              <Button component={Link} to="/About" className={classes.button1}  >About</Button>
              <Button component={Link} to="/Blog" className={classes.button1} >Blog</Button>
            </div>
          </div>

        )}

      </div>
    </AppBar>
   
  )
};

export default Navbar;
