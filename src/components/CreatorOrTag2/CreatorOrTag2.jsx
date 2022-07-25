import React, { useState,useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {CircularProgress, Grid, Card, Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutEffect} from "react";
import Post from '../Posts/Post/Postforprof';
import { getPostsByCreator, getPostsBySearch } from '../../actions/posts';
import Auth from '../../components/Auth/Auth';
import useStyles from './styles';
import Form from '../Form/Form';
import Form2 from '../Form2/Form2';
import Form3 from '../Form3/Form3';


const CreatorOrTag = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { post, posts, isLoading } = useSelector((state) => state.posts);

  const classes = useStyles();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem('profile'));
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
  
  if(editflipstatus){
    return <Form className={classes.form} currentId={currentId} seteditflipstatus={seteditflipstatus} setCurrentId={setCurrentId}></Form>
    }
    if(editbuyandholdstatus){
      return <Form2 className={classes.form} currentId={currentId} seteditbuyandholdstatus={seteditbuyandholdstatus} setCurrentId={setCurrentId}></Form2>
      }
    if(editbuildstatus){
      return <Form3 className={classes.form} currentId={currentId} seteditbuildstatus={seteditbuildstatus} setCurrentId={setCurrentId}></Form3>
      }
  


  
  return width < 1000 ? (
   
    <div>
   <Auth/>
      
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
  ):( 
    <div>
      <Auth/>
      
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
