import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import button from "../../../public/Button.svg";
import { IHeader } from "./Header.types";

const Header: FC<IHeader> = ({ pageName }) => {
  return (
    <div className="flex items-center bg-white h-12">
      <Image
        width={78}
        height={18}
        alt="logo"
        className="ml-6"
        src="/logo.svg"
      />
      <div className="ml-32 text-[18px] flex gap-4">
        {pageName === "New Post" ? (
          <Link href="/">
            <Image src={button} width={28} height={28} alt="arrow back" />
          </Link>
        ) : (
          ""
        )}
        <h3>{pageName}</h3>
      </div>
    </div>
  );
};

export default Header;
