export interface SelectProps {
  variant: "status" | "limit";
  val: number;
  options: string[] | number[];
  onChange: (str: any) => void;
}
