export interface ILimit {
  getVal: (val: number | string) => void;
  limit: number;
  quantity: number;
}
