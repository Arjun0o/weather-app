import React from "react";
import classNames from "classnames";
import styles from "./CityCard.module.css";

interface CityCardProps {
  children: JSX.Element | string;
  noHover?: boolean;
  selected?: boolean;
}

export const CityCard = ({ children, noHover, selected }: CityCardProps) => {
  return (
    <div
      className={classNames(
        "p-5 rounded-lg cursor-pointer shadow",
        !noHover && styles.card,
        selected && styles.active
      )}
    >
      {children}
    </div>
  );
};
