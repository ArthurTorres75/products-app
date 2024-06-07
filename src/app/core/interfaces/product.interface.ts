import { InventoryStatus } from '../enums/inventory.enum';
import { IReviews } from './reviews.interface';

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  category?: string;
  inventoryStatus: InventoryStatus;
  stock?: number;
  rating?: number;
  numReviews?: number;
  quantity?: number;
  price: number;
  imageURL: string;
  createdAt: string;
  reviews: IReviews[];
  __v?: number;
}
