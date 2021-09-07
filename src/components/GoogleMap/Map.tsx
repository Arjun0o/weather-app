import React from "react";
import GoogleMapReact from "google-map-react";

interface Props {
  lat: number;
  lng: number;
}

export const Map = ({ lat, lng }: Props) => {
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  return (
    <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals
      bootstrapURLKeys={{
        key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
      }}
      center={{
        lat: lat,
        lng: lng,
      }}
      defaultZoom={11}
    ></GoogleMapReact>
  );
};
