import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
   
    background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',
     color:'white'
  },
  caption:{
    color:'rgb(224, 217, 217);;',
    textShadow:'black 3px 3px 3px',
    fontSize:'40px',
    textAlign:'center'
},
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button:{marginTop:'10px', backgroundColor:'rgb(224, 217, 217);;',
  boxShadow:'black 5px 5px 5px',
  fontSize:'20px'},
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'white',
    color: 'rgb(46, 44, 44)',
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

  profupload:{
marginTop:'2vh',
    display:"flex",
    flexDirection:'column'
  },
  textfield:{marginTop:'1vh',
color:'white',
backgroundColor:'white',
height:'55px',
lineHeight:'30px'},
signUp:{

  color:'white'
}
}));
