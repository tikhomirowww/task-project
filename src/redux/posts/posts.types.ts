export interface IPost {
  id: number;
  title: string;
  status: string;
  time: string;
}

export interface PostsState {
  posts: IPost[];
  filteredPosts: IPost[];
  currentPage: number;
}
