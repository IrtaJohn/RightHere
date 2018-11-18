import React, { Component } from "react";
import '../assets/styles/activitylisting.css';
import Listing from '../components/Listing.js';
import CarouselComp from '../components/CarouselComp.js';

class ActivityListing extends Component {
  constructor(props) {
      super(props);
      this.state = {
              error: null,
              isLoaded: false,
              items: [],
              address:[]
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
             //39.755695%2C-104.995986&outFormat=json&thumbMaps=false
             const mapQuestURL="https://www.mapquestapi.com/geocoding/v1/reverse?key=BPpNMuGeSSDGzC3iqnlFLM4ekE1vYYqV&location=";
           const ADDRURL = mapQuestURL+lat+','+lng+'&outFormat=json&thumbMaps=false';
             fetch(ADDRURL).then(
               res=> res.json()).then((result)=>{
               this.setState({address:result.results});
               console.log(13,result.results);
           })


         }

    render(){
      var items = this.state.items;
      var locationData=this.state.address;
      //console.log(99,locationData);
	    return(
          <CarouselComp slideitems={items} />
        )
    }
}

export default ActivityListing;
