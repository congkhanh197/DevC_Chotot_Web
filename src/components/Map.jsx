import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

const API_KEY = "AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s";

const data_planning = require("../data/data.json");
const data_marker = require("../data/marker.json");

// const Marker = ({ text }) => (
//   <div
//     onClick={() => {
//       console.log("test");
//     }}
//     style={{
//       color: "white",
//       background: "grey",
//       padding: "15px 10px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",
//       transform: "translate(-50%, -50%)"
//     }}
//   >
//     {text}
//   </div>
// );

class Map extends Component {
  state = {
    area: null
  };
  static defaultProps = {
    center: {
      lat: 10.7810762,
      lng: 106.7006385,
    },
    zoom: 13.5
  };
  handleApiLoaded = (google, handleLoadAreaAd) => {
    const { map, maps } = google;
    const data = {
      type: "FeatureCollection",
      features: data_planning.reduce((acc, cur) => [...acc, ...cur.QHPK], [])
    };
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
          " m3 - Mã sổ: " +
          event.feature.getProperty("maso"),
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

    const image = {
      url: "http://hyveephoto.com/images/circle-transparent-png-8.png",
      scaledSize: new maps.Size(50, 50), // scaled size
      origin: new maps.Point(0, 0), // origin
      anchor: new maps.Point(0, 0)
    };
    data_marker.forEach(item => {
      const marker = new maps.Marker({
        position: new maps.LatLng(item.lat, item.lng),
        label: item.value,
        icon: image,
        map: map
      });
      marker.addListener("mouseover", function(event) {
        areaInfoWindow = new maps.InfoWindow({
          content: item.area_name + ": " + item.value + " bài đăng",
          position: event.latLng
        });
        areaInfoWindow.open(map);
      });
      marker.addListener("click", function(event) {
        handleLoadAreaAd(item.area);
      });
      marker.addListener("mouseout", function() {
        if (areaInfoWindow != null) {
          areaInfoWindow.close();
          areaInfoWindow = null;
        }
      });
    });
  };

  render() {
    return (
      <GoogleMapReact
        style={{ height: "94vh" }}
        bootstrapURLKeys={{ key: API_KEY, language: "vn" }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={google =>
          this.handleApiLoaded(google, this.props.setArea)
        }
      >
        {/* {data_marker.map(item => (
          <Marker lat={10.8014539} lng={106.6391456} text="My Marker" />
        ))} */}
      </GoogleMapReact>
    );
  }
}

export default Map;
