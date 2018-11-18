import React, { Component } from "react"; 
import '../assets/styles/location.css';
class LocationPage extends Component {
    
    render(){

        return(
	        <section className="text-center">
	        	<div className="vertical-wrapper">
	        		<div className="vertical-wrapper-inner">
				        <div className="container">
				        	<div className="row">
				        		<div className="col-xs-12 col-sm-8 offset-sm-2">
						        	<h1 className="page-title">You are <em>Boston</em></h1>
						        	<div className="panel panel--rh">
						        		<h2 className="page-subtitle">The current Weather is ...</h2>
						        		<img src="#" alt="alt text"/>
						        		<p>rain and cloudy</p>
						        		<p></p>
						        		<button type="button" className="btn btn-primary">Show me ideas!</button>
						        	</div>
				        		</div>
				        	</div>
				        </div>
				    </div>
				</div>
	        </section>
        )
    }
    
}

export default LocationPage;