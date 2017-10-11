import React, { Component } from 'react';
import ProfilePreview from './Components/profilePreview.js';
import AnoProfile from './Components/anoProfile.js';
import ProProfile from './Components/proProfile.js';
import FacebookLogin  from './Components/facebookLogin.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>REFER</h1>
        <ProfilePreview />
        <ProProfile />
        <AnoProfile />
        <FacebookLogin />
      </div>
    )
  }
}

export default App;
