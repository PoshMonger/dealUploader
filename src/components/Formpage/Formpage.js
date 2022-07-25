import React, { useState } from 'react';
import { Grid, Button, Card, Typography } from '@material-ui/core';
import buyandhold from '../../images/buyandhold.jpg'
import flip from '../../images/flip.jpg'
import build from '../../images/build.jpg'
import Form from '../Form/Form';
import Form2 from '../Form2/Form2';
import Form3 from '../Form3/Form3';
import { useLayoutEffect } from "react";
import useStyles from './styles';
import { useHistory, useLocation, Link } from 'react-router-dom';
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
const Formpage = () => {
  const classes = useStyles();
  const [width] = useMediaQuery();
  const [height] = useMediaQuery();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentId, setCurrentId] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [form1, setForm1] = useState(false);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const history = useHistory();
  const setForm1now = () => {

    setForm1(true)


  }
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const setForm2now = () => {

    setForm2(true)

  }

  const setForm3now = () => {

    setForm3(true)

  }


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };


  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };



  if (form1 && user?.result) {
    return <Form className={classes.form} currentId={currentId} setCurrentId={setCurrentId}></Form>

  }
  if (form1) {
    history.push('/auth')
    alert('Please sign in to upload a deal')
  }
  if (form2 && user?.result) {
    return <Form2 className={classes.form} currentId={currentId} setCurrentId={setCurrentId} />

  }
  if (form2) {
    history.push('/auth')
    alert('Please sign in to post a deal')
  }
  if (form3 && user?.result) {
    return <Form3 className={classes.form} currentId={currentId} setCurrentId={setCurrentId} />
  }
  if (form3) {
    history.push('/auth')
    alert('Please sign in to post a deal')
  }


  return width < 1000 ? (

    <Grid className={classes.containerMobile} align="center" justify="center" container alignItems="stretch" spacing={1}>

<ScrollToTop/>

      <Grid>
        <Card className={classes.card1}>
          <div className={classes.formcont1}>
            <h1>Flip</h1>
            <text className={classes.mobileDesc}>A "Flip" is a home that can be bought under market value, and right away turned around and sold for a profit. These types of deal are a great way to make fast cash.
            </text>
            <img className={classes.formimgMobile} src={flip}></img>
            <Button className={classes.button1} aria-controls="simple-menu" aria-haspopup="true" onClick={setForm1now}>
              Post A Flip
            </Button>

          </div>

        </Card>
      </Grid>


      <Grid>
        <Card className={classes.card1}>
          <div className={classes.formcont1}>
            <h1 variant="h5">Buy And Hold </h1>
            <text className={classes.mobileDesc}>A "Buy And Hold" is a property that is able to be bought under or at market value, but will require some patience before the buyer can make a profit.
            </text>
            <img className={classes.formimgMobile} src={buyandhold}></img>
            <Button className={classes.button1} aria-controls="simple-menu" aria-haspopup="true" onClick={setForm2now}>
              Post A Buy and Hold
            </Button>

          </div>

        </Card>
      </Grid>

      <Grid>

        <Card className={classes.card1}>


          <div className={classes.formcont1}>
            <h1 variant="h5">Build </h1>
            <text className={classes.mobileDesc}>A "Build" is considered a property than needs some work. Renovations and environmental considerations are often a big part of a "Build". </text>
            <img className={classes.formimgMobile} src={build}></img>
            <Button className={classes.button1} aria-controls="simple-menu" aria-haspopup="true" onClick={setForm3now}>
              Post A Build
            </Button>

          </div>

        </Card>
      </Grid>





    </Grid>



  ) : (
  
  <Grid className={classes.container} align="center" justify="center" container alignItems="stretch" spacing={1}>
     <ScrollToTop/>
    <Grid item>
      <Card className={classes.card}>

        <div className={classes.formcont}>
          <h1 variant="h5">Flip</h1>
          <text>A "Flip" is a home that can be bought under market value, and right away turned around and sold for a profit. These types of deal are a great way to make fast cash. </text>
          <Button className={classes.button1} aria-controls="simple-menu" aria-haspopup="true" onClick={setForm1now}>
            Post A Flip
          </Button>

        </div>
        <img className={classes.formimg} src={flip}></img>
      </Card>
    </Grid>
    <Grid>
      <Card className={classes.card}>
        <div className={classes.formcont}>
          <h1 variant="h5">Buy And Hold </h1>
          <text>A "Buy And Hold" is a property that is able to be bought under or at market value, but will require some patience before the buyer can make a profit.
          </text>
          <Button className={classes.button1} aria-controls="simple-menu" aria-haspopup="true" onClick={setForm2now}>
            Post A Buy and Hold
          </Button>

        </div>
        <img className={classes.formimg} src={buyandhold}></img>
      </Card>
    </Grid>
    <Grid>

      <Card className={classes.card}>


        <div className={classes.formcont}>
          <h1 variant="h5">Build </h1>
          <text>A "Build" is considered a property than needs some work. Renovations and environmental considerations are often a big part of a "Build". </text>
          <Button className={classes.button1} aria-controls="simple-menu" aria-haspopup="true" onClick={setForm3}>
            Post A Build
          </Button>

        </div>
        <img className={classes.formimg} src={build}></img>
      </Card>
    </Grid>





  </Grid>)
};

export default Formpage;
