import React, { FC } from "react";
import Select from "../../ui/Select/Select";
import { ILimit } from "./Limit.types";

const Limit: FC<ILimit> = ({ getVal, limit, quantity }) => {
  return (
    <div className="flex items-center justify-between w-48 text-[13px] text-grayTitle">
      <div className="w-16">
        <Select
          variant="limit"
          onChange={getVal}
          val={limit}
          options={[1, 2, 3, 4, 5]}
        />
      </div>
      <p>
        Showing 1 - {limit} of {quantity}
      </p>
    </div>
  );
};

export default Limit;
