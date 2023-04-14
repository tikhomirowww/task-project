import { combineReducers } from "@reduxjs/toolkit";

import { postsSlice } from "./posts/slices";

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
});

export default rootReducer;
