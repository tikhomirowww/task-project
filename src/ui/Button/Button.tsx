import React, { FC } from "react";

const Button: FC<{ onClick?: () => void; children: string }> = ({
  children,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="h-9 w-40 bg-blueBtn rounded-lg flex justify-center items-center text-white cursor-pointer"
    >
      {children}
    </div>
  );
};

export default Button;
