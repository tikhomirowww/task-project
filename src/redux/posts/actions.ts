import { AppDispatch } from "../store";
import { createPost } from "./slices";
import { getPost, getCurrent, getPostByCategory } from "./slices";
import { IPost } from "./posts.types";

export const getPostsList = () => async (dispatch: AppDispatch) => {
  try {
    const posts = localStorage.getItem("posts");
    if (posts === null) {
      return undefined;
    }
    dispatch(getPost(JSON.parse(posts)));
  } catch (error) {
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
  (status: string) => async (dispatch: AppDispatch) => {
    let posts = localStorage.getItem("posts");

    if (posts === null) {
      return undefined;
    }
    if (status === "All statuses") {
      dispatch(getPostByCategory(JSON.parse(posts)));
    } else {
      const filteredPosts = JSON.parse(posts).filter(
        (post: IPost) => post.status === status
      );

      dispatch(getPostByCategory(filteredPosts));
    }
  };

export const changeStatus =
  (id: string, status: string) => async (dispatch: AppDispatch) => {
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
    localStorage.setItem("posts", JSON.stringify(updated));
    dispatch(getPost(updated));
    dispatch(getPostByCategory(updated));
  };

export const searchFunction =
  (value: string) => async (dispatch: AppDispatch) => {
    const posts = localStorage.getItem("posts");
    if (posts === null) {
      return undefined;
    }
    const foundObjects = JSON.parse(posts).filter((item: IPost) =>
      item.title.toLowerCase().includes(value)
    );

    dispatch(getPostByCategory(foundObjects));
  };

export const limitByPagination =
  (currentPage: number) => (dispatch: AppDispatch) => {
    dispatch(getCurrent(currentPage));
  };
