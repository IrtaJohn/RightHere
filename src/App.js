import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

import logo from './logo.svg';
import './App.css';
import ActivityListing from './containers/ActivityListing';
import LocationPage from './containers/LocationPage';


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
    var thisItem =this;
   console.log('this is:', this.state);
   if (navigator.geolocation) {
     // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
   function success(position) {
     console.log('latitude', position.coords.latitude,
                 'longitude', position.coords.longitude);
                 thisItem.setState({position:position});
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
      <Router>

      <Switch>
        <Route
        exact
        path="/"
        render={ () => (

          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="container">
              <div className="panel panel--rh">
                <h1>Are you Bored? Wondering what to do? You are the right place</h1>
                <button name="FindMe"  className="btn btn-primary" onClick={(e) => this.handleClick(e)}>
                        Find Me
                </button>
                <p>Or</p>
                <input type="text" name="zipcode" placeholder="zipcode" onChange={this.handleChange} />
                <input type="submit" value="Submit" />
                <ActivityListing position={this.state.position} />
              </div>
            </div>
          </div>

          ) }
        />

        <Route
          exact
          path="/ActivityListing" component={ActivityListing}
        />

        <Route
          exact
          path="/LocationPage" component={LocationPage}
        />

      </Switch>


      </Router>
    );
  }
}

export default App;
