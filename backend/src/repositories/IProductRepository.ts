import type { Product } from "../entities/Product.js";

export interface IProductRepository {
  getProducts: () => Promise<Product[]>;
  createProduct: (product: Product) => Promise<boolean>;
  updateProduct: (id: string) => Promise<boolean>;
  deleteProduct: (id: string) => Promise<boolean>;
}
