export type TableAction<T> = {
  label: string;
  icon: string;
  showCondition: (row: T) => boolean;
  action: (row: T) => void;
};
