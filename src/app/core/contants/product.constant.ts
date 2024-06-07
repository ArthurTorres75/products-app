import { InventoryStatus } from '../enums/inventory.enum';
import { IProduct } from '../interfaces/product.interface';

export const Product: IProduct = {
  _id: '',
  name: '',
  description: '',
  category: '',
  inventoryStatus: InventoryStatus.OutOfStock,
  price: 0,
  imageURL: '',
  createdAt: '',
  reviews: [],
};
