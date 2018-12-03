import React, { Component } from "react";
import "../styles/Location.css";
import MapContainer from "../maps/MapContainer";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Location">
        <p>
          Our 10 square feet of Texas is located on the West End Road in the
          beautiful cliffs of Negril, Jamaica. Across the street and a little
          down from The Spa Retreat. Taxis know where we are located or you can
          call Connie at 876-846-7890 for directions.
        </p>
        <p>Mon - Sat 9am-11pm and Sun 4pm-11pm</p>
        <p>*Hours vary in off season</p>
        <MapContainer />
      </div>
    );
  }
}

export default Location;
