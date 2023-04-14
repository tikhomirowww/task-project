import React, { FC } from "react";
import Header from "../Header/Header";
import SidePanel from "../SidePanel/SidePanel";
import Meta from "../seo/Meta";
import { ILayout } from "./Layout.types";

const Layout: FC<ILayout> = ({ pageName, title, description, children }) => {
  return (
    <Meta title={title} description={description}>
      <div className="bg-grayLayout max-w-[95rem] m-auto">
        <Header pageName={pageName} />
        <div className="flex h-[45rem]">
          <SidePanel />
          <div className="w-[90%]">
            <div className="bg-white w-[97%] my-4 mx-auto h-[93%] rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Meta>
  );
};

export default Layout;
