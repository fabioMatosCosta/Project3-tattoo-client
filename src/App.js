import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/signup' component = {Signup}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/profile' component = {Profile}/>
        </Switch>
    </div>
  );
}

export default App;