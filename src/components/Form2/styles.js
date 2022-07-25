
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {

    flexDirection:'column',
    
   width:'100%',
    position:'center'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
width:'80%',
margin:'auto'
  
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop:50,
    color:'black',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    
    borderRadius: '15px',
   
    position: 'relative',
    marginBottom:'20px',
    marginTop:'20px',
   
    width:'100',
    padding:'50px'

  },
  card2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent:'center',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    margin:'40px',
    padding:'10px'

  },
  privacypolicy:{

    margin:'20px'
  },
  privpolcard:{

    margin:'30px'
  },
  heading:{
    align: 'center',
    display:'block',
    background: 'linear-gradient(45deg, rgb(71, 68, 71) 20%, black 80%)', 
    color:'white',
    fontSize:'30px',

  },
  tagsdesc:{

    margin:'10px'
  },
 

button: {

  width:'200px',
  
  marginBottom: 10,
  marginTop:10,
  color:'black',
  
},


}));
