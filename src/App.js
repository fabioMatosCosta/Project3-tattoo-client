import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import UserLogin from './pages/UserLogin';
import Login from './pages/Login';
import ArtistLogin from './pages/ArtistLogin';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Tattoos from './pages/Tattoos';
import TattooArtists from './pages/Artists/TattooArtists';
import History from './pages/History';
import Museum from './pages/Museum';
import AddThing from './pages/Addthing';
import AnotherThing from './pages/AnotherThing';
import Heal from './pages/Heal';
import Remove from './pages/Remove';
import Pain from './pages/Pain';
import ArtistSignup from './pages/Signups/ArtistSignup';
import UserSignup from './pages/Signups/UserSignup';
import ProfileArt from './pages/Artists/ProfileArt'
import TattooDetails from './components/TattooDetails'
import ArtistDetails from './components/ArtistDetails'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/signup' component = {Signup}/>
          <Route path = '/user-login' component = {UserLogin}/>
          <Route path = '/artist-login' component = {ArtistLogin}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/profile' component = {Profile}/>
          <Route path = '/logout' component = {Logout}/>
          <Route path = '/tattoos' component = {Tattoos}/>
          <Route path = '/tattoo-artists' component = {TattooArtists}/>
          <Route path = '/museum' component = {Museum}/>
          <Route path = '/history' component = {History}/>
          <Route path = '/heal' component = {Heal}/>
          <Route path = '/remove' component = {Remove}/>
          <Route path = '/pain' component = {Pain}/>
          <Route path = '/artistlog' component = {ArtistSignup}/>
          <Route path = '/userlog' component = {UserSignup}/>
          <Route path = '/artistProfile' component = {ProfileArt}/>
          <Route path = '/tattoo-details/:id' component = {TattooDetails}/>
          <Route path = '/artist-details/:id' component = {ArtistDetails}/>
          <Route path = '/edit-profile' component = {AddThing}/>
          <Route path = '/edit-artist-profile' component = {AnotherThing}/>
          
        </Switch>
    </div>
  );
}

export default App;