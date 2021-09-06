import React from "react";
import { Navbar } from "../../components";
import { Routes } from "../../Routes";
import classNames from "classnames";

import styles from "./Layout.module.css";

const menus = [
  { name: "Home", path: "/home" },
  { name: "Cities", path: "/cities" },
];

export const Layout = () => {
  return (
    <div
      className={classNames(
        "h-screen w-full flex space-between",
        styles.layout
      )}
    >
      <Navbar menus={menus} />
      <div className={classNames("w-11/12 p-10", styles.layout__routes)}>
        <Routes />
      </div>
    </div>
  );
};
