import React, { Component } from 'react';
import Listing from '../components/Listing.js';
import Slider from "react-slick";


class CarouselComp extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this.props.slideitems.map(item => (
           <Listing metadata={item} />
        ))}
      </Slider>
    );
  }
}

export default CarouselComp;