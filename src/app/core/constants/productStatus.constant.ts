import { InventoryStatus } from '../enums/inventory.enum';
import { DropdownOptions } from '../interfaces/dropdownOptions.interface';

export const productStatuses: DropdownOptions[] = [
  { label: InventoryStatus.Instock, value: 'instock' },
  { label: InventoryStatus.LowStock, value: 'lowstock' },
  { label: InventoryStatus.OutOfStock, value: 'outofstock' },
];
