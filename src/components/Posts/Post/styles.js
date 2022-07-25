import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({

  usercontText:{

display:'flex',
flexDirection:'column'
  },
  media: {
  
   width:'100%',
   height:'250px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    
  },
  fullHeightCard: {
    height: '100%',
  },
  cardflip: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0px',
    height: '500px',
    position: 'relative',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',

height:'500px',
width:'100%',
 


  },
  name:{fontSize:'23px',
fontStyle:'bold'},
  cardbuild: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0px',
    height: '500px',
    position: 'relative',
    borderRadius:'0',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',

    
    
  },
  cardbuyandhold: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0px',
    height: '500px',
    position: 'relative',
    borderRadius:'0',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',
 
    
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
marginTop:'3vh',
fontSize:'20px',
padding: '0 16px',
position:'relative',
display:'flex',
flexDirection:'column',
height:'100px',

  },
  detailsflip: {
    marginRight:'10px',
    marginLeft:'10px',
    marginTop:'3vh',
    fontSize:'20px',
    padding: '0 16px',
    height:'100px',
    position:'relative',
    display:'flex',
    flexDirection:'column'
    
      },
      editbutton:{
              position:'absolute',
              right:'10px'

      },
     
 
  cardActions: {
 
    display: 'flex',
  
   display: 'block',
   backgroundColor: 'rgb(208, 209, 207)',
  alignItems:'center'
    
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  minHeight:'50px'
   
  },

  delete:{
    color: 'rgb(192, 40, 20)',
  
  },
  likebutton:{
  
  },
  sharebutton:{
    color: 'rgb(192, 40, 20)',
    
  },
  sharebuttonsmall:{
    
    color: 'rgb(192, 40, 20)',
  },
  like:{
    color: 'black',
  },
editicon:{marginRight:'5px'},
  tags:{
    marginBottom:'10px',
    color:'grey'
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
 
    height:'100px',
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
avatar:{marginRight:'10px',
height: theme.spacing(8),
width: theme.spacing(8),}
}));
