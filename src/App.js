import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import logo from './logo.svg';
import './App.css';
import ActivityListing from './containers/ActivityListing';
import LocationPage from './containers/LocationPage';
import GoogleMapReact from 'google-map-react';


class App extends Component {
  constructor(props) {
     super(props);
     this.state = {value: '', position:''};
     this.handleChange = this.handleChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
   }

    displayLocationInfo(position) {
     var options = {
          // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
          enableHighAccuracy: false,
          // timeout = how long does the device have, in milliseconds to return a result?
          timeout: 5000,
          // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
          maximumAge: 0
        };
   }
  handleClick() {
    var thisItem =this;
   if (navigator.geolocation) {
     // check if geolocation is supported/enabled on current browser
   navigator.geolocation.getCurrentPosition(
   function success(position) {
                 thisItem.setState({position:position}, function(state){
                 });
                 const listmenu = document.getElementById('results');
                  listmenu.style.display = 'block';
                 const welcome = document.getElementById('welcome');
                 welcome.style.display = 'none';
                   var google=window.google;
                   console.log(google);
   },
  function error(error_message) {
       console.error("Geo location Call is not successful");
  });
  }
  else {
      console.log('geolocation is not enabled on this browser');
  }
  }

 handleChange(event) {
   this.setState({value: event.target.value});


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
                  {this.state.position && <ActivityListing position={this.state.position}/>}
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
