import React, { useState, useEffect, } from 'react';

import { useLayoutEffect } from "react";
import { Container, Grow, Grid, AppBar, Paper, Card, Divider, Avatar, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Link } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input'

import { getPostsBySearchtype } from '../../actions/posts';
import schlitzlogo from '../../images/schlitzlogo.png'
import Posts from '../Posts/Posts';
import ControlledCarousel from '../Carousel/Carousel';
import Form from '../Form/Form';
import Form2 from '../Form2/Form2';
import Form3 from '../Form3/Form3';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import img from '../../images/home1-1.webp'
import img2 from '../../images/landscaping-gallery-12-new.webp'
import img3 from '../../images/oSrdLsZLXznS11JB.webp'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getPosts } from '../../actions/posts';


import useStyles from './styles';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';





const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});




function useQuery() {
  return new URLSearchParams(useLocation().search);
}
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

const Home = () => {

  const [open, setOpen] = React.useState(false);

  
  window.onload = () => { setOpen(true) }

  const handleClose = () => {
    setOpen(false);
  };
  const { numberOfPages } = useSelector((state) => state.posts);

  const classes = useStyles();

  const query = useQuery();

  const searchQuery = query.get('searchQuery');

  const dothing = () => {

    dispatch(getPosts(1))
  }
  const [width] = useMediaQuery();
  const [currentId, setCurrentId] = useState(0);
  const [editflipstatus, seteditflipstatus] = useState(false);
  const [editbuildstatus, seteditbuildstatus] = useState(false);
  const [editbuyandholdstatus, seteditbuyandholdstatus] = useState(false)

  const [page, setPage] = useState(1);
  const [search2, setSearch2] = useState('');
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();



  
  useEffect(() => {

  dispatch(getPosts(page));


    

  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const searchPost2 = () => {

    if (search2.trim() || tags) {
      setPage(1);
      dispatch(getPostsBySearchtype({ search2, tags: tags.join(',') }));

    }
  };

  const searchAll = () => {
    setPage(1);
    dispatch(getPosts())
  }

  const pageUp = () => {

    if (page < numberOfPages) {

      var ourPage = page + 1
      setPage(ourPage)
      dispatch(getPosts(ourPage))
    }




  }
  const pageDown = () => {

    if (page > 1) {
      console.log('down')
      setPage(page - 1)
      dispatch(getPosts(page))

    }

  }



  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

  const user = JSON.parse(localStorage.getItem('profile'));


  if (editflipstatus) {
    return <Form className={classes.form} currentId={currentId} seteditflipstatus={seteditflipstatus} setCurrentId={setCurrentId}></Form>
  }
  if (editbuyandholdstatus) {
    return <Form2 className={classes.form} currentId={currentId} seteditbuyandholdstatus={seteditbuyandholdstatus} setCurrentId={setCurrentId}></Form2>
  }
  if (editbuildstatus) {
    return <Form3 className={classes.form} currentId={currentId} seteditbuildstatus={seteditbuildstatus} setCurrentId={setCurrentId}></Form3>
  }


  if (!user?.result?.name) {

    return width < 1000 ? (

      <>
        <div>

          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Welcome to DealUploader.com (beta)"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                This site is under construction but you should still feel
                free to look around, create a free acount, and check out recently uploaded wholesale deals.

              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button className={classes.searchButton} onClick={handleClose}>Okay</Button>

            </DialogActions>
          </Dialog>
        </div>
        <ControlledCarousel className={classes.mobileCarousel} img={img} img2={img2} img3={img3} />
        <Grow in>
          <Container maxWidth="xl">
            <AppBar className={classes.appBarSearchMobile} position="static" color="inherit">

              <div className={classes.avatarCont}>     <Avatar component={Link} to={'/auth'} className={classes.purple} alt={user?.result.name} src={user?.result.profPic}>{user?.result.name.charAt(0)}</Avatar> </div>
              <Card className={classes.privpolcard}>

                <text align="center">
                  Please <Link className={classes.signIn} to={'/auth'}>sign in</Link>  to post a deal and like other deals.
                </text>

              </Card>
              <Divider style={{ margin: '20px 0' }} />
              <ChipInput
                style={{ margin: '10px 0', backgroundColor: 'white' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost2} className={classes.searchButton} variant="contained" >Search</Button>
            </AppBar>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={12} md={9}>

                <div className={classes.tabsMobile}>

                  <Tabs
                    className={classes.tabs1}
                    value={value}

                    onChange={handleChange}
                    selected={true}
                  >
                    <Tab className={classes.taball} selected={true} onMouseDown={searchAll} label="All" />
                    <Tab className={classes.tabflip} onMouseDown={(e) => setSearch2('flip')} onMouseUp={(e) => searchPost2()} label="Flips" />
                    <Tab className={classes.tabbuyandhold} onMouseDown={(e) => setSearch2('buyandhold')} onMouseUp={(e) => searchPost2()} label="Buy & Hold" />

                    <Tab className={classes.tabbuild} onMouseDown={(e) => setSearch2('build')} onMouseUp={(e) => searchPost2()} label="Builds" />

                  </Tabs>
                </div>
                <Posts setCurrentId={setCurrentId} seteditbuildstatus={seteditbuildstatus} seteditbuyandholdstatus={seteditbuyandholdstatus}
                  seteditflipstatus={seteditflipstatus} editflipstatus={editflipstatus} />
                <div className={classes.pageNav}><ArrowBackIosIcon onMouseDown={pageDown} className={classes.back} />Page {page} of {numberOfPages}<ArrowForwardIosIcon onMouseDown={pageUp} className={classes.forward} /></div>

                <Card className={classes.advertmobile}>
                  <img loading="lazy" className={classes.schlitzlogo} src={schlitzlogo}></img>
                </Card>
                <Card className={classes.advert1}>
                  <h2 variant="h4">Your Advertisment Here</h2>
                </Card>

              </Grid>
              <Grid item xs={12} sm={12} md={3}>

              </Grid>
            </Grid>
          </Container>
        </Grow>

      </>

    ) :

      (
        <div >
          <div>

            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Welcome to DealUploader.com (beta)"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  This site is under construction but you should still feel
                  free to look around, create a free acount, and check out recently uploaded wholesale deals.

                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button className={classes.searchButton} onClick={handleClose}>Okay</Button>

              </DialogActions>
            </Dialog>
          </div>

          <ControlledCarousel img={img} img2={img2} img3={img3} />
          <div className={classes.tabs}>

            <Tabs
              className={classes.tabs1}
              value={value}

              onChange={handleChange}
              selected={true}
            >   <Tab className={classes.taball} selected={true} onMouseDown={searchAll} label="All" />
              <Tab className={classes.tabflip} onMouseDown={(e) => setSearch2('flip')} onMouseUp={(e) => searchPost2()} label="Flips" />
              <Tab className={classes.tabbuyandhold} onMouseDown={(e) => setSearch2('buyandhold')} onMouseUp={(e) => searchPost2()} label="Buy & Holds" />

              <Tab className={classes.tabbuild} onMouseDown={(e) => setSearch2('build')} onMouseUp={(e) => searchPost2()} label="Builds" />

            </Tabs>
          </div>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={12} md={9}>

              <Posts setCurrentId={setCurrentId} seteditbuildstatus={seteditbuildstatus} seteditbuyandholdstatus={seteditbuyandholdstatus}
                seteditflipstatus={seteditflipstatus} editflipstatus={editflipstatus} />
              <div className={classes.pageNav}><ArrowBackIosIcon onMouseDown={pageDown} className={classes.back} />Page {page} of {numberOfPages}<ArrowForwardIosIcon onMouseDown={pageUp} className={classes.forward} /></div>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">



                <Card className={classes.privpolcard}>

                  <text align="center">
                    Please <Link className={classes.signIn} to={'/auth'}>sign in</Link>  to post a deal and like other deals.
                  </text>

                </Card>
                <Divider style={{ margin: '40px 0', backgroundColor: 'white' }} />
                <ChipInput
                  style={{ margin: '10px 0', backgroundColor: 'white' }}
                  value={tags}
                  onAdd={(chip) => handleAddChip(chip)}
                  onDelete={(chip) => handleDeleteChip(chip)}
                  label="Search Tags"
                  variant="outlined"
                />

                <Button onClick={searchPost2} className={classes.searchButton} variant="contained" >Search</Button>



              </AppBar>

              <Card className={classes.advert}>
                <img loading="lazy" className={classes.schlitzlogo} src={schlitzlogo}></img>

              </Card>
              <Card justifyContent="center" className={classes.advert1}>
                <h2 variant="h4">Your Advertisment Here</h2>
              </Card>
            </Grid>

          </Grid>


        </div>)


  }


  return width < 1000 ? (
    <>
      <div>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Welcome to DealUploader.com (beta)"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              This site is under construction but you should still feel
              free to look around, create a free acount, and check out recently uploaded wholesale deals.

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className={classes.searchButton} onClick={handleClose}>Okay</Button>

          </DialogActions>
        </Dialog>
      </div>
      <ControlledCarousel img={img} img2={img2} img3={img3} />
      <Grow in>

        <Container maxWidth="xl">

          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={12} md={9}>
              <AppBar className={classes.appBarSearchMobile} position="static" color="inherit">
                <div className={classes.avatarCont}>     <Avatar component={Link} to={`/creators2/${user?.result.name}`} className={classes.purple} alt={user?.result.name} src={user?.result.profPic}>{user?.result.name.charAt(0)}</Avatar>{user.result.name}</div>

                <Button component={Link} to="/Formpage" color="" className={classes.searchButton} variant="contained" fullWidth> Post A Deal  </Button>


                <Divider style={{ margin: '20px 0' }} />
                <ChipInput
                  style={{ margin: '10px 0', backgroundColor: 'white' }}
                  value={tags}
                  onAdd={(chip) => handleAddChip(chip)}
                  onDelete={(chip) => handleDeleteChip(chip)}
                  label="Search Tags"
                  variant="outlined"
                />
                <Button onClick={searchPost2} className={classes.searchButton} variant="contained" >Search</Button>
              </AppBar>
              <div className={classes.tabsMobile}>

                <Tabs
                  className={classes.tabs1}
                  value={value}

                  onChange={handleChange}
                  selected={true}
                > <Tab className={classes.taball} selected={true} onMouseDown={searchAll} label="All" />
                  <Tab className={classes.tabflip} onMouseDown={(e) => setSearch2('flip')} onMouseUp={(e) => searchPost2()} label="Flips" />
                  <Tab className={classes.tabbuyandhold} onMouseDown={(e) => setSearch2('buyandhold')} onMouseUp={(e) => searchPost2()} label="Buy & Hold" />

                  <Tab className={classes.tabbuild} onMouseDown={(e) => setSearch2('build')} onMouseUp={(e) => searchPost2()} label="Builds" />

                </Tabs>
              </div>

              <Posts setCurrentId={setCurrentId} seteditbuildstatus={seteditbuildstatus} seteditbuyandholdstatus={seteditbuyandholdstatus}
                seteditflipstatus={seteditflipstatus} editflipstatus={editflipstatus} />
              <div className={classes.pageNav}><ArrowBackIosIcon onMouseDown={pageDown} className={classes.back} />Page {page} of {numberOfPages}<ArrowForwardIosIcon onMouseDown={pageUp} className={classes.forward} /></div>


              <Card className={classes.advertmobile}>
                <img loading="lazy" className={classes.schlitzlogo} src={schlitzlogo}></img>
              </Card>
              <Card className={classes.advert1}>
                <h2 variant="h4">Your Advertisment Here</h2>
              </Card>

            </Grid>
            <Grid item xs={12} sm={12} md={3}>

            </Grid>
          </Grid>
        </Container>
      </Grow>

    </>
  ) : (




    <div>
      <div>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Welcome to DealUploader.com (beta)"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              This site is under construction but you should still feel
              free to look around, create a free acount, and check out recently uploaded wholesale deals.

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className={classes.searchButton} onClick={handleClose}>Okay</Button>

          </DialogActions>
        </Dialog>
      </div>
      <ControlledCarousel img={img} img2={img2} img3={img3} />
      <div className={classes.tabs}>

        <Tabs
          className={classes.tabs1}
          value={value}

          onChange={handleChange}
          selected={true}
        >   <Tab className={classes.taball} selected={true} onMouseDown={searchAll} label="All" />
          <Tab className={classes.tabflip} onMouseDown={(e) => setSearch2('flip')} onMouseUp={(e) => searchPost2()} label="Flips" />
          <Tab className={classes.tabbuyandhold} onMouseDown={(e) => setSearch2('buyandhold')} onMouseUp={(e) => searchPost2()} label="Buy & Holds" />

          <Tab className={classes.tabbuild} onMouseDown={(e) => setSearch2('build')} onMouseUp={(e) => searchPost2()} label="Builds" />

        </Tabs>
      </div>
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={9}>

          <Posts setCurrentId={setCurrentId} seteditbuildstatus={seteditbuildstatus} seteditbuyandholdstatus={seteditbuyandholdstatus}
            seteditflipstatus={seteditflipstatus} editflipstatus={editflipstatus} />
          <div className={classes.pageNav}><ArrowBackIosIcon onMouseDown={pageDown} className={classes.back} />Page {page} of {numberOfPages}<ArrowForwardIosIcon onMouseDown={pageUp} className={classes.forward} /></div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <AppBar className={classes.appBarSearch} position="static" color="inherit">





            <Button component={Link} to="/Formpage" variant="contained" className={classes.searchButton} fullWidth> Post A Deal  </Button>


            <Divider style={{ margin: '20px 0' }} />
            <ChipInput
              style={{ margin: '10px 0', backgroundColor: 'white' }}
              value={tags}
              onAdd={(chip) => handleAddChip(chip)}
              onDelete={(chip) => handleDeleteChip(chip)}
              label="Search Tags"
              variant="outlined"
            />

            <Button onClick={searchPost2} className={classes.searchButton} variant="contained" >Search</Button>




          </AppBar>

          <Card className={classes.advert}>
            <img loading="lazy" className={classes.schlitzlogo} src={schlitzlogo}></img>

          </Card>
          <Card justifyContent="center" className={classes.advert1}>
            <h2 variant="h4">Your Advertisment Here</h2>
          </Card>
        </Grid>

      </Grid>

    </div>


  )
};

export default Home;

