import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'30px',
    borderRadius:'0px',
    marginTop:'20vh',
   justifyContent:'center',
    position:'center'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  container:{
    margin:'100px',
        padding:'10px',
    align:'right',
    display:'flex',
        flexDirection:'row',
      },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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
  paper1: {
   marginTop:'20vh',
    alignItems: 'center',
padding:'20px',
    borderRadius:'0px',
  
   
    position:'center'
  },
 
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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
    fontSize:'40px',
    marginBottom:'3vh',}
  ,


  parasmall:{display:'inline-block',marginBottom:'5vh',
},
parabig:{
  display:'inline-block',
  marginBottom:'5vh',
fontSize:'20px'},
player:{
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50%',
  height: '50%',
},
playercont:{
  position: 'relative',
  paddingTop: '56.25%',
}
  
}));
