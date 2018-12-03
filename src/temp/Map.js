import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Marker from "./Marker";

const Map = withScriptjs(
  withGoogleMap(props => {
    const marker = (
      <Marker
        title="Connie's Country Western Pub"
        location={{ lat: 18.2766, lng: -78.362 }}
      />
    );

    return (
      <GoogleMap defaultZoom={17} center={{ lat: 18.2775, lng: -78.362215 }}>
        {marker}
      </GoogleMap>
    );
  })
);

export default Map;
