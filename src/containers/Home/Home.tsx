import React from "react";
import { Button, CityCard } from "../../components";
import { FaPlusSquare, FaStar } from "react-icons/fa";
import classNames from "classnames";
import styles from "./Home.module.css";
import { connect } from "react-redux";

interface Props {
  favorites: any;
  openModal: () => void;
}

const Home = ({ favorites, openModal }: Props) => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Favorite cities</h1>
        <Button
          type="button"
          onClick={() => openModal()}
          className={classNames("border-2 p-2 btn", styles.home__btn)}
        >
          <div className="flex items-center justify-center">
            <span className="mr-4 text-lg">Add new City</span>
            <FaPlusSquare size={23} className="icon" />
          </div>
        </Button>
      </div>
      <div className="flex mt-8 flex-wrap ">
        {favorites.map((favorite: any) => (
          <CityCard
            key={favorite?.id}
            noPadding
            noHover
            className="mr-6 mb-6 p-2"
          >
            <div>
              <div className="bg-white rounded p-2 mb-4 flex items-center justify-between">
                <p className="text-xl uppercase font-bold">{favorite?.name}</p>
                <FaStar size={23} />
              </div>
              <p className=" uppercase font-bold  mb-6">
                humidity: {favorite?.main?.humidity} %
              </p>
              <p className=" uppercase font-bold  mb-6">
                Temperature:{" "}
                {Math.round(
                  favorite?.main?.temp ? favorite?.main?.temp - 273.15 : 0
                )}{" "}
                C
              </p>
              <p className=" uppercase font-bold  mb-6">
                Maximum temperature:{" "}
                {Math.round(
                  favorite?.main?.temp_max
                    ? favorite?.main?.temp_max - 273.15
                    : 0
                )}{" "}
                C
              </p>
              <p className=" uppercase font-bold  mb-6 ">
                Minimum temperature:{" "}
                {Math.round(
                  favorite?.main?.temp_min
                    ? favorite?.main?.temp_min - 273.15
                    : 0
                )}{" "}
                C
              </p>
            </div>
          </CityCard>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = function (state: any) {
  return {
    favorites: state.data.favorites,
  };
};

export default connect(mapStateToProps)(Home);
