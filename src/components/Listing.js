import React, { Component } from "react";
class Listing extends Component {

  constructor(props) {
      super(props);
  }

  getImageURL(item){
      var imageURL = item.logo?item.logo.url:"URL";
      return {
        backgroundImage: "url(" + imageURL + ")"
      }
  }

  render() {
    return(
      <section className="listing-item" key={this.props.metadata.id} id={this.props.metadata.id} >
        <div className="listing-item__img" style={this.getImageURL(this.props.metadata)} ></div>
        <div className="listing-item__details">
          <h2 className="listing-item__title">{this.props.metadata.name.text}</h2>
          <div className="listing-item__desc text-center">{this.props.metadata.description.text}</div>
        </div>
        <footer className="listing-item__footer">
          <a href="#" className="listing-item__action listing-item__action--dismiss">Pass</a>
          <a href={this.props.metadata.url} className="listing-item__action listing-item__action--love">Lets Do It!</a>
        </footer>
      </section>
    )
  }

}

export default Listing;