import { IPost } from "@/redux/posts/posts.types";

export interface IProps {
  limit: number;
  posts: IPost[];
  getLimit: (val: number | string) => void;
  quantity: number;
}
