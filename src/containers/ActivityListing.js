import React, { Component } from "react"; 
import { Link } from 'react-router';
import '../assets/styles/activitylisting.css';
class ActivityListing extends Component {
    
    render(){ 
	    console.log('here')
	    return(
	        <section class="">
	        	<div class="container">
	        		<div class="row">
	        			<div class="col-xs-12 col-sm-4">
	        				<section class="listing-item text-center">
	        					<div class="listing-item__img"></div>
	        					<div class="listing-item__details">
	        						<h2 class="listing-item__title">Title</h2>
	        						<div class="listing-item__desc">Description</div>
	        					</div>
	        					<footer class="listing-item__footer">
	        						<a href="#" class="listing-item__action listing-item__action--dismiss">Pass</a>
	        						<a href="#URL" class="listing-item__action listing-item__action--love">Lets Do It!</a>
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