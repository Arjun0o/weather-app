import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { CustomModal, Button, Input, CityCard } from "../../components";
import { FaTimes, FaPlusSquare } from "react-icons/fa";
import styles from "./Layout.module.css";
import { citiesList } from "../../utils/Cities";
import { addCities } from "../../redux/modules/weather";
import { useDispatch } from "react-redux";

interface Props {
  open: boolean;
  onClose: () => void;
  existingCities: string[];
}

export const CityModal = ({ open, onClose, existingCities }: Props) => {
  const [searchCities, setSearchCities] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCities(citiesList);
  }, []);

  const handleOnChange = useCallback((value: string) => {
    if (!value.trim().length) {
      setCities(citiesList);
    } else {
      setCities(
        citiesList.filter((city) => {
          const regex = new RegExp(value, "gi");
          return city.match(regex);
        })
      );
    }
  }, []);

  const addCity = (name: string) => {
    if (existingCities.some((city: any) => city?.name === name)) {
      alert("City already exists");
      return;
    }
    dispatch(addCities(name));
    setSearchCities("");
    setCities(citiesList);
    onClose();
  };

  return (
    <CustomModal
      overlayClassName={styles.overlay}
      modal={classNames("w-2/6 ", styles.modal)}
      open={open}
      onClose={onClose}
    >
      <div
        className={classNames(
          "flex justify-between p-6 items-center border-b-2",
          styles.modal__header
        )}
      >
        <h1 className={classNames("text-xl")}>Add City</h1>
        <Button onClick={onClose} type="button">
          <FaTimes size={25} className="icon" />
        </Button>
      </div>
      <div className="flex p-4 px-12 justify-center border-b-2">
        <Input
          id="searchCities"
          name="searchCities"
          type="text"
          value={searchCities}
          onChange={(e) => {
            setSearchCities(e.target.value);
            handleOnChange(e.target.value);
          }}
          placeholder="Search cities"
          className=" p-2 rounded-lg w-full"
        />
      </div>
      <div className="overflow-y-scroll h-4/5">
        {cities.map((city, i) => (
          <div key={i} className="p-4">
            <CityCard noHover>
              <div className="p-2 flex justify-between">
                <h1>{city}</h1>
                <Button type="button" onClick={() => addCity(city)}>
                  <FaPlusSquare
                    size={25}
                    onClick={() => {}}
                    className={classNames("icon")}
                  />
                </Button>
              </div>
            </CityCard>
          </div>
        ))}
      </div>
    </CustomModal>
  );
};
