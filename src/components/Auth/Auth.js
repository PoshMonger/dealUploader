import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField } from '@material-ui/core';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { signingoogle, signupgoogle } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import * as actionType from '../../constants/actionTypes';
import { collapseClasses } from '@mui/material';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', profPic: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


  const [showPassword, setShowPassword] = useState(false);
  const handleshowpassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));

    } else {
      dispatch(signin(form, history));
    }
  };

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };


  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    const googleForm = {
      email: result.email,
      firstName: result.givenName,
      lastName: result.familyName,
      profPic: result.imageUrl,
      password: result.googleId
    }

    console.log(result)
    if (isSignup) {
      dispatch(signup(googleForm, history));
    } else {
      dispatch(signin(googleForm, history));
    }

  };

  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');


if (!user?.result){
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <div className={classes.profupload}>
                  <Typography >Profile Picture:  </Typography>

                  <FileBase type="file" multiple={false} onDone={({ base64 }) => setForm({ ...form, profPic: base64 })} />

                </div>
                <TextField className={classes.textfield} name="firstName" variant="outlined" label="First Name" fullWidth value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                <TextField className={classes.textfield} name="lastName" variant="outlined" label="Last Name" fullWidth value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />

              </>
            )}
            <TextField className={classes.textfield} name="email" variant="outlined" label="Email Address" fullWidth value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <TextField className={classes.textfield} name="password" variant="outlined" label="Password" type={showPassword ? 'text' : 'password'} handleshowpassword={handleshowpassword} fullWidth value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />

            {isSignup && <TextField className={classes.textfield} variant="outlined" fullWidth name="confirmPassword" label="Repeat Password" type="password" onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
            }
          </Grid>

          <Button type="submit" fullWidth variant="contained" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId="88866052798-8bg5tf41ib07dmqudqn45pk53no8qa92.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                {isSignup ? ' Google Sign Up' : 'Google Sign In'}
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container space={0} justify="flex-end">
            <Grid item>
              <Button className={classes.signUp} onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar src={user.result.profPic} className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <text className={classes.caption}>Signed in as {user.result.name}.</text>

        <Button className={classes.button} onClick={logout}>Logout</Button>
       
      </Paper>
    </Container>
  );}


export default SignUp;
