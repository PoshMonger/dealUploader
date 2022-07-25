import React, { useState }  from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase,Avatar } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { getPost, likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId,seteditflipstatus,seteditbuyandholdstatus,seteditbuildstatus }) => {
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
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

 


  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openPost = (e) => {
     dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };
if(post.type==="flip"){
  return (
    <Card className={classes.cardflip} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

        <div className={classes.overlay}>
          <div className={classes.usercont}>
       
        <div>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow() + ' |'  } {post.city}, {post.state}</Typography>
          <Typography className={classes.titleflip} variant="body2">Flip</Typography>
        </div>
        
        </div>
       </div>
        <div className={classes.detailsflip}>
         
          <Typography className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
       
          <Typography  variant="h6"><b>Initial Investment:</b> ${(parseInt(post.listPrice)+parseInt(post.costofrepairs)).toLocaleString()} </Typography>
  <Typography  variant="h6"><b>Potential Profit:</b> ${(post.arv - (parseInt(post.listPrice) + parseInt(post.costofrepairs))).toLocaleString()} </Typography>




        </div>
       
      </ButtonBase>
      <CardActions className={classes.cardActions}>
    
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
<Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
          
            style={{ color: 'black' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button> 
  )}
   
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
      </CardActions>
    </Card>
  )}
  if(post.type==="buyandhold"){
    return (
      <Card className={classes.cardbuyandhold} raised elevation={6}>
        <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        >
          <CardMedia className={classes.media} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
  
          <div className={classes.overlay}>
          <div className={classes.usercont}>
      
        <div>
        <Typography variant="h6">{post.name}</Typography>
       
       <Typography variant="body2">{moment(post.createdAt).fromNow() + ' |'  } {post.city}, {post.state}</Typography>            <Typography className={classes.titlebuyandhold} variant="body2">Buy and Hold</Typography>
        <div>
        </div>
          </div>
          </div>
       </div>
          <div className={classes.details}>
           
            <Typography className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
         
           
            <Typography  variant="h6"><b>Initial Investments:</b> ${(parseInt(post.listPrice) + parseInt(post.costofrepairs)).toLocaleString()}</Typography>
     
            <Typography  variant="h6"><b>Cap Rate:</b> {Math.round((parseInt(post.NOI)/ (parseInt(post.listPrice) + parseInt(post.costofrepairs)))*100).toLocaleString()}%</Typography>



        
          </div>
         
        </ButtonBase>
        <CardActions className={classes.cardActions}>
         
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
<Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
          
            style={{ color: 'black' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button> 
  )}
   
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
<Button className={classes.likebutton} size="small"  disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        </CardActions>
      </Card>
    )}


  else return(
  
  
  <Card className={classes.cardbuild} raised elevation={6}>
    <ButtonBase
      component="span"
      name="test"
      className={classes.cardAction}
      onClick={openPost}
    >
      <CardMedia className={classes.media} image={post.selectedFile1 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />

      <div className={classes.overlay}>
      <div className={classes.usercont}>
   
        <div>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow() + ' |'  } {post.city}, {post.state}</Typography>        <Typography className={classes.titlebuild} variant="body2">Build</Typography>
       </div>
        </div>

      </div>
     
      <div className={classes.details}>
       
        <Typography className={classes.tags} variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
     
        <Typography  variant="h6"><b>Asking Price:</b> ${post.listPrice.toLocaleString("en-US")}</Typography>
        <Typography  variant="h6"><b>Median Construction Sale Price:</b> ${post.mediansaleprice}</Typography>



    
      </div>
     
    </ButtonBase>
    <CardActions className={classes.cardActions}>
     
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
<Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
          
            style={{ color: 'black' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button> 
  )} 
  <Menu
 id="simple-menu"
 anchorEl={anchorEl}
 keepMounted
 open={Boolean(anchorEl)}
 onClose={handleClose}
>


<MenuItem  onClick={handleClose}> 
 
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
<Button className={classes.likebutton} size="small"  disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
    </CardActions>
  </Card>);
};

export default Post;
