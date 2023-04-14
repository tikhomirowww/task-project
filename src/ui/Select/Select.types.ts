export interface SelectProps {
  variant: "status" | "limit";
  val: any;
  options: string[] | number[];
  onChange: (str: any) => void;
}
