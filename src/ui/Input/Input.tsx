import React, { FC, useState, useEffect } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  type: "text" | "datetime-local";
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  icon?: React.ReactElement;
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  icon,
  value,
  onChange,
}) => {
  const [title, setTitle] = useState(true);

  // console.log(value);

  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        className={`bg-grayPostBtn w-full h-9 rounded-lg focus:outline-none pl-4 pr-9 appearance-none ${
          styles.input
        } ${type == "datetime-local" ? "date" : ""}`}
        type={type}
        placeholder={placeholder}
      />
      {type === "datetime-local" && !value ? (
        <div className="absolute top-[6px] left-4 text-grayTitle">
          {placeholder}
        </div>
      ) : (
        ""
      )}
      <div className={`${styles.iconContainer}`}>{icon}</div>
    </div>
  );
};

export default Input;
