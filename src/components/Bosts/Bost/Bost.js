import { Typography, Card, CardActions, Button, CardMedia, Avatar, Divider, Grid } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { likeBost, deleteBost } from '../../../actions/bosts';
import useStyles from './styles'
import { useLayoutEffect, useState } from "react";


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




const Bost = ({ bost, setCurrentId }) => {
  const [width] = useMediaQuery();
  const [height] = useMediaQuery();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch();
  const Likes = () => {
    if (bost?.likes?.length > 0) {
      return bost.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{bost.likes.length > 2 ? `You and ${bost.likes.length - 1} others` : `${bost.likes.length} like${bost.likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{bost.likes.length} {bost.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };



  return width > 1000 ? (

    <Card className={classes.card} fullWidth align="center">
      <Grid container spacing={0} align="center">
        <Grid item lg={12}>
          <div align="center" className={classes.bost}>
            <div align="center" className={classes.profcontainer}>
              <div align="center" className={classes.profcont}>
                <Avatar className={classes.avatar} src={bost.profPic}></Avatar>
                <Typography className={classes.name}> {bost.name}</Typography>
              </div>
              <Typography>{bost.createdAt}</Typography>

            </div>
            <div>
              <div fullWidth align="center" className={classes.contentcont}>
                <Grid item >
                  <Typography className={classes.title} variant="h4"> {bost.title}</Typography>


                  <div className={classes.message} align="left" >

                    <Typography> {bost.message}</Typography>

                  </div>
                  {bost.selectedFile ? (<img height='200px' width="200px" src={bost.selectedFile}></img>) :
                    (<div></div>)

                  }
                </Grid>

              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <CardActions className={classes.cardActions}>

        <Button size="small" onClick={() => dispatch(likeBost(bost._id))}>      <Likes /> </Button>

        {(user?.result?.googleId === bost?.creator || user?.result?._id === bost?.creator) && (
          <>
            <Button size="small" onClick={() => dispatch(deleteBost(bost._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            <Button style={{ color: 'white' }}
              size="small"
              onClick={() => {
                setCurrentId(bost._id)

              }}>
              <MoreHorizIcon fontSize="default" />
            </Button>
          </>
        )}
      </CardActions>


    </Card>




  ) : (<Card className={classes.card} fullWidth align="center">
    <Grid container spacing={0} align="center">
      <Grid item sm={12} md={12} lg={12}>
        <div align="center" className={classes.bostmobile}>
          <div align="center" className={classes.profcontainermobile}>
            <div align="center" className={classes.profcontmobile}>
              <Avatar className={classes.avatar} src={bost.profPic}></Avatar>
              <Typography className={classes.name}> {bost.name}</Typography>
            </div>
            <Typography>{bost.createdAt}</Typography>

          </div>
          <Divider style={{ margin: '20px 0' }} />
          <div>
            <div fullWidth align="center" className={classes.contentcontmobile}>

              <Typography className={classes.title} variant="h4"> {bost.title}</Typography>


              <Grid xs={12} sm={12} item className={classes.message} align="left" >

                <Typography> {bost.message}</Typography>

              </Grid>
              {bost.selectedFile ? (<img height='200px' width="200px" src={bost.selectedFile}></img>) :
                (<div></div>)

              }



            </div>
          </div>
        </div>
      </Grid>
    </Grid>
    <CardActions className={classes.cardActions}>

      <Button size="small" onClick={() => dispatch(likeBost(bost._id))}>      <Likes /> </Button>

      {(user?.result?.googleId === bost?.creator || user?.result?._id === bost?.creator) && (
        <>
          <Button size="small" onClick={() => dispatch(deleteBost(bost._id))}><DeleteIcon fontSize="small" /> Delete</Button>
          <Button style={{ color: 'white' }}
            size="small"
            onClick={() => {
              setCurrentId(bost._id)

            }}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </>
      )}
    </CardActions>


  </Card>



  )
}

export default Bost
