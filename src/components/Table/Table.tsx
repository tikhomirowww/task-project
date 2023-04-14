import React, { FC } from "react";
import styles from "./Table.module.scss";
import { useAppDispatch } from "@/redux/store";
import Select from "../../ui/Select/Select";
import { useAppSelector } from "@/redux/store";
import { changeStatus } from "@/redux/posts/actions";
import { ITable } from "./Table.types";
import { IPost } from "@/redux/posts/posts.types";

const tableTitles: string[] = ["ID", "Title", "Time", "Status"];

const Table: FC<ITable> = ({ posts, limit }) => {
  const dispatch = useAppDispatch();

  const curr = useAppSelector((state) => state.posts.currentPage);
  const start = curr * limit - limit;
  const end = start + limit;
  let objects: IPost[] = posts.slice(start, end);

  return (
    <table className="table-fixed w-full mt-7">
      <thead>
        <tr className="border-b-2 border-grayLayout">
          {tableTitles.map((item) => (
            <th
              key={item}
              className={`${styles.th} text-start pl-1 font-gilroy text-sm font-medium text-grayTitle pb-2`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {objects.map((item: any) => (
          <tr className={`${styles.values} w-full`} key={item.id}>
            <td className="pl-6">{item.id}</td>
            <td>{item.title}</td>
            <td>{item.time}</td>
            <td>
              <div className="w-24">
                <Select
                  val={item.status}
                  onChange={() =>
                    dispatch(
                      changeStatus(
                        item.id,
                        item.status === "Published" ? "Draft" : "Published"
                      )
                    )
                  }
                  options={["Draft", "Published"]}
                  variant="status"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
