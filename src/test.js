import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {value: ''};
     this.handleChange = this.handleChange.bind(this);
   }

    displayLocationInfo(position) {
     const lng = position.coords.longitude;
     const lat = position.coords.latitude;
     var options = {
          // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
          enableHighAccuracy: false,
          // timeout = how long does the device have, in milliseconds to return a result?
          timeout: 5000,
          // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
          maximumAge: 0
        };
     console.log(`longitude: ${ lng } | latitude: ${ lat }`);
   }
  handleClick() {
   console.log('this is:', this.state);
   if (navigator.geolocation) {
     // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
   function success(position) {
     console.log('latitude', position.coords.latitude,
                 'longitude', position.coords.longitude);
   },
  function error(error_message) {
  console.error('Your browser does not support navigation');

  });
}
else {
  console.log('geolocation is not enabled on this browser')
 }
}

 handleChange(event) {
   this.setState({value: event.target.value});
   console.log(event.target.value);
 }
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Are you Bored? Wondering what to do? You are at the right place
          </p>
          <button name="FindMe"  className="button" onClick={(e) => this.handleClick(e)}>
                  Find Me
          </button>
        <p> Or</p>
          <input type="text" name="zipcode" placeholder="zipcode" onChange={this.handleChange} />
          <input type="submit" value="Submit" />

      </div>
    );
  }
}

export default App;
