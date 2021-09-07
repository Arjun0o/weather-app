import React from "react";
import classNames from "classnames";
import styles from "./Home.module.css";
import CitiesList from "./CitiesList";
import CityInfo from "./CityInfo";

interface Props {
  openModal: () => void;
}

export const Cities = ({ openModal }: Props) => {
  return (
    <>
      <div
        className={classNames("w-full h-full flex justify-around", styles.home)}
      >
        <CitiesList openModal={openModal} />
        <CityInfo />
      </div>
    </>
  );
};
