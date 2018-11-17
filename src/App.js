import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
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
                 const listmenu = document.getElementById('results');
                  listmenu.style.display = 'block';
                const welcome = document.getElementById('welcome');
                welcome.style.display = 'none';
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


            <div id="welcome">
              <h1 className="title-salutations">Welcome</h1>
                <div className="panel panel--rh panel--sm">
                  <p>Are you Bored? Wondering what to do? You are the right place</p>
                  <button name="FindMe"  className="btn btn-lg btn-primary btn--find" onClick={(e) => this.handleClick(e)}>Find Me!</button>
                  <p className="or-text">Or</p>
                  <div className="rh-form-group">
                    <input className="form-control" type="text" name="zipcode" placeholder="zipcode" onChange={this.handleChange} />
                    <input type="submit" value="Submit" className="rh-form-submit"/>
                  </div>
                </div>
              </div>



              <div className="listing-results" id="results">
                <ActivityListing position={this.state.position}/>
              </div>


            </div>
          </div>

          ) }
        />


      </Switch>


      </Router>
    );
  }
}

export default App;
