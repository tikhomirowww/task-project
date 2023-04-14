import React, { FC, useState, useEffect } from "react";
import styles from "./Select.module.scss";
import svg from "../../../public/arrow-down.svg";
import Image from "next/image";
import { SelectProps } from "./Select.types";

const Select: FC<SelectProps> = ({ variant, val, options, onChange }) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(val);
  console.log(selected, "selecteeeeed");

  // useEffect(() => {
  //   onChange(selected);
  // }, [selected]);

  return (
    <div
      className={`relative  h-9 text-secondary cursor-pointer py-2 w-full ${
        variant == "limit" ? "bg-grayPostBtn rounded-[0.65rem] px-[0.9rem]" : ""
      } `}
    >
      <div
        onClick={() => {
          setActive((p) => !p);
        }}
        className={`flex items-center h-full  ${
          variant == "limit" ? "justify-between text-grayTitle" : ""
        }`}
      >
        {selected}
        <Image
          className={`${variant == "status" ? "ml-2" : ""}`}
          src={svg}
          width={16}
          height={16}
          alt="arrow"
        />
        {active && (
          <div
            className={`${styles.options} absolute z-10 py-2 left-0 top-[calc(100%+5px)] w-full h-20 bg-white rounded-[0.65rem] border border-gray bg-main-bg overflow-auto`}
          >
            {options.map((item) => (
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(item);
                  console.log("select");
                  setActive(false);
                  onChange(item);
                }}
                className="py-2 px-[0.9rem] hover:bg-grayLayout"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
