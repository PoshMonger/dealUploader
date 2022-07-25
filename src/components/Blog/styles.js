import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

 

  container:{
    margin:'100px',
        padding:'10px',
    align:'right',
    display:'flex',
        flexDirection:'row',
      },
  form:{

    marginBottom:'20px',
    backgroundColor: 'rgb(46, 44, 44)',

  
  },
  paginate:{
    color:'grey'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  card: {
    
      marginBottom:'18px'
  },
  paperMobile: {
   display:'flex',
flexDirection:'column',
    justifyContent:'center',
    borderRadius:'0px',
  marginTop:'20vh',
   marginBottom:'60px',

  },
  paper: {
    display:'flex',
    flexDirection:'column',
justifyContent:'center',
    borderRadius:'0px',
  marginTop:'15vh',
   marginBottom:'90px',
    position:'relative'
  },
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  appbar:{position:'relative',
backgroundColor:'white',
color:'black',

},
 
  formsmall: {

    backgroundColor: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',
  
  
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  card: {
    
      marginBottom:'18px'
  },
  heading:{
    fontSize:'30px',
    marginBottom:'3vh',}
  ,
  heading1:{
    fontSize:'30px',
    marginBottom:'3vh',}
  ,


  parasmall:{marginBottom:'5vh',
},
parabig:{marginBottom:'5vh',
fontSize:'20px'},
player:{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50%',
  height: '50%',
},
paginate:{marginTop:'10px'},
playercont:{
  position: 'relative',
  paddingTop: '56.25%',
}
  
}));
