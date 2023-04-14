import React, { FC, useEffect, useState } from "react";
import styles from "./Table.module.scss";
import { useAppDispatch } from "@/redux/store";
import Select from "../../ui/Select/Select";
import { useAppSelector } from "@/redux/store";
import { changeStatus } from "@/redux/posts/actions";
import { getPostsList } from "@/redux/posts/actions";

const tableTitles = ["ID", "Title", "Time", "Status"];
// const posts = [
//   { id: 1, title: "hello", time: "23:01", status: "draft" },
//   { id: 2, title: "react", time: "8:00", status: "published" },
//   { id: 3, title: "js", time: "7:30", status: "draft" },
//   { id: 4, title: "python", time: "19:45", status: "published" },
//   { id: 5, title: "keftemeeeeeeeee", time: "19:45", status: "draft" },
// ];

const Table: FC<{
  posts: any;
  limit: number;
}> = ({ posts, limit }) => {
  const dispatch = useAppDispatch();

  // const [status, setStatus] = useState("");

  // const getValue = (str: string) => {
  //   setStatus(str);
  // };
  const curr = useAppSelector((state) => state.posts.currentPage);
  const start = curr * limit - limit;
  const end = start + limit;
  // const end = 1;
  let objects = posts.slice(start, end);

  console.log(posts);
  return (
    <table className="table-fixed w-full mt-7">
      <thead>
        <tr className="border-b-2 border-grayLayout">
          {tableTitles.map((item: any) => (
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
                  // onChange={() => console.log("hello")}
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
