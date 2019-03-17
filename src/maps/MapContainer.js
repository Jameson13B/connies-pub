import React from "react";
import Map from "./Map";

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        doctors={this.props.doctors}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_MAPS_KEY
        }&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: this.props.height,
              width: this.props.width,
              maxWidth: "550px"
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
// 350 X 600
export default MapContainer;
