import { MenuItem } from '../../menu-button/menu-types/MenuItem';

type TableHeader = {
  title: string;
  buttons?: TableHeaderActions[];
};

type TableHeaderActions = {
  label: string;
  action: (...[arg]: string[]) => void;
  showCondition: () => boolean;
  isMenu?: boolean;
  menuItems?: MenuItem[];
};

export type { TableHeader };
