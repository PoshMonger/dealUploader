import React from 'react'
import Bost from './Bost/Bost';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles'

const Bosts = ( {setCurrentId}) => {
    
  const { bosts, isLoadingB } = useSelector((state) => state.bosts);
   
    const classes = useStyles();
  
    if (!bosts.length && !isLoadingB) return 'No posts';
  
    return (
      isLoadingB ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {bosts?.map((bost) => (
            <Grid key={bost._id} item xs={12} sm={12} md={12} lg={12}>
              <Bost 
              
              bost={bost} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
    );
}

export default Bosts
