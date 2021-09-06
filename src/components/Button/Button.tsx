import React, { SyntheticEvent } from "react";
import classNames from "classnames";

interface Props {
  children: JSX.Element | string;
  onClick?: (event: SyntheticEvent) => void;
  type?: "button" | "submit";
  className?: string;
}

export const Button = ({ children, onClick, type, className }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "flex justify-center rounded p-1 items-center cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};
