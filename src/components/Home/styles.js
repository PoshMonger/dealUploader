import { makeStyles } from '@material-ui/core/styles';
import build from '../../images/build.jpg'
export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 0,
    marginBottom: '50px',
    display: 'flex',
    padding: '16px',
    marginTop:'180px',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',
    background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',


  
  },
  appBarSearchMobile: {
    borderRadius: 0,
    marginBottom: '50px',
    display: 'flex',
    padding: '16px',
    marginTop:'50px',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',
    background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',


  
  },
  pageNav:{width:'100%',justifyContent:'space-between',display:'flex',paddingLeft:'10%',paddingRight:'10%',paddingTop:'3%',marginTop:'30px'},
  pagination: {
    borderRadius: 0,
    marginTop: '1rem',
    padding: '16px',
    backgroundColor: 'rgba(228, 228, 228, 1)',
  },

  gridContainer: {
   width:'97%',
      flexDirection: 'row',
   marginLeft:'20px'
   
    
  },
  leftdiv:{


},
  rightdiv:{


 },
  welcomebanner:{
   display:'flex',
   flexDirection:'row',

  },

  searchButton: {

    background:'linear-gradient(45deg, grey 30%, black 50%)',
color:'white',

  
    "&:hover": {
      background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, white 50%)',
   color:'black'
    },

  
    borderRadius:'0px',
    boxShadow:'2px 2px 2px rgb(167, 130, 172)'
  },

  contact:{marginLeft:'200px'},
  searchButtonfilter: {
    
    backgroundColor: 'rgb(192, 40, 20)',
    color:'white',
    
  },
  taball:{   background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, rgb(32, 25, 33) 50%)',
  height:'90%'


 },

  tabflip:{marginBottom:'5px',
  borderRight:'grey 2px solid',
  borderLeft:'grey 2px solid',
  background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, rgb(32, 25, 33) 50%)',
}
,
tabbuyandhold:{marginBottom:'5px',
borderRight:'grey 2px solid',
background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, rgb(32, 25, 33) 50%)',

}
,

tabbuild:{marginBottom:'5px',
borderRight:'black 2px solid',
background: 'linear-gradient(75deg, rgb(71, 68, 71) 30%, rgb(32, 25, 33) 60%)',

}
,
tabs1: {
  color:'white',
marginBottom:'5px',
  borderBottom:'black 2px solid',
  "& .MuiTabs-indicator": {
    backgroundColor:'rgb(129, 80, 142)'
    
   
  }

},

  heading:{
    margin:'2px'
  },
  card:{
    margin:'px',
    flexDirection:'row',
    padding:'10px',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',

  },
  advert:{
    borderRadius: 0,
    marginBottom: '30px',
    
    
    marginTop:'20px',
    height:'25vw',
    textAlign:'center',
  
    

    
  },
  advertmobile:{
    borderRadius: 0,
    marginBottom: '30px',
    
    
    marginTop:'80px',
    height:'50vh',
    textAlign:'center',
  
    

    
  },
  advert1:{
    borderRadius: 0,
    marginBottom: '1rem',
    
    padding:'60px',
    marginTop:'20px',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',
    textAlign:'center',
 
    
  },
  schlitzlogo:{
 width:'100%',
 height:'100%',
 
border:'none'


  },
  adverttext:{
    marginTop:'5vh'
   
  },
  privpolcard:{
    backgroundColor: 'rgba(228, 228, 228, 1)',
    textAlign:'center',
    padding:'15px',
    boxShadow: 'rgba(95, 92, 92, 0.501) 1px 1px 1px 1px',
    borderBottom:'grey 1px solid',
    borderRadius:'0px'

    
  },
  profileinner: {

    display:'flex',
    flexDirection:'row',
    backgroundColor: 'rgba(228, 228, 228, 1)',
    
    width:'100%',
 
     
   },
   cardprofileinner:{marginBottom:'4%'},
   userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    marginTop:'5%',
    color:'black',
    marginLeft:'5%',
    marginRight:'1%',
    marginBottom:'3%'

  },
  purple: {
   margin:'auto',
height:'80px',
width:'80px'

  },
  mobileCarousel:{


    
  },
  filtercont:{
    display:'flex',
    flexDirection:'row',
    width:'20%',
    marginBottom:'3ch'
  },
  tabs:{
    display:'flex',
    flexDirection:'row',

marginLeft:'40px',
    marginBottom:'50px',
    height:'3vh',
    marginTop:'30px',

   
  },
 
  tabsMobile:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    marginBottom:'40px',
    height:'3vh',
    
    

   
  },
  filterappsmall:{
    borderRadius: 0,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor:'white',
    flexDirection:'column'
  },
  button:{
    marginRight:'10px', 
    marginBottom:'10px',
        

    color:'white',
    fontSize:'8px',
    height:'50px'
        
    
      },
      forward:{cursor:'pointer'},
      back:{cursor:'pointer'},
      postcont:{
        padding:'5px'
      },
      welcomebanner:{
        marginBottom:'300px'
      },
    padding: '16px',
    filterapp:{
      borderRadius: 0,
      marginBottom: '1rem',
      display: 'flex',
      padding: '16px',
      backgroundColor:'white',
      flexDirection:'row'
    },
    filtertitle:{color:'black'},
    avatarCont:{

boxShadow:'grey 5px 2px 4px',
top:'100px',
padding:'5px',
      marginLeft:'auto',
      marginRight:'auto',
      marginBottom:'30px',
     border:'grey 1px solid',
   display:'flex',
   flexDirection:'column',
   color:'white'
    },
    signIn:{
textDecoration:'none',
fontSize:'1.7rem',
color:'rgb(129, 80, 142)',
textShadow:'black 1px 1px 1px',
    }
   
}));
