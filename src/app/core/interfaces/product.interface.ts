import { InventoryStatus } from '../enums/inventory.enum';

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  category?: string;
  inventoryStatus: InventoryStatus;
  stock?: number;
  quantity?: number;
  price: number;
  imageURL: string;
  createdAt: string;
  reviews: any[];
  __v?: number;
}
