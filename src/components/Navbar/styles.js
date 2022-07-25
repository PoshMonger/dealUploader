import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

  link:{
color:'white',
textDecoration:'none',
display:'inline-block',
position:'relative',
marginTop:'auto',
marginBottom:'auto',
fontSize:'13px',
fontFamily:"'Mukta', sans-serif"



  },
  linkIcon  :{
    color:'white',
    textDecoration:'none',
    display:'inline-block',
    position:'relative',
    marginTop:'auto',
    marginBottom:'auto',
    marginRight:'10px'
    
    
      },
  number: {
    display:'flex',
    marginRight:'20px',
    position:'relative',
  
   height:'100%'
   
 

  },
  email: {
    position:'relative',
 
    height:'100%',
marginRight:'10px',
display:'flex',


  },
  contactCont:{

height:'100%',
right:'2px',
position:'absolute',
  display:'flex',
  flexDirection:'row'




  },
  menuItem: {
    margin: 'auto',
    borderLeft: 'grey 2px solid',
    borderBottom: 'black solid 2px',
    width: '95%',
    fontFamily:'Mukta, sans-serif'
  },
  menuContainer: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
  ,
  menu: {
    color: 'black',
    right: '20px',
    top: '53px',
    position: 'absolute',
    display: 'flex',
    float: 'right',
    transform: 'scale(1.4)'
  },

  purple: {



    marginLeft: '5px',
    marginTop: 'auto',
    marginBottom: 'auto',


  },

  linkcont: {
width:'100%',
    display: 'flex',
    flexDirection: 'row',

  },


  appBarMobile: {
    boxShadow: 'none',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100px',
    minHeight: '100px',
    backgroundColor: 'rgba(239, 233, 233)',
   
    paddingLeft: '5px',
    paddingRight: '5px',
    boxShadow: 'grey 4px 4px 4px',
    

  },
  appBar: {
  
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '110px',
    minHeight: '100px',
    backgroundColor: 'rgba(239, 233, 233)',
    boxShadow: 'grey 4px 4px 4px',



    marginTop: '0px'


  },

  appBarCont: {


    display: 'flex',
    paddingLeft: '100px',
    paddingRight:'30px',
    margin: '0px',
    flexDirection: 'row',
    width: '100%',
    
    
  },

  appBarContMobile: {



    width: '100%'
  },

  preAppBar: {
    background: 'linear-gradient(45deg, rgb(71, 68, 71) 20%, black 80%)', 
    height: '30px',
    width: '100%',
    position: 'relative',
    margin: '0px',
 
 

   
  },
  preAppBarMobile: {
    background: 'linear-gradient(45deg, rgb(71, 68, 71) 20%, black 80%)', 
    height: '30px',
    width: '100%',
    position: 'absolute',
    margin: '0px',
    
  },
  imagetext: {

    width: '300px',
    height: '85px',
    position: 'relative',
    marginTop: '8px',
    marginBottom: 'auto',
    position:'relative',
  
    display: 'flex',



  },


  imageMobile: {

    width: '250px',
    height: '75px',
    top: '22px',
    position: 'relative',
    left: '2px',


  },
  profile: {
    borderRadius: 4,

    justifyContent: 'right',


    verticalAlign: 'center',
    flexDirection: 'row',
    display: 'flex',

    position: 'absolute',
    right: '30px',
    height: '90%',
    width: '60%',
    minWidth: '100px'


  },


  profileMobile: {
    borderRadius: 4,

    justifyContent: 'center',




    display: 'flex',

    flexDirection: 'column',

    height: '300px',
    width: '400px',
    minWidth: '100px'

  },
  avatar: {
    justifyContent: 'center', alignItems: 'center',
    verticalAlign: 'center',
  },

  button1: {

    height: '30px',
    

    fontSize: '17px',


    boxShadow: 'none',
   
    backgroundColor: 'none',
    borderRadius: '0px',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft:'20px'
   

  },


  purple1: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],


    marginLeft: '1vw',
    marginRight: '1vw',

  },

  linkcont: {

    display: 'flex',
    flexDirection: 'row',

  },



}));
