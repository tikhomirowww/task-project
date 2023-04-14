import React, { FC, useRef, useEffect } from "react";

const StatusBtn: FC<{
  num: number;
  text: "All statuses" | "Draft" | "Published";
  autofocus?: boolean;
  onClick: (state: "All statuses" | "Draft" | "Published") => void;
}> = ({ num, text, autofocus, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (autofocus && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [autofocus]);

  return (
    <button
      onClick={() => onClick(text)}
      ref={buttonRef}
      className="w-36 h-9 pl-3 pr-2 flex justify-between items-center bg-grayPostBtn focus:bg-blueBtn focus:text-white focus:outline-none rounded-lg"
    >
      <div className="text-sm font-normal">{text}</div>
      <div className="bg-grayNum text-white rounded-[46px] px-2 py-1 font-medium text-xs">
        {num}
      </div>
    </button>
  );
};

export default StatusBtn;
