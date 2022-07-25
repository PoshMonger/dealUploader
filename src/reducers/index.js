import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import contact from './contact';
import bosts from './bosts'

export const reducers = combineReducers({ posts, auth,contact,bosts });
