import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
    searchButton: {

        color:'blue'
    }
  },
  container:{marginTop:'200px'},
  containerMobile:{marginTop:'100px'},
  formcont:{
 
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  marginRight:'10px'
  },
  formcont1:{
    display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  margin:'2px'
  },
  button1: {
  position:'center',
   marginTop:'4vh',
      width:'120px',
      height:'45px',
   borderRadius:'0px',
    display:'flex',
      fontSize:'10px',
      background: 'linear-gradient(45deg, rgb(71, 68, 71) 30%, black 80%)',
      color:'white',
      boxShadow:'grey 4px 4px 4px'
      
    },
    card:{margin:'30px',
  padding:'40px',
  width:'500px',
  display:'flex',
  flexDirection:'row',
  boxShadow:'5px 5px 5px grey',
  boxSizing:'content-box',
height:'300px'

  }
 ,
 card1:{marginTop:'30px',
 padding:'40px',



 },
  
  formimg:{


    
    margin:'auto',
    

  },
  formimgMobile:{

    height:'200px',
        width:'350px',
        marginTop:'auto',
        marginBottom:'auto'
      },

      mobileDesc:{

        display:'inline-block',
        marginBottom:'15px'
      }
 
}));
