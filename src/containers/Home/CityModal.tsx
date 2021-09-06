import React, { useState } from "react";
import classNames from "classnames";
import { CustomModal, Button, Input } from "../../components";
import { FaTimes } from "react-icons/fa";
import styles from "./Home.module.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const CityModal = ({ open, onClose }: Props) => {
  const [searchCities, setSearchCities] = useState("");

  return (
    <CustomModal
      overlayClassName={styles.overlay}
      modal={classNames("w-2/6 ", styles.modal)}
      open={open}
      onClose={onClose}
    >
      <div>
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
            onChange={(e) =>
              setSearchCities((e.target as HTMLInputElement).value)
            }
            value={searchCities}
            placeholder="Search cities"
            className=" p-2 rounded-lg w-full"
          />
        </div>
      </div>
    </CustomModal>
  );
};
