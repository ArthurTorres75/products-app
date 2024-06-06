export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
  createdAt: string;
  reviews: any[];
  __v?: number;
}
