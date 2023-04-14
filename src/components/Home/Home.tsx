import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import {
  getPostsList,
  fetchByStatus,
  searchFunction,
} from "@/redux/posts/actions";
import Input from "@/ui/Input/Input";
import Layout from "../Layout/Layout";
import Image from "next/image";
import Button from "@/ui/Button/Button";
import StatusBtn from "@/ui/StatusBtn/StatusBtn";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";
import { IPost } from "@/redux/posts/posts.types";

const Home = () => {
  const [limit, setLimit] = useState(5);
  const [curr, setCurr] = useState(1);

  const [status, setStatus] = useState<"All statuses" | "Draft" | "Published">(
    "All statuses"
  );

  const getLimit = (val: any) => {
    setLimit(val);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPostsList());
    dispatch(fetchByStatus(status));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchByStatus(status));
  }, [status]);

  const posts: IPost[] = useAppSelector((state) => state.posts.posts);
  let filtered = useAppSelector((state) => state.posts.filteredPosts);
  const quantity = posts.length;

  let published = posts.filter((item) => item.status === "Published").length;

  let drafts = posts.filter((item) => item.status === "Draft").length;

  const [search, setSearch] = useState("");

  const findPosts = (e: any) => {
    setSearch(e.target.value);
    dispatch(searchFunction(e.target.value));
  };

  return (
    <Layout
      title="Posts Page"
      description="task project using Nextjs"
      pageName="Posts"
    >
      <div className=" w-[97%] pt-4 mx-auto">
        <div className=" flex justify-between">
          <div className="w-[27rem]">
            <Input
              value={search}
              onChange={findPosts}
              type="text"
              placeholder="Search"
              icon={
                <Image
                  width={20}
                  height={20}
                  src="/search.svg"
                  alt="inputIcon"
                />
              }
            />
          </div>
          <Link href="/create">
            <Button>Create post</Button>
          </Link>
        </div>
        <div className="flex gap-2 mt-3">
          <StatusBtn onClick={setStatus} text="All statuses" num={quantity} />
          <StatusBtn onClick={setStatus} text="Draft" num={drafts} />
          <StatusBtn onClick={setStatus} text="Published" num={published} />
        </div>
      </div>
      <div className=" h-[430px]">
        <Table limit={limit} posts={filtered} />
      </div>

      {/* <div className="container w-[97%] mt-8 mx-auto flex justify-between"> */}
      {/* <Limit quantity={quantity} limit={limit} getVal={getLimit} /> */}
      <Pagination
        getLimit={getLimit}
        quantity={quantity}
        posts={posts}
        limit={limit}
      />
      {/* </div> */}
    </Layout>
  );
};

export default Home;
