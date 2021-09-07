import React, { useState } from "react";
import { Navbar } from "../../components";
import { Routes } from "../../Routes";
import classNames from "classnames";
import { connect } from "react-redux";
import { CityModal } from "./CityModal";

import styles from "./Layout.module.css";

const menus = [
  { name: "Home", path: "/home" },
  { name: "Cities", path: "/cities" },
];

interface Props {
  cities: any;
}

const Layout = ({ cities }: Props) => {
  const [modalIsOpen, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }
  return (
    <div
      className={classNames(
        "h-screen w-full flex space-between overflow-y-scroll",
        styles.layout
      )}
    >
      <Navbar menus={menus} />
      <div className={classNames("w-11/12 pl-64 p-10", styles.layout__routes)}>
        <Routes openModal={openModal} />
      </div>
      <CityModal
        existingCities={cities}
        open={modalIsOpen}
        onClose={closeModal}
      />
    </div>
  );
};

const mapStateToProps = function (state: any) {
  return {
    cities: state.data.cities,
    activeCity: state.data.activeCity,
    favorites: state.data.favorites,
  };
};

export default connect(mapStateToProps)(Layout);
