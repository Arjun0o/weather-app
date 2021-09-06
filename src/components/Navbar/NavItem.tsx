import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./NavItem.module.css";

export interface NavItemProps {
  name: string;
  path: string;
}

export const NavItem = ({ name, path }: NavItemProps) => {
  return (
    <li>
      <Link
        to={path}
        className={classNames(
          "pointer p-8 flex justify-center items-center shadow no-underline rounded-lg",
          styles.navitem__link
        )}
      >
        <span
          className={classNames("font-medium text-lg", styles.navitem__name)}
        >
          {name}
        </span>
      </Link>
    </li>
  );
};
