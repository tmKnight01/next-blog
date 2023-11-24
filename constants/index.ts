export const switchToTheme = {
  false: "light",
  true: "dark",
};

export interface ResponsType<T> {
  status: string;
  data: {
    result: Array<T>;
    total?: number;
  };

  err: string | null;
}
