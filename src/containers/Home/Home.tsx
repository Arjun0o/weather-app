import React from "react";
import classNames from "classnames";
import styles from "./Home.module.css";
import { CitiesList } from "./CitiesList";
import { CityInfo } from "./CityInfo";

export const Home = () => {
  return (
    <>
      <div
        className={classNames("w-full h-full flex justify-around", styles.home)}
      >
        <CitiesList />
        <CityInfo />
      </div>
    </>
  );
};
