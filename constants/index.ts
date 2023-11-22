export const switchToTheme = {
  false: "light",
  true: "dark",
};

export interface ResponsType<T> {
  status: string;
  result: Array<T>;
  err: string | null;
}
