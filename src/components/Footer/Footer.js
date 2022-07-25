import React, { useState, useEffect } from 'react';
import { AppBar, Typography,Card,Grid} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


import ftmyers from '../../images/ftmyers.png';
import capecoral from '../../images/capecoral.png';
import naples from '../../images/naples.png';

import floridalogo from '../../images/floridalogo.png';
import manateecounty from '../../images/manateecounty.jpg';
import sarasota from '../../images/sarasota.png';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';


import { useLayoutEffect} from "react";

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

const Footer = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const [width] = useMediaQuery();
  const [height] = useMediaQuery();
  return width < 1000 ? (
    <div>
    <AppBar className={classes.appBar1} position="static" color="inherit" >
   



            
            <text className={classes.headingsmall}>

            EARNINGS AND INCOME DISCLAIMER:
We make every effort to ensure that we accurately represent these products and services and their potential for income. Earning and Income statements made by our company and its customers are estimates of what we think you can earn. There is no guarantee that you will make these levels of income and you accept the risk that the earnings and income statements differ by individual.

As with any business, your results may vary, and will be based on your capacity, business experience, expertise, and level of desire. There are no guarantees concerning the level of success you may experience. The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on his or her background, dedication, desire, and motivation.

There is no assurance that examples of past earnings can be duplicated in the future. We cannot guarantee your future results and/or success. There are some unknown risks in business and on the internet that we cannot foresee which can reduce results. We are not responsible for your actions.

The use of our information, products, and services should be based on your due diligence and you agree that our company is not liable for any success or failure of your business that is directly or indirectly related to the purchase and use of our information, products, and services

We do not verify the After Repaired Value or Estimated Cost of Repairs for any of the houses. Those numbers are provided by the sellers. So please do your due diligence. We enter the Equity/Spread estimate ourselves. It is calculated as follows: After Repaired Value - Asking Price - Cost of Repairs. You can use that figure to quickly find the deals that interest you. It is not meant to be an estimate or guarantee of your profits if you buy the property.</text>


    </AppBar>
    <Grid spacing={0} align="center" justify="center">

<div className={classes.imgcontsmall}>

   <Grid className={classes.container} container alignItems="stretch" spacing={1}>
       
          <Grid  item xs={4} sm={4} md={4} lg={2} xl={2}>
            <Card className={classes.imgcardMobile}>
<img loading="lazy" src={floridalogo} height='20px' width='50px'></img>
           
     

            </Card>
          </Grid>
          <Grid  item xs={4} sm={4} md={4} lg={2}>
          <Card className={classes.imgcardMobile}>
<img loading="lazy" src={ftmyers} height='20px' width='50px'></img>
           
     

            </Card>
          </Grid>
          <Grid  item xs={4} sm={4} md={4} lg={2}>
          <Card className={classes.imgcardMobile}>
<img loading="lazy" src={sarasota} height='20px' width='50px'></img>
           
     

            </Card>
          </Grid>
          <Grid  item xs={4} sm={4} md={4} lg={2}>
          <Card className={classes.imgcardMobile}>
<img loading="lazy" src={capecoral} height='20px' width='50px'></img>
           
     

            </Card>
          </Grid>
          <Grid  item xs={4} sm={4} md={4} lg={2}>
          <Card className={classes.imgcardMobile}>
<img loading="lazy" src={manateecounty} height='20px' width='50px'></img>
           
     

            </Card>
          </Grid>
          <Grid  item xs={4} sm={4} md={4} lg={2}>
          <Card className={classes.imgcardMobile}>
<img loading="lazy" src={naples} height='20px' width='50px'></img>
           
     

            </Card>
          </Grid>
          <Grid spacing={0} align="center" justify="center">
<div className={classes.copyrightcontsmall}>
    <text className={classes.copy} > © dealuploader.com</text>
    </div>
    </Grid>
      </Grid>
      
</div>
</Grid>
    </div>
  ) : (

 <div>

    <AppBar className={classes.appBar} position="static" color="inherit" >
   


       
   

     



       
   
        <text className={classes.headingbig}>

        EARNINGS AND INCOME DISCLAIMER:
We make every effort to ensure that we accurately represent these products and services and their potential for income. Earning and Income statements made by our company and its customers are estimates of what we think you can earn. There is no guarantee that you will make these levels of income and you accept the risk that the earnings and income statements differ by individual.

As with any business, your results may vary, and will be based on your capacity, business experience, expertise, and level of desire. There are no guarantees concerning the level of success you may experience. The testimonials and examples used are exceptional results, which do not apply to the average purchaser, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on his or her background, dedication, desire, and motivation.

There is no assurance that examples of past earnings can be duplicated in the future. We cannot guarantee your future results and/or success. There are some unknown risks in business and on the internet that we cannot foresee which can reduce results. We are not responsible for your actions.

The use of our information, products, and services should be based on your due diligence and you agree that our company is not liable for any success or failure of your business that is directly or indirectly related to the purchase and use of our information, products, and services

We do not verify the After Repaired Value or Estimated Cost of Repairs for any of the houses. Those numbers are provided by the sellers. So please do your due diligence. We enter the Equity/Spread estimate ourselves. It is calculated as follows: After Repaired Value - Asking Price - Cost of Repairs. You can use that figure to quickly find the deals that interest you. It is not meant to be an estimate or guarantee of your profits if you buy the property.</text>


    </AppBar>
   
  
<div className={classes.imgcontbig}>


<Card className={classes.card}>
<img loading="lazy"  className={classes.img1}  src={floridalogo} height='100px' width='100px'></img>
        
</Card>

<Card className={classes.card}>
<img loading="lazy"  className={classes.img1}  src={ftmyers} height='100px' width='100px'></img>
        
  
</Card>
     
<Card className={classes.card}> 
<img  loading="lazy"  className={classes.img1} src={manateecounty} height='100px' width='100px'></img>
        


     
</Card>
<Card className={classes.card}>
<img  loading="lazy"  className={classes.img1}  src={capecoral} height='100px' width='100px'></img>
        


        </Card>
        <Card className={classes.card}>
<img loading="lazy"  className={classes.img1}   src={sarasota}  height='100px' width='100px'></img>


</Card>   
<Card className={classes.card}>
<img loading="lazy" src={naples} className={classes.img1} height='100px' width='100px'></img>
        

        </Card>
 
  
  
   

   
   </div>
  

         
         <div  className={classes.copyrightcontbig}>
  
         <text className={classes.copy} > © dealuploader.com</text>
  </div>

    </div>
  );
}
 

export default Footer;
