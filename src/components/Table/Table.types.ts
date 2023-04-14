import { IPost } from "@/redux/posts/posts.types";

export interface ITable {
  posts: IPost[];
  limit: number;
}
