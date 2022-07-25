import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
margin:'0px',
  width:'100%',
  padding:'40px'
    
  },
  appBar1: {
    borderRadius: 0,
    marginTop: '75px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems:'center',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',
    width:'100%',
  
   padding:'5%',
    alignItems: 'center',
 
   
    height:'',
    position:'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    
   
    },
    
  },
  headingbig: {
textAlign:'center',
  fontSize:'12px',
  marginTop:'5vh',
  marginBottom:'2vh',
  
  },
  headingsmall: {
    marginBottom:'5vh',
      fontSize:'8px',
      marginLeft:'4vw',
      textAlign:'center',
      marginTop:'5vh'
     
      },
  image: {
    marginRight: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  button: {
    margin: '10px',
    width:'6vw',
    fontSize:'10px'
    
  },
 
  container:{
justifyContent:'center',
marginBottom:
  '5%'
},
  
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    
    
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0px',
width:'175px',
height:'150px',
    position: 'relative',
  },
  card1: {

  
 
    
    
  },
  card2: {


    
    
  },
  img1: {
   

   margin:'auto'

  
  },
 

 imgcontsmall:{
  textAlign: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  display:'flex',
  flexDirection:'row',
marginTop:'2vh',
marginBottom:'2vh'

 },
 imgcontbig:{
  textAlign: 'center',
  justifyContent: 'space-between',
  alignContent: 'center',
  display:'flex',
  width:'90%',
  flexDirection:'row',
marginBottom:'vh',
marginTop:'2vh',
marginLeft:'auto',
marginRight:'auto'

 },
copyrightcontsmall:{
  alignContent:'center',
 fontSize:'13px',
justifyContent:'center',
marginTop:'2vh',


},
copy:{color:'black',fontSize:'20px'},
copyrightcontbig:{
  marginTop:'2vh',
  marginBottom:'2vh',
  alignContent:'center',
  textAlign:'center',
  padding:'10px'

},
imgcard:{
  height:'12vh',
  width:'10vw',
  justifyContent:'center',
  padding:'5%',
  display:'flex',
  flexDirection:'row',
  borderRadius:'0px',
  boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
  borderBottom:'grey 1px solid',


}
   ,
   imgcardMobile:{
    borderRadius:'0px',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
  
  
  
  }
     ,
   footer:{justifyContent:'center'}
  
}));
