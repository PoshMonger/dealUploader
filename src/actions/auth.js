import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/Formpage');
  } catch (error) {
    console.log(error);
    alert("Invalid Username/Password")
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/Formpage');
  } catch (error) {
    console.log(error);
    alert("This Username Already Exists")
  }
};
