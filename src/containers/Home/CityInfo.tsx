import React from "react";
import styles from "./Home.module.css";
import { Button } from "../../components";
import classNames from "classnames";
import { FaStar } from "react-icons/fa";
import { connect } from "react-redux";

interface Props {
  weather: object;
}

const CityInfo = ({ weather }: Props) => {
  return (
    <div className={classNames("w-4/6", styles.cityInfo)}>
      <div
        className={classNames(
          "flex justify-between p-8",
          styles.cityInfo__header
        )}
      >
        <h1 className={classNames("font-semibold uppercase")}>Pune</h1>
        <Button type="button">
          <FaStar size={25} className={classNames("icon")} />
        </Button>
      </div>
      <div></div>
    </div>
  );
};

const mapStateToProps = function (state: any) {
  return {
    weather: state.weather,
  };
};

export default connect(mapStateToProps)(CityInfo);
