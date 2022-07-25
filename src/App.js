import React, {Suspense,lazy} from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from '../src/components/PostDetails/PostDetails'

import './index.css'
const Footer = lazy(()=>import('./components/Footer/Footer'))
const CreatorOrTag = lazy(()=>import('./components/CreatorOrTag/CreatorOrTag'))
const CreatorOrTag2 = lazy(()=>import('./components/CreatorOrTag2/CreatorOrTag2'))
const Blog= lazy(()=>import('./components/Blog/Blog'))

const Formpage = lazy(()=>import('./components/Formpage/Formpage'))
const About = lazy(()=>import('./components/About/About'))

const App = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
  
        <Navbar></Navbar>

        <Switch>

        <Route path="/posts/search" exact component={Home} />
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/Formpage" exact component={Formpage} />
          <Route path="/About" exact component={About} />
          <Route path="/Blog" exact component={() => <Redirect to="/bosts" />} />
          <Route path="/bosts" exact component={Blog} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path={['/creators2/:name', '/tags/:name']} component={CreatorOrTag2} />
        
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={Auth} />
       
        </Switch>
    
 
        <Footer/>
      
    </BrowserRouter>
    </Suspense>
  );
};

export default App;
