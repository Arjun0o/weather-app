import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { Button } from "../../components";
import classNames from "classnames";
import styles from "./Home.module.css";
import { connect } from "react-redux";
import { CityCard } from "../../components";
import { getWeatherInfo, AddActiveCity } from "../../redux/modules/weather";
import { useDispatch } from "react-redux";

interface Props {
  cities: any;
  activeCity: string;
  openModal: () => void;
}

const CitiesList = ({ cities, activeCity, openModal }: Props) => {
  const dispatch = useDispatch();

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
          cities.length > 5 ? "overflow-y-scroll" : ""
        )}
      >
        {cities.map((city: any, i: number) => (
          <div
            key={i}
            className={classNames("mb-6")}
            onClick={() => {
              handleAddActiveCity(city?.name);
              fetchWeatherDetails(city?.name);
            }}
          >
            <CityCard selected={activeCity === city?.name ? true : false}>
              <>
                <p>{city?.name}</p>
                <p className="mt-2">
                  {Math.round(city?.main?.temp ? city?.main?.temp - 273.15 : 0)}{" "}
                  C
                </p>
              </>
            </CityCard>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = function (state: any) {
  return {
    cities: state.data.cities,
    activeCity: state.data.activeCity,
  };
};

export default connect(mapStateToProps)(CitiesList);
