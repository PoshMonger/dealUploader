import React from 'react'
import {  Grid,Paper,Typography,Divider } from '@material-ui/core';
import useStyles from './styles'

import { useLayoutEffect,useState} from "react";
import ReactPlayer from 'react-player/youtube'
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
const About = () => {

    const [width] = useMediaQuery();
   
    const classes = useStyles();

    return width < 1000 ?  (
      <>
        <Paper className={classes.paper1}>
          <Grid spacing={0} align="center" justify="center">
       <h3 className={classes.heading1}  variant='h2'> About Us</h3>  


       <div className={classes.para}div>
       <text className={classes.parasmall}>
       

We are a fast growing real estate investment company, specializing in bridging the gap between wholesalers and investors. Our team consists of a diverse group of realtors, wholesalers, marketers and web developers, some of whom are currently serving in the US Army Reserves. Using our creativity, hard work and discipline we leverage Florida’s fast growing real estate market to create jobs for locals, tackle properties not suitable for the MLS, and keep our investor’s spam folders clean! We look forward to working with you.

        

    

            </text>
            </div>  
            
      <ReactPlayer 
         height="150px"
         width="200px"
        url="https://www.youtube.com/watch?v=WG9YovF8E94"
      />
 
            </Grid>
            <Divider style={{ margin: '20px 0' }} />
         
        </Paper>
       
        </>
    ):(



<>
        <Paper className={classes.paper}>
              <Grid spacing={0} align="center" justify="center">
        <h1 className={classes.heading} variant='h2'> About Us</h1>  

 
        <div className={classes.para}div>
            <text className={classes.parabig}>
          
We are a fast growing real estate investment company, specializing in bridging the gap between wholesalers and investors. Our team consists of a diverse group of realtors, wholesalers, marketers and web developers, some of whom are currently serving in the US Army Reserves. Using our creativity, hard work and discipline we leverage Florida’s fast growing real estate market to create jobs for locals, tackle properties not suitable for the MLS, and keep our investor’s spam folders clean! We look forward to working with you.
 
            
            
             </text>
             </div>  
            
             <ReactPlayer
           
          
        url="https://www.youtube.com/watch?v=WG9YovF8E94"
      />
    
             </Grid>
             <Divider style={{ margin: '20px 0' }} />
            
         </Paper>
        
          </>
    )
}

export default About
