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


  handleClick() {
   console.log('this is:', this.state);
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
            <div class="container">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Are you Bored? Wondering what to do? You are the right place</h1>
              <button name="FindMe"  className="btn btn-primary" onClick={(e) => this.handleClick(e)}>
                      Find Me
              </button>
              <p>Or</p>
              <input type="text" name="zipcode" placeholder="zipcode" onChange={this.handleChange} />
              <input type="submit" value="Submit" />
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
