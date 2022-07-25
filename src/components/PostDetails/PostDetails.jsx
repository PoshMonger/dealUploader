import React, { useEffect } from 'react';
import { Paper, p, CircularProgress, Divider, Card, Grid, CardMedia, Avatar } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import CommentSection from './CommentSection';
import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useLayoutEffect, useState } from "react";
import { deletePost } from '../../actions/posts';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import parcelnumicon from '../../images/icons/parcelnumicon.png';
import lotsizeicon from '../../images/icons/lotsizeicon.png';
import comparableicon from '../../images/icons/comparableicon.png';
import documenticon from '../../images/icons/documenticon.png';
import enviroprobsicon from '../../images/icons/enviroprobicon.png';
import zoningicon from '../../images/icons/zoningicon.png'
import annualexpensesicon from '../../images/icons/annualexpensesicon.png';
import doorsicon from '../../images/icons/doorsicon.png'
import virtualtouricon from '../../images/icons/virtualtouricon.png'
import Form from '../Form/Form'
import Form2 from '../Form2/Form2'
import Form3 from '../Form3/Form3'
import Countdown from 'react-countdown';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';
import { TwitterShareButton } from 'react-share';
import { TwitterIcon } from 'react-share';


const user = JSON.parse(localStorage.getItem('profile'));
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





