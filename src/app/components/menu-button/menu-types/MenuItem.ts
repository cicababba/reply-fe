export type MenuItem = {
  label: string;
  action: (...[arg]: string[]) => void;
};
