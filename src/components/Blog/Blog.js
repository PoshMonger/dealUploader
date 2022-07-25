import React from 'react'
import { Grid, Paper,Divider } from '@material-ui/core';
import useStyles from './styles'
import Bosts from '../Bosts/Bosts.js'
import FormB from '../FormB/FormB.js'
import { useLayoutEffect,useState} from "react";


import Pagination2 from '../Pagination2';
import {  useLocation } from 'react-router-dom';


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
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Blog = () => {
const [currentId, setCurrentId] = useState(0);
const query = useQuery();
const page = query.get('page') || 1;
    
    const classes = useStyles();
    const [width] = useMediaQuery();

    const [height] = useMediaQuery();

    return width < 1000 ?  (
        <Paper className={classes.paperMobile}>
            <FormB  className={classes.form} setCurrentId={setCurrentId} currentId={currentId}></FormB>
          <Bosts  setCurrentId={setCurrentId}></Bosts>
         
      
          <Pagination2 className={classes.paginate} page={page}/>
         </Paper>
           

             
             
    ):(
     

      

    <Paper className={classes.paper}>
    <FormB  className={classes.formsmall} setCurrentId={setCurrentId} currentId={currentId}></FormB>
          <Bosts  setCurrentId={setCurrentId}></Bosts>
        
         
          <Pagination2 className={classes.paginate} page={page}/>
         </Paper>
          

             
        

      
    )
}

export default Blog
