import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

const API_KEY = "AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 10.8014539,
      lng: 106.6391456
    },
    zoom: 18
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={10.8014539}
          lng={106.6391456}
          text="My Marker"
        />
      </GoogleMapReact>
    );
  }
}

export default Map;
