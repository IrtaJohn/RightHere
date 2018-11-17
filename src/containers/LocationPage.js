import React, { Component } from "react"; 
import { Link } from 'react-router';
class LocationPage extends Component {
    
    render(){

        return(
	        <section class="text-center">
		        <div class="container">
		        	<div class="row">
		        		<div class="col-xs-12 col-sm-8 offset-sm-2">
				        	<h1>You are Boston</h1>
				        	<div class="panel panel--rh">
				        		<h2>The current Weather is ...</h2>
				        		<img src="#" />
				        		<p>rain and cloudy</p>
				        		<p></p>
				        		<button type="button" class="btn btn-primary">Show me ideas!</button>
				        	</div>
		        		</div>
		        	</div>
		        </div>
	        </section>
        )
    }
    
}

export default LocationPage;