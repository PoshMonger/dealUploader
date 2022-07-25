import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop:'300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom:'200px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
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
  card:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(228, 228, 228, 1)',
    borderRadius: '5px',
   
    position: 'relative',
    marginBottom:'20px',
    marginTop:'150px',
   
    width:'100',
    padding:'50px',
    justifyContent:'center'

  },
  name:{
fontSize:'500%',
    fontWeight:1000,
  },
  purple:{

    width:'25%',
  height:'25%',
  marginRight:'5%'
  },
  avatar:{

    height: theme.spacing(10),
    width: theme.spacing(10),
    marginRight:'2vw'
  }
}));
