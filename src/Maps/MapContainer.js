import React from "react";
import Map from "./Map";

export default class MapContainer extends React.Component {
  render() {
    return (
      <Map
        doctors={this.props.doctors}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAOp1zBEw52IlS_mzDU3EWxpVheGwAvHp8&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `350px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
