import React, { Component } from "react";
import { Link } from 'react-router';
import '../assets/styles/activitylisting.css';
class ActivityListing extends Component {
  constructor(props) {
      super(props);

      this.state = {
      		hideListing: true
      };
      
      // console.log('Inside act');
      console.log(8,props);
      //this.handleChange = this.handleChange.bind(this);
      //this.state = {value: '',position:''};
    }

    render(){
      console.log(9,this.props.position);
      //console.log(this.state.position);
      var lat= this.props.position && this.props.position.coords && this.props.position.coords.latitude
	    return(
		<section className="listing-item">
			<div className="listing-item__img"></div>
			<div className="listing-item__details">
				<h2 className="listing-item__title text-center">Title</h2>
				<div className="listing-item__desc text-center">{lat}</div>
			</div>
			<footer className="listing-item__footer">
				<a href="#" className="listing-item__action listing-item__action--dismiss">Pass</a>
				<a href="#URL" className="listing-item__action listing-item__action--love">Lets Do It!</a>
			</footer>
		</section>   			
        )
    }
}

export default ActivityListing;
