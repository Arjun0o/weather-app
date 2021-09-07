import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Button } from "../../components";
import classNames from "classnames";
import { CityModal } from "./CityModal";
import styles from "./Home.module.css";
import { connect } from "react-redux";

interface Props {
  cities: string[];
}

const CitiesList = ({ cities }: Props) => {
  const [modalIsOpen, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div className={classNames("w-1/4", styles.cities)}>
      <div
        className={classNames(
          "flex justify-between p-8",
          styles.cities__header
        )}
      >
        <h1 className={classNames("font-semibold uppercase")}>Cities</h1>
        <Button type="button">
          <FaPlusSquare
            size={25}
            onClick={openModal}
            className={classNames("icon")}
          />
        </Button>
      </div>
      <div className="p-8"></div>
      <CityModal open={modalIsOpen} onClose={closeModal} />
    </div>
  );
};

const mapStateToProps = function (state: any) {
  return {
    cities: state.cities.cities,
  };
};

export default connect(mapStateToProps)(CitiesList);
