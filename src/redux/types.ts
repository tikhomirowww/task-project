export type ResponseState = {
  error: string | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
};

export type ApiError = {
  message: string;
};
