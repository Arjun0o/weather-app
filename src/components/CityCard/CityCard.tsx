import React from "react";
import classNames from "classnames";
import styles from "./CityCard.module.css";

interface CityCardProps {
  title: string;
  temp: string;
}

export const CityCard = ({ title, temp }: CityCardProps) => {
  return (
    <div className={classNames("p-5 rounded-lg cursor-pointer", styles.card)}>
      <h2 className="mb-4 font-bold">{title}</h2>
      <p>{temp}</p>
    </div>
  );
};
