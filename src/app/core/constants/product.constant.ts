import { InventoryStatus } from '../enums/inventory.enum';
import { IProduct } from '../interfaces/product.interface';

export const product: IProduct = {
  _id: '',
  name: '',
  description: '',
  category: '',
  inventoryStatus: InventoryStatus.OutOfStock,
  stock: 0,
  rating: 0,
  numReviews: 0,
  quantity: 0,
  price: 0,
  imageURL: '',
  createdAt: '',
  reviews: [],
};
