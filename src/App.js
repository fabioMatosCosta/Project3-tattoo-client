import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Tattoos from './pages/Tattoos';
import TattooArtists from './pages/TattooArtists';
import History from './pages/History';
import Museum from './pages/Museum';
import UploadPic from './pages/UploadPic';

function App() {
  return (
    <div className="App">
      <UploadPic />
      <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/signup' component = {Signup}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/profile' component = {Profile}/>
          <Route path = '/logout' component = {Logout}/>
          <Route path = '/tattoos' component = {Tattoos}/>
          <Route path = '/tattoo-artists' component = {TattooArtists}/>
          <Route path = '/museum' component = {Museum}/>
          <Route path = '/museum' component = {Museum}/>
          <Route path = '/history' component = {History}/>
        </Switch>
    </div>
  );
}

export default App;