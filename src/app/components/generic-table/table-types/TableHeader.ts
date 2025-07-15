import { MenuItems } from '../../menu-button/menu-types/MenuItems';

type TableHeader = {
  title: string;
  buttons?: TableHeaderActions[];
};

type TableHeaderActions = {
  label: string;
  action: (...[arg]: string[]) => void;
  showCondition: () => boolean;
  isMenu?: boolean;
  menuItems?: MenuItems[];
};

export type { TableHeader };
