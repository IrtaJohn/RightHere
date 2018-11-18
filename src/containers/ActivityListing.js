import React, { Component } from "react";
import { Link } from 'react-router';
import '../assets/styles/activitylisting.css';
class ActivityListing extends Component {
  constructor(props) {
      super(props);
      this.state = {
               error: null,
              isLoaded: false,
                          items: []
        };
    }
     componentDidMount() {
       var lat= this.props.position && this.props.position.coords && this.props.position.coords.latitude
       var lng= this.props.position && this.props.position.coords && this.props.position.coords.longitude
       const eventBriteURL ="https://www.eventbriteapi.com/v3/events/search/?sort_by=distance&location.within=20mi&location.latitude=";
       const locationURL="&location.longitude=";
       const tokenURL="&token=FOK4SF7267TWBO44ONMD";
       const URL = eventBriteURL+lat+locationURL+lng+tokenURL;
           fetch(URL)
             .then(res => res.json())
             .then(
               (result) => {
                 this.setState({
                   isLoaded: true,
                   items: result.events
                 });
               },
               // Note: it's important to handle errors here
               // instead of a catch() block so that we don't swallow
               // exceptions from actual bugs in components.
               (error) => {
                 this.setState({
                   isLoaded: true,
                   error
                 });
               }
             )
         }

    getImageURL(item){
        var imageURL = item.logo?item.logo.url:"URL";
        return {
          backgroundImage: "url(" + imageURL + ")"
        }
    }

    render(){
      var items = this.state.items;
	    return(
    		<div className="listing-slider">
             {items.map(item => (
               <section key={item.id} className="listing-item">
                <div className="listing-item__img" style={this.getImageURL(item)} ></div>
                <div className="listing-item__details">
                  <h2 className="listing-item__title">{item.name.text}</h2>
                  <div className="listing-item__desc text-center">{item.description.text}</div>
                </div>
                <footer className="listing-item__footer">
                  <a href="#" className="listing-item__action listing-item__action--dismiss">Pass</a>
                  <a href={item.url} className="listing-item__action listing-item__action--love">Lets Do It!</a>
                </footer>
               </section>
             ))}
    		</div>
        )
    }
}

export default ActivityListing;
