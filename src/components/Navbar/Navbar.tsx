import React from "react";
import classNames from "classnames";
import { NavItemProps, NavItem } from "./NavItem";
import styles from "./Navbar.module.css";

interface SidebarProps {
  menus: NavItemProps[];
}

export const Navbar = ({ menus }: SidebarProps) => {
  return (
    <div
      className={classNames(
        "flex justify-start items-center shadow flex-col fixed h-full p-6",
        styles.menu
      )}
    >
      {menus.map((menu) => (
        <ul key={menu.path} className={classNames("m-4 list-none")}>
          <NavItem name={menu.name} path={menu.path} />
        </ul>
      ))}
    </div>
  );
};
