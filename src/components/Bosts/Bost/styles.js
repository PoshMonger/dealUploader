import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  media: {
    height: '2vh',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  cardflip: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '60vh',
    position: 'relative',
  

  },
  cardbuild: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '60vh',
    position: 'relative',
   
  },
  cardbuyandhold: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '5px',
    height: '60vh',
    position: 'relative',
 
  },
  overlay: {
    position: 'absolute',
    top: '5px',
    left: '10px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  overlay3: {
    position: 'absolute',
    top: 'px',
  left:'325px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
marginRight:'10px',
marginLeft:'10px',
marginTop:'1vh',
fontSize:'25px',
padding: '0 16px',
height:'vh'

  },
  detailsflip: {
    marginRight:'10px',
    marginLeft:'10px',
    marginTop:'1vh',
    fontSize:'25px',
    padding: '0 16px',
    height:'vh',
    
    
      },
     
 
  cardActions: {
 
    display: 'flex',
   height:'4vh',
   backgroundColor: 'rgb(208, 209, 207)',
    
    
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    color:'black',
    align:'right'
  },

  delete:{
    color: 'black',
  
  },
  title:{
marginBottom:'30px'
  },
  message:{
marginBottom:'20px'

  },
 
  likebutton:{
    right:'10px',
    position: 'absolute',
   
    color: 'black',
  },
  like:{
    color: 'black',
  },
editicon:{marginRight:'5px'},
  tags:{
    marginBottom:'10px'
  },
  titleflip:{
color:'rgb(192, 40, 20)',

  },
  titlebuild:{
color:' rgb(231, 173, 126)'

  },
  titlebuyandhold:{

color:'gold'
  },
  usercont:{
    display:'flex',
    flexDirection:'row',
 
width:'200%',
    padding:'10px',
  }
,
usercontsmall:{
  display:'flex',
  flexDirection:'row',

  padding:'10px',
}
,
profpic:{
  borderRadius:'50px',
  height:'6vh',
  width:'6vh',
  marginRight:'4px'
},
bost:{

    display:'flex',
    flexDirection:'row',
    width:'100vw',
    align:'center',
    
    
},
bostmobile:{

  display:'flex',
  flexDirection:'column',

  align:'center',
  
},
card:{marginBottom:'10vh'},
contentcont:{

  flexDirection:'row',
  width:'1000px',
  align:'center',

},
contentcontmobile:{

  flexDirection:'row',
  justifyItems:'center',
  align:'center',
  textAlign:'center'

},
profcont:{

    display:'flex',
    flexDirection:'row',
justifyContent:'center',
    padding:'15px',
    align:"center",
  marginRight:'10px'

},
profcontmobile:{

  display:'flex',
  flexDirection:'row',
justifyContent:'center',
  padding:'15px',
  align:"center",
marginRight:'10px'

},
profcontainer:{

  display:'flex',
  flexDirection:'column',
 
  padding:'10px',
  align:"center"

},
profcontainermobile:{

  display:'flex',
  flexDirection:'column',
 
  padding:'10px',
  align:"left"

},
countdown:{
  backgroundColor:"black",
  

  display:'flex',
 
    color: 'white',
},

countdownsmall:{
  backgroundColor:"black",
  padding:'7px',
 height:'50%',
  color: 'white',
  bottom:"200px",
  right:'50px'

},
divider:{display:"flex",
flexDirection:"row"},
avatar:{
height: theme.spacing(8),
width: theme.spacing(8),},
name:{height: theme.spacing(8),
  width: theme.spacing(8),
marginTop:'10px',
marginLeft:'5px'}
}));
