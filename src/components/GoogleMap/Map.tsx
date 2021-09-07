import React from "react";
import GoogleMapReact from "google-map-react";

interface Props {
  lat: number;
  lng: number;
}

export const Map = ({ lat, lng }: Props) => {
  return (
    <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals
      bootstrapURLKeys={{
        key: "AIzaSyDc9HfMHJ6Bj_sWRa18kKj4LwpPzd2-jwU",
      }}
      center={{
        lat: lat,
        lng: lng,
      }}
      defaultZoom={11}
    ></GoogleMapReact>
  );
};
