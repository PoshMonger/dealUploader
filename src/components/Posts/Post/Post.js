import React, { useState } from 'react';
import { Card, CardActions, CardMedia, Button,ButtonBase, Avatar } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useLayoutEffect } from "react";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { getPost, likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';
import { TwitterShareButton } from 'react-share';
import { TwitterIcon } from 'react-share';

const Post = ({ post, setCurrentId, seteditflipstatus, seteditbuyandholdstatus, seteditbuildstatus }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();
  const [likes, setLikes] = useState(post?.likes);
  const userId = user?.result.googleId || user?.result?._id;

  const hasLikedPost = likes.find((like) => like === userId);;


  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };


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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openPost = () => {
    dispatch(getPost(post));
   

    history.push(`/posts/${post._id}`);
  };

  const [width] = useMediaQuery();

  const [height] = useMediaQuery();


  if (post.type === "flip") {
    return width > 700 ? (
      <Card className={classes.cardflip}>
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        >
          <CardMedia className={classes.media} image={post.selectedFile1 || '../../images/defaultImage.png'} title={post.title} />

          <div className={classes.overlay}>

            <div className={classes.usercont}>
              <Avatar className={classes.avatar} src={post.profpic}></Avatar>

              <div className={classes.usercontText}>
                <text className={classes.name} variant="h6">{post.name}</text>
                <text variant="body2">{moment(post.createdAt).fromNow() + ' |'} {post.city}, {post.state}</text>
                <text className={classes.titleflip} variant="body2">Flip</text>

              </div>


            </div>


          </div>




          <div className={classes.detailsflip}>

            <text className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</text>

            <text><b>Initial Investment:</b> ${(parseInt(post.listPrice) + parseInt(post.costofrepairs)).toLocaleString()} </text>
            <text ><b>Potential Profit:</b> ${(post.arv - (parseInt(post.listPrice) + parseInt(post.costofrepairs))).toLocaleString()} </text>




          </div>

        </ButtonBase>
        <CardActions className={classes.cardActions}>

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

              <Button className={classes.delete} size="small" onClick={() => dispatch(deletePost(post._id))}>
                <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
              </Button>

            </MenuItem>



          </Menu>
          <Button className={classes.likebutton} size="small" disabled={!user?.result} onClick={handleLike}>
            <Likes />
          </Button>

          <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


            size="small"
          >Share
          </Button>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Button className={classes.editbutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}

              style={{ color: 'black' }}
              size="small"
            >
              <MoreHorizIcon fontSize="default" />
            </Button>

          )}
        </CardActions>
      </Card>
    ) : (<Card className={classes.cardflip}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile1 || '../../images/defaultImage.png'} title={post.title} />

        <div className={classes.overlay}>

          <div className={classes.usercontsmall}>
            <Avatar className={classes.avatar} src={post.profpic}></Avatar>

            <div className={classes.divider}>
            <div className={classes.usercontText}>
                <text className={classes.name} variant="h6">{post.name}</text>
                <text variant="body2">{moment(post.createdAt).fromNow() + ' |'} {post.city}, {post.state}</text>
                <text className={classes.titleflip} variant="body2">Flip</text>

              </div>


            </div>


          </div>


        </div>

        <div className={classes.detailsflip}>

          <text className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</text>

          <text variant="h6"><b>Initial Investment:</b> ${(parseInt(post.listPrice) + parseInt(post.costofrepairs)).toLocaleString()} </text>
          <text variant="h6"><b>Potential Profit:</b> ${(parseInt(post.arv) - (parseInt(post.listPrice) + parseInt(post.costofrepairs))).toLocaleString()} </text>




        </div>

      </ButtonBase>
      <CardActions className={classes.cardActions}>
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

            <Button className={classes.delete} size="small" onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
            </Button>

          </MenuItem>




        </Menu>
        <Button className={classes.likebutton} size="small" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        <Button className={classes.sharebuttonsmall} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}



          size="small"
        >Share
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button className={classes.editbutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}

            style={{ color: 'black' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        )}

      </CardActions>
    </Card>)
  }
  if (post.type === "buyandhold") {
    return width > 700 ? (
      <Card className={classes.cardbuyandhold}>
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        >
          <CardMedia className={classes.media} image={post.selectedFile1 || '../../images/defaultImage.png'} title={post.title} />

          <div className={classes.overlay}>

            <div className={classes.usercont}>
              <Avatar className={classes.avatar} src={post.profpic}></Avatar>
              <div className={classes.divider}>
              <div className={classes.usercontText}>
                  <text className={classes.name} variant="h6">{post.name}</text>
                  <text variant="body2">{moment(post.createdAt).fromNow() + ' |'} {post.city}, {post.state}</text>
                  <text className={classes.titlebuyandhold} variant="body2">Buy and Hold</text>

                </div>


              </div>
            </div>

          </div>
          <div className={classes.details}>

            <text className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</text>

            <text variant="h6"><b>Initial Investments:</b> ${(parseInt(post.listPrice) + parseInt(post.costofrepairs)).toLocaleString()}</text>

            <text variant="h6"><b>Cap Rate:</b> {Math.round((parseInt(post.NOI) / (parseInt(post.listPrice) + parseInt(post.costofrepairs))) * 100).toLocaleString()}%</text>




          </div>

        </ButtonBase>
        <CardActions className={classes.cardActions}>
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
                  seteditbuyandholdstatus(true)
                }}
                style={{ color: 'Black' }}
                size="small"
              >
                <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
              </Button>

            </MenuItem>
            <MenuItem onClick={handleClose}>

              <Button className={classes.delete} size="small" onClick={() => dispatch(deletePost(post._id))}>
                <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
              </Button>

            </MenuItem>




          </Menu>
          <Button className={classes.likebutton} size="small" disabled={!user?.result} onClick={handleLike}>
            <Likes />
          </Button>
          <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


            size="small"
          >Share
          </Button>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Button className={classes.editbutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}

              style={{ color: 'black' }}
              size="small"
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          )}
        </CardActions>
      </Card>
    ) : (<Card className={classes.cardbuyandhold}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile1 || '../../images/defaultImage.png'} title={post.title} />

        <div className={classes.overlay}>

          <div className={classes.usercontsmall}>
            <Avatar className={classes.avatar} src={post.profpic}></Avatar>
            <div className={classes.divider}>
            <div className={classes.usercontText}>
                <text className={classes.name} variant="h6">{post.name}</text>
                <text variant="body2">{moment(post.createdAt).fromNow() + ' |'} {post.city}, {post.state}</text>
                <text className={classes.titlebuyandhold} variant="body2">Buy and Hold</text>

              </div>


            </div>
          </div>
        </div>
        <div className={classes.details}>

          <text className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</text>



          <text variant="h6"><b>Initial Investments:</b> ${(parseInt(post.listPrice) + parseInt(post.costofrepairs)).toLocaleString()}</text>

          <text variant="h6"><b>Cap Rate:</b> {Math.round((parseInt(post.NOI) / (parseInt(post.listPrice) + parseInt(post.costofrepairs))) * 100).toLocaleString()}%</text>


        </div>

      </ButtonBase>
      <CardActions className={classes.cardActions}>
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
          <MenuItem onClick={handleClose}>
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
                seteditbuyandholdstatus(true)
              }}
              style={{ color: 'Black' }}
              size="small"
            >
              <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
            </Button>

          </MenuItem>
          <MenuItem onClick={handleClose}>

            <Button className={classes.delete} size="small" onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
            </Button>


          </MenuItem>




        </Menu>
        <Button className={classes.likebutton} size="small" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        <Button className={classes.sharebuttonsmall} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


          size="small"
        >Share
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button className={classes.editbutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}

            style={{ color: 'black' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        )}

      </CardActions> 

    </Card>)
  }


  else return width > 700 ? (


    <Card className={classes.cardbuild}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile1 || '../../images/defaultImage.png'} title={post.title} />

        <div className={classes.overlay}>

          <div className={classes.usercont}>
            <Avatar className={classes.avatar} src={post.profpic}></Avatar>
            <div className={classes.divider}>
            <div className={classes.usercontText}>
                <text className={classes.name}  variant="h6">{post.name}</text>
                <text  variant="body2">{moment(post.createdAt).fromNow() + ' |'} {post.city}, {post.state}</text>
                <text  className={classes.titlebuild} variant="body2">Build</text>

              </div>

            </div>
          </div>

        </div>

        <div className={classes.details}>

          <text className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</text>

          <text variant="h6"><b>Asking Price:</b> ${(parseInt(post.listPrice)).toLocaleString()}</text>
          <text variant="h6"><b>Median Construction Sale Price:</b> ${(parseInt(post.mediansaleprice)).toLocaleString()}</text>




        </div>

      </ButtonBase>
      <CardActions className={classes.cardActions}>
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
          <MenuItem onClick={handleClose}>

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
                seteditbuildstatus(true)
              }}
              style={{ color: 'Black' }}
              size="small"
            >
              <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
            </Button>

          </MenuItem>
          <MenuItem onClick={handleClose}>

            <Button className={classes.delete} size="small" onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
            </Button>

          </MenuItem>




        </Menu>
        <Button className={classes.likebutton} size="small" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        <Button className={classes.sharebutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


          size="small"
        >Share
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button className={classes.editbutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}

            style={{ color: 'black' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        )}
      </CardActions>
    </Card>
    
    
    ) : (
    
    
    <Card className={classes.cardbuild}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile1 || '../../images/defaultImage.png'} title={post.title} />

        <div className={classes.overlay}>
          <div className={classes.usercontsmall}>
            <Avatar className={classes.avatar} src={post.profpic}></Avatar>
            <div className={classes.divider}>
            <div className={classes.usercontText}>
                <text className={classes.name}  variant="h6">{post.name}</text>
                <text variant="body2">{moment(post.createdAt).fromNow() + ' |'} {post.city}, {post.state}</text>
                <text className={classes.titlebuild} variant="body2">Build</text>

              </div>


            </div>
          </div>

        </div>

        <div className={classes.details}>

          <text className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</text>

       
          <text variant="h6"><b>Asking Price:</b> ${(parseInt(post.listPrice)).toLocaleString()}</text>
          <text variant="h6"><b>Median Construction Sale Price:</b> ${(parseInt(post.mediansaleprice)).toLocaleString()}</text>




        </div>

      </ButtonBase>
      <CardActions className={classes.cardActions}>
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
                seteditbuildstatus(true)
              }}
              style={{ color: 'Black' }}
              size="small"
            >
              <MoreHorizIcon className={classes.editicon} fontSize="default" />Edit
            </Button>

          </MenuItem>
          <MenuItem onClick={handleClose}>

            <Button className={classes.delete} size="small" onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon className={classes.delete} fontSize="small" /> &nbsp; Delete
            </Button>

          </MenuItem>




        </Menu>
        <Button className={classes.likebutton} size="small" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        <Button className={classes.sharebuttonsmall} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick2}


          size="small"
        >Share
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button className={classes.editbutton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}

            style={{ color: 'black' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        )}
      </CardActions>

    </Card>);
};

export default Post;
