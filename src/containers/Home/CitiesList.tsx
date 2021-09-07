import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Button } from "../../components";
import classNames from "classnames";
import { CityModal } from "./CityModal";
import styles from "./Home.module.css";
import { connect } from "react-redux";
import { CityCard } from "../../components";
import { getWeatherInfo } from "../../redux/modules/weather";
import { useDispatch } from "react-redux";
import { AddActiveCity } from "../../redux/modules/cities";

interface Props {
  cities: string[];
  activeCity: string;
}

const CitiesList = ({ cities, activeCity }: Props) => {
  const [modalIsOpen, setModal] = useState(false);
  // const [activeCity, setActiveCity] = useState("");
  const dispatch = useDispatch();

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  const fetchWeatherDetails = (city: string) => {
    dispatch(getWeatherInfo(city));
  };

  const handleAddActiveCity = (city: string) => {
    dispatch(AddActiveCity(city));
  };

  return (
    <div className={classNames("w-1/4 ", styles.cities)}>
      <div
        className={classNames(
          "flex justify-between items-center p-8",
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
      <div
        className={classNames(
          "p-8 h-5/6",
          cities.length > 7 ? "overflow-y-scroll" : ""
        )}
      >
        {cities.map((city, i) => (
          <div
            key={i}
            className={classNames("mb-6")}
            onClick={() => {
              handleAddActiveCity(city);
              fetchWeatherDetails(city);
            }}
          >
            <CityCard selected={activeCity === city ? true : false}>
              {city}
            </CityCard>
          </div>
        ))}
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
    cities: state.cities.cities,
    activeCity: state.cities.activeCity,
  };
};

export default connect(mapStateToProps)(CitiesList);
