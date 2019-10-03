import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

const API_KEY = "AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s";

const data_new = require("../data/data.json");
var data = [
  /* ['Lat', 'Long', 'Name', 'Color'], */
  [10.7883208, 106.7036826, "Test 1", "#56df23"],
  [10.7847323, 106.706352, "Test 2", "#0023f6"],
  [10.787023, 106.7043057, "Test 3", "yellow"]
];

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 10.7850938,
      lng: 106.6979573
    },
    zoom: 16
  };
  handleApiLoaded = props => {
    const { map, maps } = props;
    const data = {
      type: "FeatureCollection",
      features: data_new.reduce((acc, cur) => [...acc, ...cur.QHPK], [])
    };

    console.log(map, maps);
    map.data.addGeoJson(data);
    map.data.setStyle(function(feature) {
      var color = feature.getProperty("rgbcolor");
      const fillColor =
        "#" +
        color.split(",").reduce((acc, cur) => {
          const convertInt = parseInt(cur);
          const convertHex = convertInt.toString(16).toUpperCase();
          let result = acc + convertHex;
          if (convertInt < 16) result = result + convertHex;
          return result;
        }, "");
      return {
        fillColor,
        strokeWeight: 0.1,
        fillOpacity: 1
      };
    });

    let areaInfoWindow = null;
    map.data.addListener("mouseover", function(event) {
      areaInfoWindow = new maps.InfoWindow({
        content:
          event.feature.getProperty("chucnang") +
          " - " +
          Math.round(event.feature.getProperty("dientich")) +
          " m3",
        position: event.latLng
      });
      areaInfoWindow.open(map);
    });
    map.data.addListener("mouseout", function() {
      if (areaInfoWindow != null) {
        areaInfoWindow.close();
        areaInfoWindow = null;
      }
    });
  };
  componentDidMount() {}

  render() {
    console.log(data_new.reduce((acc, cur) => [...acc, ...cur.QHPK], []));
    return (
      <GoogleMapReact
        style={{ height: "94vh" }}
        bootstrapURLKeys={{ key: API_KEY, language: "vn" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={props => this.handleApiLoaded(props)}
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
