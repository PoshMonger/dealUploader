import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {

   width:'100%',
   height:'100%',
marginBottom:'3vh'
  },
  interiorphotos: {
  
    width: '100%',
    maxWidth:'300px',
   margin:'10px',
    height:'30vh',
   

  },
  exteriorphotos: {
    margin:'10px',
    width: '100%',
    maxWidth:'300px',
    height:'30vh',
 
 
  },

  block:{display:'block'},

  name:{fontSize:'35px',
  display:'block'
},
blockLarge:{display:'block',},
  card: {
    display: 'flex',
    width: '100%',
    
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignContent:'center'
    },
  },
  section: {
    borderRadius: '0px',
    marginTop: 'auto',
    marginRight:'auto',
height:'100%',
      width:'100%',
  textAlign:'center',
  alignItems:'center',
  justifyContent:'center',
  
 

  },
  imageSection: {
    marginLeft: 'px',
    marginTop:'50px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '0px', height: '39vh',marginTop:'30vh'
  },

  intextphotocont:{

    margin:'20px'
  },
  
  description:{
  marginTop:'25px',
  fontSize:'10px'
   

  }
  ,
  intext:{
    margin:'20px',
    flexDirection:'row'
  }
  ,

  desctitle:{
    marginTop:'30px',
    marginBottom:'10px',
  
  },
    commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop:'40px'
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
  media3: {
 
    height:'50vw',
    width:'70vw',
   
    maxWidth: '100vw',
  
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
 
    
   
  },
  media1: {
    borderRadius: '0px',
   
    width: '100%',
height:'85%',
   

  },
  overlay: {
    position: 'absolute',
    top: '50px',
    left: '50px',
    color: 'black',
    display:'flex',

  },
  interiorphotos1: {
    borderRadius: '0px',
    
    width: '25%',
    maxHeight: '300px',
    flexDirection:'row',
    height:'250px',
    margin: '22px',

  },
  exteriorphotos1: {
    borderRadius: '0px',
    objectFit: 'cover',
    width: '25%',
    maxHeight: '300px',
margin: '22px',
    height:'250px',
 flexDirection:'row',
 maxWidth:'500px'
 
  },
  card1flip: {
    display: 'flex',
    width: '100%',
    height:'80vh'

  },
  card1build: {
    display: 'flex',
    height:'80vh',
 
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignContent:'center'
    },
  },
  card1buyandhold: {
    display: 'flex',
    width: '100%',
 height:'80vh'
 
  },
  sharebutton:{
    margin:'5px',
    background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',
    color:'white',
    boxShadow:'grey 4px 4px 4px',
    width:'70%,',
  justifySelf:'center'
  },
  section1: {
    borderRadius: '0px',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
marginTop:'50px',


    width:'100%',
position:'relative',
 flexDirection:'column'

  },
  imageSection1: {
    marginLeft: 'px',
    marginTop:'50px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts1: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper1: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '0px', height: '39vh',
  },

  intextphotocont1:{

    margin:'20px'
  },
  card2flip: {
    display: 'flex',
    flexDirection: 'column',
   
    borderRadius: '0px',
 color:'white',
    position: 'relative',
  marginTop:'auto',
  marginBottom:'auto',
   
  height:'90%',
    width:'100%'
  },
  card2build: {
    display: 'flex',
    flexDirection: 'column',
  
    borderRadius: '0px',
  width:'100%',
    position: 'relative',
    height:'90%',

    marginBottom:'4vh'
  },
  card2buyandhold: {
    display: 'flex',
    flexDirection: 'column',
  
    borderRadius: '0px',
height:'90%',
    position: 'relative',
 
   
    marginBottom:'4vh'
  },
  card3: {
    display: 'flex',
    flexDirection: 'column',

   

width:'70vw',
    position: 'relative',
    

    marginBottom:'4vh'
  },
  overlay3: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: 'black',
  },
  overlay4: {
    position: 'absolute',
    top: '50px',
    right: '100px',
    color: 'black',
  },
  overlay4small: {
    position: 'absolute',
    top: '20px',
    right: '40px',
    color: 'black',
  },
  description1:{
  marginTop:'25px',
    width: '90vw',
   

  }
  ,
  intext1:{
    margin:'20px',
    flexDirection:'row'
  }
  ,

  desctitle1:{
    marginTop:'30px',
    marginBottom:'10px'
  },
    commentsOuterContainer1: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer1: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },
div:{paddingRight:'10%'},
extracont:{display:'flex',
flexDirection:'column'},
extrarow:{
  display:'flex',
  flexDirection:'row',
  fontSize:'5px',
  marginBottom:'3%',
  justifyContent:'center',
  fontSize:'15px'
},
heading:{fontSize:'17px'},
formdata:{marginBottom:'2vh'},
iconcont:{alignItems:'center',
padding:''},
display:'flex',
flexDirection:'column',
parcelicon:{},

emailicon:{marginTop:'5%'},
zoningicon:{marginTop:'10%',
marginLeft:'8%'},
comparableicon:{marginTop:'11%'},
lotsizeicon:{marginTop:'10%'},
documenticon:{marginLeft:'15%'},
type:{color:' rgb(231, 173, 126)',

},
typebuyandhold:{color:'gold',

},
typeflip:{color:'black',


},
topcont:{display:'flex',
flexDirection:'row',
marginTop:'5vh'},

headercont:{display:'flex',
flexDirection:'row'},
mobiletitle:{display:'flex',
flexDirection:'row'},
buttoncont:{
  marginTop:'30px'

},


button1: {



     background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',
     color:'white',
     boxShadow:'grey 4px 4px 4px',
  margin:'1px',
 
  },
  button1small: {

   
 
 height:'10vh',
 width:'30vw',
     fontSize:'8px',
     background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',
     color:'white',
     boxShadow:'grey 4px 4px 4px',
  margin:'10px',
  marginTop:'30px'
  ,

  },
infoflip:{
  marginBottom:'4vh',

},
infobuild:{


  justifyContent:'center'
},
infobuyandhold:{
 

},
details: {
  marginRight:'10px',
  marginLeft:'10px',
  marginTop:'1vh',
  fontSize:'25px',
  padding: '5px',
  height:'vh'
  
    },
    financebutton:{  background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',
    color:'white',
    boxShadow:'grey 4px 4px 4px'},
    buttoncontbuild:{marginTop:'8vh'},
    buttoncontbuildsmall:{margin:'vh',
  display:'flex',
flexDirection:'row'},
infocont:{marginBottom:'2vh',
justifyContent:'center'},
area:{fontSize:'25px',
display:'block'},
profpic:{height:'6vh',
width:'6vw',
height:'10vh',
borderRadius:'25px'},
profpicsmall:{height:'10vh',
width:'20vw',
borderRadius:'25px'},
profcontsmall:{display:'flex',
flexDirection:'column',
alignItems:"center"},
avatar:{
margin:'auto',
  height: theme.spacing(10),
  width: theme.spacing(10),
},

delete:{
  color: 'rgb(192, 40, 20)',

},
editicon:{marginRight:'5px'},
countdown:{
  color:'white',

  
  alignItems:'center'
},
cont:{backgroundColor:'rgb(192, 40, 20, .8)',

borderRadius:'0px'
}
}));
