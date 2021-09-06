import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import classNames from "classnames";
import styles from "./Home.module.css";

export const CitiesList = () => {
  return (
    <div className={classNames("w-1/4", styles.cities)}>
      <div
        className={classNames(
          "flex justify-between p-8",
          styles.cities__header
        )}
      >
        <p className={classNames("font-semibold uppercase")}>Cities</p>
        <FaPlusSquare size={25} className={classNames("cursor-pointer")} />
      </div>
      <div></div>
    </div>
  );
};
