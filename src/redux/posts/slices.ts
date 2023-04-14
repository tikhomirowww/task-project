import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPost, PostsState } from "./posts.types";

const initialState: PostsState = {
  posts: [],
  filteredPosts: [],
  currentPage: 1,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPost(state, { payload }) {
      state.posts = payload;
    },
    createPost: (state, { payload }) => {
      state.posts.push(payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    getPostByCategory: (state, { payload }) => {
      state.filteredPosts = payload;
    },
    getCurrent: (state, { payload }) => {
      state.currentPage = payload;
    },
    updateObjectKey: (state, action: PayloadAction<{ id: number }>) => {
      const post = state.posts.find((post: any) => post.id === action.payload);
      if (post) {
        if (post.status === "Draft") {
          post.status = "Published";
        } else {
          post.status = "Draft";
        }
      }
    },
  },
});

export const {
  createPost,
  getPost,
  getPostByCategory,
  getCurrent,
  updateObjectKey,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;
