import React from "react";
import styles from "./Home.module.css";
import classNames from "classnames";
import { FaStar } from "react-icons/fa";

export const CityInfo = () => {
  return (
    <div className={classNames("w-4/6", styles.cityInfo)}>
      <div
        className={classNames(
          "flex justify-between p-8",
          styles.cityInfo__header
        )}
      >
        <p className={classNames("font-semibold uppercase")}>Pune</p>
        <FaStar size={25} className={classNames("cursor-pointer")} />
      </div>
      <div></div>
    </div>
  );
};
