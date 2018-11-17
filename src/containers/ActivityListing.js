import React, { Component } from "react"; 
import { Link } from 'react-router';
import '../assets/styles/activitylisting.css';
class ActivityListing extends Component {
    
    render(){ 
	    return(
	        <section className="">
	        	<div className="container">
	        		<div className="row">
	        			<div className="col-xs-12 col-sm-4">
	        				<section className="listing-item">
	        					<div className="listing-item__img"></div>
	        					<div className="listing-item__details">
	        						<h2 className="listing-item__title text-center">Title</h2>
	        						<div className="listing-item__desc text-center">Description</div>
	        					</div>
	        					<footer className="listing-item__footer">
	        						<a href="#" className="listing-item__action listing-item__action--dismiss">Pass</a>
	        						<a href="#URL" className="listing-item__action listing-item__action--love">Lets Do It!</a>
	        					</footer>
	        				</section>
	        			</div>
	        		</div>
	        	</div>
	        </section>
        )
    }
}

export default ActivityListing;