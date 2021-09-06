import React from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

interface Props {
  placeholder?: string;
  id: string;
  name?: string;
  type?: string;
  value?: string | number;
  onChange: (e?: any) => void;
  className: string;
  label?: string;
}

export const Input = ({
  placeholder,
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
}: Props) => {
  return (
    <div className="w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        placeholder={placeholder}
        id={id}
        className={classNames(className, styles.input)}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
