import { log } from "console";
import { useState, useEffect } from "react";
import Select from "@/ui/Select/Select";
import Image from "next/image";
import { getCurrent } from "@/redux/posts/slices";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { IProps } from "./pagination.types";

const Pagination: React.FC<IProps> = ({ limit, posts, getLimit, quantity }) => {
  const dispatch = useAppDispatch();

  const [activeIndex, setActiveIndex] = useState(1);

  const pages = Math.ceil(posts.length / limit);

  const curr = useAppSelector((state) => state.posts.currentPage);

  const renderNums = () => {
    const nums: any = [];
    for (let i = 1; i <= pages; i++) {
      nums.push(
        <li key={i} onClick={() => setActiveIndex(i)}>
          <button
            onClick={() => dispatch(getCurrent(i))}
            className={`w-8 h-8 rounded ${
              activeIndex == i && "bg-blueBtn text-white"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }
    return nums;
  };

  return (
    <div className="w-[97%] mt-8 mx-auto flex justify-between">
      <div className="flex items-center justify-between w-48 text-[13px] text-grayTitle">
        <div className="w-16">
          <Select
            variant="limit"
            onChange={getLimit}
            val={limit}
            options={[1, 2, 3, 4, 5]}
          />
        </div>
        <p>
          Showing 1 - {limit} of {quantity}
        </p>
      </div>
      <div className="flex">
        <span
          onClick={() => {
            activeIndex != 1 &&
              dispatch(getCurrent(curr - 1)) &&
              setActiveIndex(activeIndex - 1);
          }}
          className="w-8 h-8 rounded bg-grayPostBtn flex justify-center items-center"
        >
          <Image
            src="/arrow-left.svg"
            width={12}
            height={12}
            alt="left arrow"
          />
        </span>
        <ul className="flex">{renderNums()}</ul>
        <span
          onClick={() => {
            activeIndex != pages &&
              dispatch(getCurrent(curr + 1)) &&
              setActiveIndex(activeIndex + 1);
          }}
          className="w-8 h-8 rounded bg-grayPostBtn flex justify-center items-center"
        >
          <Image
            src="/arrow-right.svg"
            width={12}
            height={12}
            alt="right arrow"
          />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
