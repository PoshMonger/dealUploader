import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  form:{ marginTop:'100px',justifyItems:'center',  backgroundColor: 'rgb(46, 44, 44)',color:'white'},
  media: {
    height: '2vh',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    display:'flex',
    justifyContent:'center'
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
  avatar:{marginRight:'10px',
height: theme.spacing(8),
width: theme.spacing(8),
textAlign:'center'},

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
    backgroundColor: 'rgba(228, 228, 228, 0.856)',
  
    
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    
   
  },

  delete:{
    color: 'rgb(192, 40, 20)',
  
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
    flexDirection:'row'
},
bostmobile:{

  display:'flex',
  flexDirection:'row',
  margin:'3vh'
},
profcont:{

    display:'flex',
    flexDirection:'row'


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
bost:{
    
    display:'flex',
    flexDirection:'column',
  
    padding:'10px'
},
bostpo:{
    
  display:'flex',
  flexDirection:'row',

  padding:'10px'
},
bostsmall:{
    
  display:'flex',
  flexDirection:'column',
  justifyContent:"center",
  padding:'10px'
},
bost1:{
  
    display:'flex',
    flexDirection:'row',
  
    padding:'10px'
},
textfield:{
    width:'100%',
    backgroundColor:'white',
    color:"rgb(46, 44, 44)"
},
buttonCont:{display:'flex', flexDirection:'column',},
button:{justifySelf:'center',position:'relative',margin:'10px',borderRadius:'0px',
},
imageupload:{display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'center'},
divider:{display:"flex",
flexDirection:"row"},
avatar:{marginRight:'10px',
height: theme.spacing(8),
width: theme.spacing(8),
textAlign:'center'},
avatar2:{marginRight:'10px',
textAlign:'center',
marginTop:'5px',
height: theme.spacing(8),
width: theme.spacing(10),}
}));
