import React, { Component } from 'react';
import Listing from '../components/Listing.js';
import Slider from "react-slick";


class CarouselComp extends Component {

  constructor(props) {
      super(props);
      this.next = this.next.bind(this);
  }
  next() {
    this.slider.slickNext();
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
      <div className="slick-slider-wrapper">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.props.slideitems.map(item => (
             <Listing metadata={item} />
          ))}
        </Slider>
        <a className="custom-next-pass" onClick={this.next}>Next</a>
      </div>
    );
  }
}

export default CarouselComp;