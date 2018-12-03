import React from "react";
import { Marker } from "react-google-maps";
import Icon from "../assets/iconMarker1.png";

export default class DoctorMarker extends React.Component {
  render() {
    return <Marker position={this.props.location} icon={Icon} />;
  }
}
