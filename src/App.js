import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Are you Bored? Wondering what to do? You are the right place
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
