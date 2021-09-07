import React from "react";
import classNames from "classnames";
import styles from "./CityCard.module.css";

interface CityCardProps {
  children: JSX.Element | string;
  noHover?: boolean;
  selected?: boolean;
  noPadding?: boolean;
  className?: string;
}

export const CityCard = ({
  children,
  noHover,
  selected,
  noPadding,
  className,
}: CityCardProps) => {
  return (
    <div
      className={classNames(
        " rounded-lg cursor-pointer shadow",
        !noHover && styles.card,
        selected && styles.active,
        !noPadding && "p-5",
        className
      )}
    >
      {children}
    </div>
  );
};
