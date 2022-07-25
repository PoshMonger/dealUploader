import React, { useState,useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CircularProgress, Grid, Card, Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect} from "react";
import Post from '../Posts/Post/Postforprof';
import { getPostsByCreator, getPostsBySearch } from '../../actions/posts';

import useStyles from './styles';


const CreatorOrTag = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { post, posts, isLoading } = useSelector((state) => state.posts);
;
  const classes = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [pic, setPic] = useState();

  const [currentId, setCurrentId] = useState(0);
  const [editflipstatus, seteditflipstatus] = useState(false);
  const [editbuildstatus, seteditbuildstatus] = useState(false);
  const [editbuyandholdstatus, seteditbuyandholdstatus] = useState(false);

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
  useEffect(() => {
    if (location.pathname.startsWith('/tags')) {
      dispatch(getPostsBySearch({ tags: name }));
    } else {
      dispatch(getPostsByCreator(name));


      
    }
  }, []);

  
  const [width] = useMediaQuery();

  const [height] = useMediaQuery();
   

  
  return width < 1000 ? (
   
    <div className={classes.post}>
         <Card className={classes.uploadBy}>Uploaded by: {post.name}</Card>
      {isLoading ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
          {posts?.map((post) => (
            <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
              <Post seteditflipstatus={seteditflipstatus} seteditbuyandholdstatus={seteditbuyandholdstatus} seteditbuildstatus={seteditbuildstatus} setCurrentId={setCurrentId} post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  ):(     <div className={classes.post}>
      
      <Card className={classes.uploadBy}>Uploaded by: {post.name}</Card>
    {isLoading ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post seteditflipstatus={seteditflipstatus} seteditbuyandholdstatus={seteditbuyandholdstatus} seteditbuildstatus={seteditbuildstatus} setCurrentId={setCurrentId} post={post} />
          </Grid>
        ))}
      </Grid>
    )}
  </div>);
};

export default CreatorOrTag;
