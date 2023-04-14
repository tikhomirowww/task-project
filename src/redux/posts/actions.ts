import { get } from "http";
import { AppDispatch } from "../store";
import { createPost } from "./slices";
import { getPost, getCurrent, getPostByCategory } from "./slices";
import { useAppSelector } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import App from "next/app";

export const getPostsList = () => async (dispatch: AppDispatch) => {
  try {
    const posts = localStorage.getItem("posts");
    if (posts === null) {
      return undefined;
    }
    dispatch(getPost(JSON.parse(posts)));
  } catch (error) {
    console.log("Error loading data from localStorage:", error);
    return undefined;
  }
};

export const addPost =
  (title: string, status: string, time: string, id: number) =>
  async (dispatch: AppDispatch) => {
    let obj = {
      title,
      status,
      time,
      id,
    };
    dispatch(createPost(obj));
  };

export const fetchByStatus =
  (status: string, limit: number, curr: number) =>
  async (dispatch: AppDispatch) => {
    let posts = localStorage.getItem("posts");
    console.log(status, limit, curr, "limit");

    if (posts === null) {
      return undefined;
    }
    if (status === "All statuses") {
      console.log(posts, "kefteme");
      dispatch(getPostByCategory(JSON.parse(posts)));
    } else {
      const filteredPosts = JSON.parse(posts).filter(
        (post: any) => post.status === status
      );
      console.log(filteredPosts, "filter");

      dispatch(getPostByCategory(filteredPosts));
    }
  };

export const changeStatus =
  (id: string, status: string) => async (dispatch: AppDispatch) => {
    console.log("action");

    const posts = localStorage.getItem("posts");
    if (posts === null) {
      return undefined;
    }
    const updated = JSON.parse(posts).map((obj: any) => {
      if (obj.id === id) {
        return {
          ...obj,
          status: status,
        };
      } else {
        return obj;
      }
    });
    console.log(updated, "action");
    // dispatch(getPost(updated));
    localStorage.setItem("posts", JSON.stringify(updated));
    // const obj = JSON.parse(posts).find((post: any) => post.id === id);
    // obj.status = status
    dispatch(getPost(updated));
    dispatch(getPostByCategory(updated));
    // window.location.reload();
  };

export const searchFunction =
  (value: string) => async (dispatch: AppDispatch) => {
    const posts = localStorage.getItem("posts");
    if (posts === null) {
      return undefined;
    }
    const foundObjects = JSON.parse(posts).filter((book: any) =>
      book.title.toLowerCase().includes(value)
    );

    dispatch(getPostByCategory(foundObjects));

    // const obj = JSON.parse(posts).indexOf(value);
    // if(obj === -1){

    // }
  };

export const limitByPagination =
  (currentPage: number) => (dispatch: AppDispatch) => {
    dispatch(getCurrent(currentPage));
  };
