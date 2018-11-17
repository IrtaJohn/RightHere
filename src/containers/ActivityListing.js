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

      // console.log('Inside act');
      console.log(8,props);
      this.componentDidMount = this.componentDidMount.bind(this);
      //this.state = {value: '',position:''};
    }
    componentDidMount() {
           fetch("https://www.eventbriteapi.com/v3/events/search/?sort_by=distance&location.within=20mi&location.latitude=42.3620565&location.longitude=-71.0818178&token=FOK4SF7267TWBO44ONMD")
             .then(res => res.json())
             .then(
               (result) => {
                 console.log('inside loop')
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

             console.log(this.state.isLoaded);
         }

    getImageURL(item){
        var imageURL = item.logo?item.logo.url:"URL";
        return {
          backgroundImage: "url(" + imageURL + ")"
        }
    }

    render(){
      console.log(9,this.props.position);
      //console.log(this.state.position);
      var lat= this.props.position && this.props.position.coords && this.props.position.coords.latitude
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
