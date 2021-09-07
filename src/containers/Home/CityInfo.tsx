import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Button, Map } from "../../components";
import classNames from "classnames";
import { FaStar } from "react-icons/fa";
import { connect } from "react-redux";

interface Props {
  weather: any;
}

const CityInfo = ({ weather }: Props) => {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    setCoords(weather?.coords);
  }, [weather?.coords]);

  return (
    <div className={classNames("w-4/6", styles.cityInfo)}>
      <div
        className={classNames(
          "flex justify-between items-center p-8",
          styles.cityInfo__header
        )}
      >
        <h1 className={classNames("font-semibold text-lg uppercase")}>
          {weather.name ? weather?.name : "City"}
        </h1>
        <Button type="button">
          <FaStar size={25} className={classNames("icon")} />
        </Button>
      </div>
      <div className="flex justify-start items-center text_white pt-12 flex-col">
        <p className="text-xl uppercase font-bold  mb-6">
          humidity: {weather?.main?.humidity} %
        </p>
        <p className="text-xl uppercase font-bold  mb-6">
          Temperature:{" "}
          {Math.round(weather?.main?.temp ? weather?.main?.temp - 273.15 : 0)} C
        </p>
        <p className="text-xl uppercase font-bold  mb-6">
          Maximum temperature:{" "}
          {Math.round(
            weather?.main?.temp_max ? weather?.main?.temp_max - 273.15 : 0
          )}{" "}
          C
        </p>
        <p className="text-xl uppercase font-bold  mb-6 ">
          Minimum temperature:{" "}
          {Math.round(
            weather?.main?.temp_min ? weather?.main?.temp_min - 273.15 : 0
          )}{" "}
          C
        </p>
        <div style={{ height: "50vh", width: "100%" }}>
          <Map lat={coords?.lat} lng={coords?.lon} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = function (state: any) {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(CityInfo);
