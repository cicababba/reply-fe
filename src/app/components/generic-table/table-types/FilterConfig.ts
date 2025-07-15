import { IMessageFilters } from '../../../../types/IMessageHistory';

export type Filter = {
  key: string;
  label: string;
  selectOptions?: { label: string; value: string }[];
  placeholder?: string;
  type?: 'select' | 'text';
};

export type FiltersConfig = {
  filters: Filter[];
  searchFn: (filterValues: IMessageFilters) => void;
  onReset?: () => void;
};
