import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/signup' component = {Signup}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/profile' component = {Profile}/>
          <Route path = '/logout' component = {Logout}/>
        </Switch>
    </div>
  );
}

export default App;