const Post = () => {

  const [currentId, setCurrentId] = useState(0);
  const [editflipstatus, seteditflipstatus] = useState(false);
  const [editbuildstatus, seteditbuildstatus] = useState(false);
  const [editbuyandholdstatus, seteditbuyandholdstatus] = useState(false);

  const user = JSON.parse(localStorage.getItem('profile'));
  const Completionist = () => <text className={classes.block}>Buyer Assigned</text>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (

        <span>
          <div>
            <span >
              <text className={classes.typeflip} >Last Day to Assign:</text>
            </span>
          </div>


          <text className={classes.countdown}>{days}d: {hours}h: {minutes}m</text>
        </span>
      );
    }
  };


  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const [width] = useMediaQuery();
  const deletepost = () => {
    dispatch(deletePost(post._id))
    history.push('/')
  }



  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const [height] = useMediaQuery();

  useEffect(() => {

      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    
  }, [post]);



  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  if (editflipstatus) {
    return <Form className={classes.form} currentId={currentId} seteditflipstatus={seteditflipstatus} setCurrentId={setCurrentId}></Form>
  }
  if (editbuyandholdstatus) {
    return <Form2 className={classes.form} currentId={currentId} seteditbuyandholdstatus={seteditbuyandholdstatus} setCurrentId={setCurrentId}></Form2>
  }
  if (editbuildstatus) {
    return <Form3 className={classes.form} currentId={currentId} seteditbuildstatus={seteditbuildstatus} setCurrentId={setCurrentId}></Form3>
  }



  if (post.type === "build") {
    return width < 1000 ? (

      <Paper style={{ padding: '20px', borderRadius: '0px', marginTop: '15vh' }} elevation={6}>
        <Grid align="center" >
          <div className={classes.card}>
            <Grid item xs={12} sm={12}>
              <div>
                <div>
                  <text className={classes.name}>{post.address} </text>
                  <text className={classes.area}>{post.city}, {post.state} {post.zipcode}</text>

                </div>

                <text className={classes.block} gutterBottom variant="p" color="textSecondary" component="p">{post.tags.map((tag) => (
                  <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                    {` #${tag} `}
                  </Link>
                ))}

                </text>
                <div className={classes.profcontsmall}>
                  <Avatar component={Link} to={`/creators/${post.name}`} className={classes.avatar} src={post.profpic}></Avatar>

                  <text className={classes.block} variant="p">


                    <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                      {` ${post.name}`}
                    </Link>
                  </text>


                  <text className={classes.block} >{moment(post.createdAt).fromNow()}</text>
                </div>
              </div>

              <Divider style={{ margin: '20px 0' }} />
              <Grid item xs={12}>
                <Card className={classes.card3}>
                  <CardMedia className={classes.media3} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

                  <div className={classes.overlay3}>
                    <div className={classes.cont} align="center">
                      <text className={classes.type} variant="p">Build</text>

                      <Countdown date={post.expireDate} renderer={renderer}>
                        <Completionist />
                      </Countdown>
                    </div>
                  </div>


                  {(user?.result?._id === post?.creator) && (
                    <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1}


                      size="small"
                    >
                      <MoreHorizIcon fontSize="default" />
                    </Button>
                  )}
                  <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


                  >Share
                  </Button>

                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                  >
                    <MenuItem onClick={handleClose2}>

                      <FacebookShareButton
                        url={`thewholesaleengineers.com/posts/${post._id}`}
                      >
                        <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                      </FacebookShareButton>

                    </MenuItem>
                    <MenuItem onClick={handleClose2}>
                      <TwitterShareButton
                        url={`thewholesaleengineers.com/posts/${post._id}`}
                      >
                        <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                      </TwitterShareButton>

                    </MenuItem>


                  </Menu>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl1}
                    keepMounted
                    open={Boolean(anchorEl1)}
                    onClose={handleClose1}
                  >

                    <MenuItem onClick={handleClose1}>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentId(post._id);
                          seteditbuildstatus(true)
                        }}
                        style={{ color: 'Black' }}
                        size="small"
                      >
                        <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
                      </Button>

                    </MenuItem>
                    <MenuItem onClick={handleClose}>

                      <Button className={classes.delete} size="small" onClick={deletepost}>
                        <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
                      </Button>

                    </MenuItem>




                  </Menu>
                </Card>
              </Grid>
              <Grid item md={12} xs={12} sm={12}>

                <Grid item md={12} xs={12} sm={12}>

                  <div >
                    <div  >
                      <text className={classes.block} ><b>Asking Price:</b> ${post.listPrice.toLocaleString("en-US")}</text>

                    </div>
                    <text className={classes.block}><b>Asking Price:</b> ${parseInt(post.listPrice).toLocaleString("en-US")}</text>
                    <text className={classes.block} variant="h5" component="h3"> <b>Permitting Stage:</b> {post.permitstage} </text>
                    <text className={classes.block} variant="h5" component="h3"><b> Notes:</b> {post.message} </text>
                    <Button className={classes.button1small} href={"mailto:" + post.email + '?subject=' + post.address} >  Message Seller  </Button>
                    <Button href="http://www.onechoicelending.com/quick-loan-request" className={classes.button1small}>Apply For Financing</Button>


                  </div>




                  <Divider style={{ margin: '20px 0' }} />


                  <div className={classes.extracont}>

                    <Grid align="center" item xs={12} sm={12} md={12} lg={12}>
                      <div align="center" className={classes.extrarow}>
                        <Grid align="center" item xs={6} sm={6} md={4} lg={4}>
                          <img loading="lazy" className={classes.zoningicon} src={zoningicon}></img>
                          <text className={classes.block} variant="h6" component="h6">Zoning: {post.zoning}</text>
                        </Grid>
                        <Grid align="center" justify="center" item xs={6} sm={6} md={4} lg={4}>
                          <img loading="lazy" src={enviroprobsicon}></img>
                          <text className={classes.block} variant="h6" component="h6">Environmental Problems: {post.enviroprobs}</text>
                        </Grid>

                      </div>





                      <Divider style={{ margin: '20px 0' }} />





                      <div className={classes.extrarow}>

                        <Grid align="center" item xs={6} sm={6} md={4} lg={4}>

                          <img loading="lazy" className={classes.comparableicon} src={comparableicon}></img>

                          <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.comparableurl}>Comparable Link</a> </text>

                        </Grid>
                        <Grid align="center" item xs={6} sm={6} md={4} lg={4}>
                          <img loading="lazy" className={classes.comparableicon} src={virtualtouricon}></img>

                          <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.virtualtoururl}>Virtual Tour Link</a> </text>
                        </Grid>
                      </div>


                      <div className={classes.extrarow}>


                        <Grid item xs={4} sm={4} md={4} lg={4}>
                          <div className={classes.iconcont}>


                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </div>


                </Grid>

              </Grid>


            </Grid>


          </div>


          <Divider style={{ margin: '20px 0' }} />




          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile2 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>

            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile3 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile4 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>



          <Grid item md={12} xs={12} sm={12}>


            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile5 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile6 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile7 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>

          <CommentSection post={post} />

        </Grid>


      </Paper>


    ) : (


      <Paper style={{ padding: '20px', borderRadius: '0px', marginTop: '15vh' }} elevation={6}>
        <Grid>
          <div className={classes.card1build}>
            <Grid item xs={4}>
              <div className={classes.section1} align="center" justify="center">
                <Grid spacing={0} align="center" justify="center">
                  <div>
                    <text className={classes.name}>{post.address} </text>
                    <text className={classes.area}> {post.city}, {post.state} {post.zipcode}</text>

                  </div>

                </Grid>

                <Grid spacing={0} align="center" justify="center">
                  <text className={classes.block} gutterBottom variant="p" color="textSecondary" component="p">{post.tags.map((tag) => (
                    <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                      {` #${tag} `}
                    </Link>
                  ))}

                  </text>
                  <Avatar component={Link} to={`/creators/${post.name}`} className={classes.avatar} src={post.profpic}></Avatar>
                  <text className={classes.block} variant="p">
                    <div>

                      <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                        {` ${post.name}`}
                      </Link>
                    </div>
                  </text>
                  <text className={classes.block} variant="body1">{moment(post.createdAt).fromNow()}</text>

                </Grid>
                <Divider style={{ margin: '5px 0' }} />
                <div className={classes.infobuild}>
                  <div className={classes.infocont}>
                    <text className={classes.block}><b>Asking Price:</b> ${parseInt(post.listPrice).toLocaleString("en-US")}</text>
                    <text className={classes.block} variant="h5" component="h3"><b>Acres:</b> {post.acreage}</text>

                  </div>
                  <text className={classes.block} variant="h5" component="h3"> <b>Permitting Stage:</b> {post.permitstage} </text>
                  <text className={classes.block} variant="h5" component="h3"><b> Notes:</b> {post.message} </text>
                </div>
                <div className={classes.buttoncontbuild}>
                  <Grid item align="center" >
                    <Button className={classes.button1} href={"mailto:" + post.email + '?subject=' + post.address} >  Message Seller  </Button>
                    <Button className={classes.button1} href="http://www.onechoicelending.com/quick-loan-request">Apply For Financing</Button>

                  </Grid>
                </div>
              </div>


            </Grid>

            <Grid item xs={8}>

              <Card className={classes.card2build}>
                <CardMedia className={classes.media1} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
                <div className={classes.overlay}>
                  <div className={classes.cont} align="center">
                    <text className={classes.type} variant="h5">Build</text>

                    <Countdown date={post.expireDate} renderer={renderer}>
                      <Completionist />
                    </Countdown>
                  </div>
                </div>

                {(user?.result?._id === post?.creator) && (
                  <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1}


                    size="small"
                  >
                    <MoreHorizIcon fontSize="default" />
                  </Button>

                )}
                <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}

                >Share
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>

                    <FacebookShareButton
                      url={`thewholesaleengineers.com/posts/${post._id}`}
                    >
                      <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                    </FacebookShareButton>

                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <TwitterShareButton
                      url={`thewholesaleengineers.com/posts/${post._id}`}
                    >
                      <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                    </TwitterShareButton>

                  </MenuItem>


                </Menu>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl1}
                  keepMounted
                  open={Boolean(anchorEl1)}
                  onClose={handleClose1}
                >

                  <MenuItem onClick={handleClose1}>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentId(post._id);
                        seteditbuildstatus(true)
                      }}
                      style={{ color: 'Black' }}
                      size="small"
                    >
                      <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
                    </Button>

                  </MenuItem>
                  <MenuItem onClick={handleClose}>

                    <Button className={classes.delete} size="small" onClick={deletepost}>
                      <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
                    </Button>

                  </MenuItem>




                </Menu>
              </Card>


            </Grid>
          </div>
          <Divider style={{ margin: '20px 0' }} />

          <div className={classes.extracont}>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.extrarow}>

                <Grid align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={enviroprobsicon}></img>
                  <text className={classes.block} variant="h6" component="h5">Environmental Problems: {post.enviroprobs}</text>
                </Grid>
                <Grid align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={zoningicon}></img>
                  <text className={classes.block} variant="h6" component="h5">Zoning: {post.zoning}</text>
                </Grid>
              </div>

              <div className={classes.extrarow}>

                <Grid align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={comparableicon}></img>


                  <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.comparableurl}>Comparable URL</a> </text>

                </Grid>
                <Grid align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={virtualtouricon}></img>

                  <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.virtualtoururl}>Virtual Tour Link</a> </text>
                </Grid>
              </div>


            </Grid>
          </div>




          <Divider style={{ margin: '20px 0' }} />


          <Grid justify='center' align='center' item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile2 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile3 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile4 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>

          <Grid justify='center' align='center' item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile5 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile6 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile7 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>


          <CommentSection post={post} />
        </Grid>

      </Paper>)
  }
  if (post.type === "flip") {
    return width < 1000 ? (

      <Paper style={{ padding: '20px', borderRadius: '0px', alignContent: 'center', marginTop: '15vh' }} elevation={6}>
        <Grid align="center" >
          <div align="center" className={classes.card}>
            <Grid align="center" justify="center" item xs={12} sm={12}>



              <div>
                <text className={classes.name}>{post.address} </text>
                <text className={classes.area}> {post.city}, {post.state} {post.zipcode}</text>

              </div>



              <text className={classes.block} gutterBottom variant="p" color="textSecondary" component="p">{post.tags.map((tag) => (
                <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                  {` #${tag} `}
                </Link>
              ))}

              </text>
              <div className={classes.profcontsmall}>
                <Avatar component={Link} to={`/creators/${post.name}`} className={classes.avatar} src={post.profpic}></Avatar>

                <text className={classes.block} variant="p">

                  <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                    {` ${post.name}`}
                  </Link>
                </text>

                <text className={classes.block} >{moment(post.createdAt).fromNow()}</text>

              </div>



              <Divider style={{ margin: '10px 0' }} />
              <Grid item xs={12}>

                <Card className={classes.card3}>

                  <CardMedia className={classes.media3} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

                  <div className={classes.overlay3}>
                    <div className={classes.cont}>
                      <text className={classes.typeflip} variant="p">Flip</text>

                      <Countdown date={post.expireDate} renderer={renderer}>
                        <Completionist />
                      </Countdown>
                    </div>
                  </div>
                  {(user?.result?._id === post?.creator) && (
                    <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}


                      size="small"
                    >
                      <MoreHorizIcon fontSize="default" />
                    </Button>

                  )}
                  <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


                  >Share
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                  >
                    <MenuItem onClick={handleClose2}>

                      <FacebookShareButton
                        url={`thewholesaleengineers.com/posts/${post._id}`}

                      >
                        <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                      </FacebookShareButton>

                    </MenuItem>
                    <MenuItem onClick={handleClose2}>
                      <TwitterShareButton
                        url={`thewholesaleengineers.com/posts/${post._id}`}
                      >
                        <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                      </TwitterShareButton>

                    </MenuItem>


                  </Menu>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >

                    <MenuItem onClick={handleClose}>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentId(post._id);
                          seteditflipstatus(true)
                        }}
                        style={{ color: 'Black' }}
                        size="small"
                      >
                        <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
                      </Button>

                    </MenuItem>
                    <MenuItem onClick={handleClose}>

                      <Button className={classes.delete} size="small" onClick={deletepost}>
                        <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
                      </Button>

                    </MenuItem>




                  </Menu>

                </Card>





                <text className={classes.block}><b>Asking Price:</b> ${parseInt(post.listPrice).toLocaleString("en-US")}  </text>
                <text className={classes.block} variant="h5" component="h3"><b> Repair Costs:</b> ${parseInt(post.costofrepairs).toLocaleString("en-US")}</text>
                <text className={classes.block} ><b>ARV:</b> ${parseInt(post.arv).toLocaleString("en-US")}</text>

                <text className={classes.block}><b>Bed/Bath:</b> {post.bedBath}</text>
                <text className={classes.block}><b>Sqft: </b>{parseInt(post.squareFoot).toLocaleString("en-US")} </text>
                <text className={classes.block} ><b>Acres:</b> {post.acreage} </text>

                <Grid item align="center" >


                  <Button className={classes.button1small} href={"mailto:" + post.email + '?subject=' + post.address} >  Message Seller  </Button>
                  <Button href="http://www.onechoicelending.com/quick-loan-request" className={classes.button1small}>Apply For Financing</Button>



                </Grid>
                <Divider style={{ margin: '40px 0' }} />


                <div className={classes.extrarow}>

                  <Grid justify="center" align="center" item xs={6} sm={6} md={4} lg={4}>
                    <img loading="lazy" src={documenticon}></img>
                    <text className={classes.block} variant="h6" component="h6">Notes: {post.Notes}</text>
                  </Grid>
                  <Grid justify="center" align="center" item xs={6} sm={6} md={4} lg={4}>

                    <img loading="lazy" src={comparableicon}></img>

                    <text className={classes.block} variant="h6" component="h5"><a href={post.comparableurl}>Comparable URL</a> </text>

                  </Grid>

                </div>

                <Divider style={{ margin: '20px 0' }} />

                <div className={classes.extracont}>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className={classes.extrarow}>
                      <Grid align="center" item xs={6} sm={61} md={4} lg={4}>
                        <img src={virtualtouricon}></img>

                        <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.virtualtoururl}>Virtual Tour Link</a> </text>
                      </Grid>
                      <Grid justify="center" align="center" item xs={6} sm={6} md={4} lg={4}>
                        <img loading="lazy" src={zoningicon}></img>
                        <text className={classes.block} variant="h6" component="h6">Zoning: {post.zoning}</text>
                      </Grid>

                    </div>
                    <Divider style={{ margin: '20px 0' }} />
                    <div className={classes.extrarow}>

                      <Grid justify="center" align="center" item xs={6} sm={6} md={4} lg={4}>
                        <img loading="lazy" src={parcelnumicon}></img>
                        <text className={classes.block} variant="h6" component="h6">Parcel#: {post.parcelnum}</text>
                      </Grid>

                    </div>

                  </Grid>
                </div>


              </Grid>
            </Grid>

          </div>

          <Divider style={{ margin: '20px 0' }} />

          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile2 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>

            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile3 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile4 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>



          <Grid item md={12} xs={12} sm={12}>


            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile5 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile6 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile7 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>

          <CommentSection post={post} />
        </Grid>

      </Paper>


    ) : (


      <Paper style={{ padding: '20px', borderRadius: '0px', marginTop: '15vh' }} elevation={6}>
        <Grid>
          <div className={classes.card1flip}>
            <Grid display='flex' item xs={4}>
              <div className={classes.section1}>

                <Grid item>
                  <text className={classes.name}>{post.address} </text>
                  <text className={classes.area}> {post.city}, {post.state} {post.zipcode}</text>

                  <text className={classes.block} color="textSecondary">{post.tags.map((tag) => (
                    <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                      {` #${tag} `}
                    </Link>
                  ))}
                  </text>
                  <Avatar component={Link} to={`/creators/${post.name}`} className={classes.avatar} src={post.profpic}></Avatar>
                  <text variant="p">

                    <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                      {` ${post.name}`}
                    </Link>

                  </text>
                  <text className={classes.block} variant="body1">{moment(post.createdAt).fromNow()}</text>

                  <Divider style={{ margin: '20px 0' }} />



                  <div className={classes.infoflip}>


                    <text className={classes.block}><b>Asking Price:</b> ${parseInt(post.listPrice).toLocaleString("en-US")}  </text>
                    <text className={classes.block} variant="h5" component="h3"><b> Repair Costs:</b> ${parseInt(post.costofrepairs).toLocaleString("en-US")}</text>
                    <text className={classes.block} ><b>ARV:</b> ${parseInt(post.arv).toLocaleString("en-US")}</text>

                    <text className={classes.block}><b>Bed/Bath:</b> {post.bedBath}</text>
                    <text className={classes.block}><b>Sqft: </b>{parseInt(post.squareFoot).toLocaleString("en-US")} </text>
                    <text className={classes.block} ><b>Acres:</b> {post.acreage} </text>

                    <Grid item align="center" className={classes.buttoncont}>
                      <Button className={classes.button1} href={"mailto:" + post.email + '?subject=' + post.address} >  Message Seller  </Button>
                      <Button className={classes.button1} href="http://www.onechoicelending.com/quick-loan-request" >Apply For Financing</Button>
                    </Grid>
                  </div>
                </Grid>
              </div>

            </Grid>

            <Grid  alignItems='center' item xs={8}>
              <Card align='center' className={classes.card2flip}>

                <CardMedia className={classes.media1} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
                <div className={classes.overlay}>
                  <div className={classes.cont} align="center">
                    <text className={classes.typeflip}>Flip</text>
                    <div className={classes.countdown}>
                      <Countdown date={post.expireDate} renderer={renderer}>
                        <Completionist />
                      </Countdown>
                    </div>
                  </div>
                </div>

                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                  <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}


                    size="small"
                  >
                    <MoreHorizIcon fontSize="default" />
                  </Button>
                )}
                <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


                >Share
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>

                    <FacebookShareButton
                      url={`thewholesaleengineers.com/posts/${post._id}`}
                    >
                      <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                    </FacebookShareButton>

                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <TwitterShareButton
                      url={`thewholesaleengineers.com/posts/${post._id}`}
                    >
                      <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                    </TwitterShareButton>

                  </MenuItem>


                </Menu>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >

                  <MenuItem onClick={handleClose}>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentId(post._id);
                        seteditflipstatus(true)
                      }}
                      style={{ color: 'Black' }}
                      size="small"
                    >
                      <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
                    </Button>

                  </MenuItem>
                  <MenuItem onClick={handleClose}>

                    <Button className={classes.delete} size="small" onClick={deletepost}>
                      <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
                    </Button>

                  </MenuItem>




                </Menu>
              </Card>



            </Grid>
          </div>

          <Divider style={{ margin: '40px 0' }} />

          <div className={classes.extracont}>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.extrarow}>
                <Grid justify="center" align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={documenticon}></img>
                  <text className={classes.block} variant="h6" component="h6">Notes: {post.message}</text>
                </Grid>

                <Grid align="center" justify="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={parcelnumicon}></img>
                  <text className={classes.block} variant="h6" component="h5">Parcel#: {post.parcelnum}</text>
                </Grid>
                <Grid justify="center" align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={zoningicon}></img>
                  <text className={classes.block} variant="h6" component="h5">Zoning: {post.zoning}</text>
                </Grid>

              </div>

              <div className={classes.extrarow}>

                <Grid align="center" justify="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={comparableicon}></img>


                  <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.comparableurl}>Comparable URL</a> </text>

                </Grid>
                <Grid align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={virtualtouricon}></img>

                  <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.virtualtoururl}>Virtual Tour Link</a> </text>
                </Grid>

              </div>


            </Grid>
          </div>





          <Divider style={{ margin: '20px 0' }} />

          <Grid justify='center' align='center' item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile2 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile3 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile4 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>

          <Grid justify='center' align='center' item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile5 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile6 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile7 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>


          <CommentSection post={post} />
        </Grid>

      </Paper>)
  }


  if (post.type === "buyandhold") {
    return width < 1000 ? (

      <Paper style={{ padding: '20px', borderRadius: '0px', alignContent: 'center', marginTop: '15vh' }} elevation={6}>
        <Grid spacing={0} align="center" justify="center">
          <div align="center" className={classes.card}>
            <Grid align="center" justify="center" item xs={12} sm={12}>



              <div>
                <text className={classes.name} >{post.address} </text>
                <text className={classes.area} > {post.city}, {post.state} {post.zipcode}</text>

              </div>



              <text className={classes.block} gutterBottom variant="p" color="textSecondary" component="p">{post.tags.map((tag) => (
                <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                  {` #${tag} `}
                </Link>
              ))}

              </text>

              <div className={classes.profcontsmall}>
                <Avatar component={Link} to={`/creators/${post.name}`} className={classes.avatar} src={post.profpic}></Avatar>
                <text className={classes.block} variant="p">

                  <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                    {` ${post.name}`}
                  </Link>
                </text>

                <text className={classes.block} >{moment(post.createdAt).fromNow()}</text>

              </div>



              <Divider style={{ margin: '10px 0' }} />
              <Grid item xs={12}>

                <Card className={classes.card3}>
                  <CardMedia className={classes.media3} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

                  <div className={classes.overlay3}>
                    <div className={classes.cont} align="center">
                      <text className={classes.typebuyandhold} variant="p">Buy And Hold</text>

                      <Countdown date={post.expireDate} renderer={renderer}>
                        <Completionist />
                      </Countdown>
                    </div>
                  </div>

                  {(user?.result?._id === post?.creator) && (
                    <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1}


                      size="small"
                    >
                      <MoreHorizIcon fontSize="default" />
                    </Button>
                  )}
                  <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


                  >Share
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                  >
                    <MenuItem onClick={handleClose2}>

                      <FacebookShareButton
                        url={`thewholesaleengineers.com/posts/${post._id}`}
                      >
                        <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                      </FacebookShareButton>

                    </MenuItem>
                    <MenuItem onClick={handleClose2}>
                      <TwitterShareButton
                        url={`thewholesaleengineers.com/posts/${post._id}`}
                      >
                        <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                      </TwitterShareButton>

                    </MenuItem>


                  </Menu>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl1}
                    keepMounted
                    open={Boolean(anchorEl1)}
                    onClose={handleClose1}
                  >

                    <MenuItem onClick={handleClose1}>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentId(post._id);
                          seteditbuyandholdstatus(true)
                        }}
                        style={{ color: 'Black' }}
                        size="small"
                      >
                        <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
                      </Button>

                    </MenuItem>
                    <MenuItem onClick={handleClose1}>

                      <Button className={classes.delete} size="small" onClick={deletepost}>
                        <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
                      </Button>

                    </MenuItem>




                  </Menu>
                </Card>





                <text className={classes.block}><b>Asking Price:</b> ${parseInt(post.listPrice).toLocaleString("en-US")}  </text>
                <text className={classes.block} variant="h5" component="h6"><b>NOI:</b> ${parseInt(post.NOI).toLocaleString("en-US")}</text>
                <text className={classes.block} variant="h5"><b>Cap Rate:</b> {(Math.round((post.NOI / (post.listPrice + post.costofrepairs)) * 100)).toLocaleString("en-US")}%</text>


                <text className={classes.block} variant="h5" component="h3"> <b>Repair Costs:</b> ${parseInt(post.costofrepairs).toLocaleString("en-US")}</text>

                <text className={classes.block} variant="h5" component="h6"><b>Sqft:</b> {parseInt(post.squareFoot).toLocaleString("en-US")} </text>
                <text className={classes.block} variant="h5" component="h6"><b>Notes:</b> {post.message} </text>






                <Grid item align="center" >


                  <Button className={classes.button1small} href={"mailto:" + post.email + '?subject=' + post.address} >  Message Seller  </Button>
                  <Button href="http://www.onechoicelending.com/quick-loan-request" className={classes.button1small}>Apply For Financing</Button>



                </Grid>

                <Divider style={{ margin: '40px 0' }} />



                <div className={classes.extracont}>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <div className={classes.extrarow}>

                      <Grid justify="center" align="center" item xs={6} sm={6} md={4} lg={4}>
                        <img loading="lazy" src={parcelnumicon}></img>
                        <text className={classes.block} variant="h6" component="h6">Parcel#: {post.parcelnum}</text>
                      </Grid>
                      <Grid align="center" justify="center" item xs={6} sm={6} md={4} lg={4}>
                        <img loading="lazy" src={annualexpensesicon}></img>
                        <text className={classes.block} variant="h6" component="h6">Annual Expenses: ${post.annualexpenses.toLocaleString("en-US")}</text>
                      </Grid>

                    </div>
                    <Divider style={{ margin: '20px 0' }} />








                    <div className={classes.extrarow}>

                      <Grid justify="center" align="center" item xs={6} sm={6} md={4} lg={4}>
                        <img loading="lazy" src={zoningicon}></img>
                        <text className={classes.block} variant="h6" component="h6">Zoning: {post.zoning}</text>
                      </Grid>
                      <Grid justify="center" align="center" item xs={6} sm={6} md={4} lg={4}>

                        <img loading="lazy" src={comparableicon}></img>

                        <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.comparableurl}>Comparable URL</a> </text>

                      </Grid>


                    </div>
                    <Divider style={{ margin: '20px 0' }} />
                    <div className={classes.extrarow}>

                      <Grid justify="center" align="center" item xs={6} sm={6} md={4} lg={4}>
                        <img loading="lazy" src={virtualtouricon}></img>

                        <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.virtualtoururl}>Virtual Tour Link</a> </text>
                      </Grid>

                      <Grid align="center" justify="center" item xs={6} sm={6} md={6} lg={4}>



                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                          <img loading="lazy" src={documenticon}></img>
                        </Button>
                        <text className={classes.block} variant="h6" component="h5">ProForma/RentRoll Documents</text>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>
                            <img loading="lazy" className={classes.media1} src={post.selectedFileproforma} /></MenuItem>
                          <MenuItem onClick={handleClose}><img className={classes.media1} src={post.selectedFilerentroll} /></MenuItem>

                        </Menu>

                      </Grid>

                    </div>

                    <Divider style={{ margin: '20px 0' }} />

                    <div className={classes.extrarow}>
                      <Grid align="center" justify="center" item xs={4} sm={4} md={4} lg={4}>
                        <img loading="lazy" src={lotsizeicon}></img>
                        <text className={classes.block} variant="h6" component="h5">Acreage: {post.acreage}</text>
                      </Grid>

                      <Grid align="center" justify="center" item xs={6} sm={6} md={4} lg={4}>
                        <img loading="lazy" src={enviroprobsicon}></img>
                        <text className={classes.block} variant="h6" component="h6">Environmental Problems: {post.enviroprobs}</text>
                      </Grid>
                    </div>

                    <Divider style={{ margin: '20px 0' }} />
                    <div className={classes.extrarow}>
                      <Grid align="center" justify="center" item xs={6} sm={6} md={4} lg={4}>
                        <img loading="lazy" src={doorsicon}></img>
                        <text className={classes.block} variant="h6" component="h6">Doors: {post.doors}</text>
                      </Grid>
                    </div>

                  </Grid>

                </div>


              </Grid>
            </Grid>





          </div>








          <Divider style={{ margin: '20px 0' }} />

          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile2 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>

            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile3 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos} src={post.selectedFile4 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>




          <Grid item md={12} xs={12} sm={12}>


            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile5 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile6 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos} src={post.selectedFile7 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>

          <CommentSection post={post} />
        </Grid>


      </Paper>


    ) : (


      <Paper style={{ padding: '20px', borderRadius: '0px', marginTop: '15vh' }} elevation={6}>
        <Grid>
          <div className={classes.card1buyandhold}>
            <Grid item xs={4}>
              <div align="center" justify="center" className={classes.section1}>

                <div>
                  <Grid spacing={0} align="center" justify="center">
                    <div>
                      <text className={classes.name}>{post.address} </text>
                      <text className={classes.area}  >{post.city}, {post.state}, {post.zipcode}</text>

                    </div>

                  </Grid>

                  <Grid spacing={0} align="center" justify="center">
                    <text className={classes.block} gutterBottom variant="p" color="textSecondary" component="p">{post.tags.map((tag) => (
                      <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                        {` #${tag} `}
                      </Link>
                    ))}

                    </text>
                    <Avatar component={Link} to={`/creators/${post.name}`} className={classes.avatar} src={post.profpic}></Avatar>
                    <text className={classes.block} variant="p">
                      <div>

                        <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                          {` ${post.name}`}
                        </Link>
                      </div>
                    </text>
                    <text className={classes.block} variant="body1">{moment(post.createdAt).fromNow()}</text>

                  </Grid>

                  <Divider style={{ margin: '20px 0' }} />

                </div>




                <div className={classes.infobuyandhold}>


                  <text className={classes.block}><b>Asking Price:</b> ${parseInt(post.listPrice).toLocaleString("en-US")}  </text>
                  <text className={classes.block} variant="h5" component="h6"><b>NOI:</b> ${parseInt(post.NOI).toLocaleString("en-US")}</text>
                  <text className={classes.block} variant="h5"><b>Cap Rate:</b> {(Math.round((post.NOI / (post.listPrice + post.costofrepairs)) * 100)).toLocaleString("en-US")}%</text>


                  <text className={classes.block} variant="h5" component="h3"> <b>Repair Costs:</b> ${parseInt(post.costofrepairs).toLocaleString("en-US")}</text>

                  <text className={classes.block} variant="h5" component="h6"><b>Sqft:</b> {parseInt(post.squareFoot).toLocaleString("en-US")} </text>
                  <text className={classes.block} variant="h5" component="h6"><b>Notes:</b> {post.message} </text>



                </div>
                <Grid item align="center" className={classes.buttoncont} >


                  <Button className={classes.button1} href={"mailto:" + post.email + '?subject=' + post.address} >  Message Seller  </Button>
                  <Button className={classes.button1} href="http://www.onechoicelending.com/quick-loan-request">Apply For Financing</Button>
                </Grid>
              </div>


            </Grid>

            <Grid item xs={8}>
              <Card className={classes.card2buyandhold}>
                <CardMedia className={classes.media1} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
                <div className={classes.overlay}>
                  <div className={classes.cont} align="center">
                    <text className={classes.typebuyandhold} variant="h5">Buy And Hold</text>
                    <Countdown date={post.expireDate} renderer={renderer}>
                      <Completionist />
                    </Countdown>
                  </div>
                </div>

                {(user?.result?._id === post?.creator) && (
                  <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick1}


                    size="small"
                  >
                    <MoreHorizIcon fontSize="default" />
                  </Button>
                )}
                <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


                >Share
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={Boolean(anchorEl2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>

                    <FacebookShareButton
                      url={`thewholesaleengineers.com/posts/${post._id}`}
                    >
                      <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                    </FacebookShareButton>

                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <TwitterShareButton
                      url={`thewholesaleengineers.com/posts/${post._id}`}
                    >
                      <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                    </TwitterShareButton>

                  </MenuItem>


                </Menu>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl1}
                  keepMounted
                  open={Boolean(anchorEl1)}
                  onClose={handleClose1}
                >

                  <MenuItem onClick={handleClose1}>

                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentId(post._id);
                        seteditbuyandholdstatus(true)
                      }}
                      style={{ color: 'Black' }}
                      size="small"
                    >
                      <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
                    </Button>

                  </MenuItem>
                  <MenuItem onClick={handleClose}>

                    <Button className={classes.delete} size="small" onClick={deletepost}>
                      <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
                    </Button>

                  </MenuItem>




                </Menu>
              </Card>

            </Grid>
          </div>

          <Divider style={{ margin: '40px 0' }} />

          <div className={classes.extracont}>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className={classes.extrarow}>

                <Grid align="center" justify="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={parcelnumicon}></img>
                  <text className={classes.block} variant="h6" component="h5">Parcel#: {post.parcelnum}</text>
                </Grid>
                <Grid align="center" justify="center" item xs={6} sm={6} md={4} lg={4}>
                  <img loading="lazy" src={annualexpensesicon}></img>
                  <text className={classes.block} variant="h6" component="h6">Annual Expenses: ${post.annualexpenses}</text>
                </Grid>

                <Grid align="center" justify="center" item xs={4} sm={4} md={4} lg={4}>



                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <img loading="lazy" className={classes.documenticon} src={documenticon}></img>
                  </Button>
                  <text className={classes.block} variant="h6" component="h5">ProForma/RentRoll Documents</text>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <img loading="lazy" className={classes.media1} src={post.selectedFileproforma} /></MenuItem>
                    <MenuItem onClick={handleClose}><img loading="lazy" className={classes.media1} src={post.selectedFilerentroll} /></MenuItem>

                  </Menu>

                </Grid>

              </div>

              <div className={classes.extrarow}>

                <Grid align="center" justify="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={comparableicon}></img>


                  <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.comparableurl}>Comparable URL</a> </text>

                </Grid>
                <Grid align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={virtualtouricon}></img>

                  <text className={classes.block} variant="h6" component="h5"><a target="_blank" href={post.virtualtoururl}>Virtual Tour Link</a> </text>
                </Grid>
                <Grid justify="center" align="center" item xs={4} sm={4} md={4} lg={4}>
                  <img loading="lazy" src={zoningicon}></img>
                  <text className={classes.block} variant="h6" component="h5">Zoning: {post.zoning}</text>
                </Grid>


              </div>
              <div className={classes.extrarow}>
                <Grid align="center" justify="center" item xs={6} sm={6} md={4} lg={4}>
                  <img loading="lazy" src={lotsizeicon}></img>
                  <text className={classes.block} variant="h6" component="h6">Acres: {post.acreage}</text>
                </Grid>
                <Grid align="center" justify="center" item xs={6} sm={6} md={4} lg={4}>
                  <img loading="lazy" src={doorsicon}></img>
                  <text className={classes.block} variant="h6" component="h6">Doors: {post.doors}</text>
                </Grid>
                <Grid align="center" justify="center" item xs={6} sm={6} md={4} lg={4}>
                  <img loading="lazy" src={enviroprobsicon}></img>
                  <text className={classes.block} variant="h6" component="h6">Environmental Problems: {post.enviroprobs}</text>
                </Grid>
              </div>

            </Grid>
          </div>





          <Divider style={{ margin: '20px 0' }} />

          <Grid justify='center' align='center' item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile2 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile3 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.interiorphotos1} src={post.selectedFile4 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>

          <Grid justify='center' align='center' item md={12} xs={12} sm={12}>
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile5 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile6 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            <img loading="lazy" className={classes.exteriorphotos1} src={post.selectedFile7 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
          </Grid>

          <CommentSection post={post} />
        </Grid>

      </Paper>
    )
  }

  else { return (<Card>hi</Card>) }

};

export default Post;
