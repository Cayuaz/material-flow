import type { Product } from "../entities/Product.js";
import type {
  CreateProductSchema,
  UpdateProductSchema,
} from "../validations/schemas.js";

export interface IProductRepository {
  getProducts: () => Promise<Product[]>;
  createProduct: (product: CreateProductSchema) => Promise<Product>;
  updateProduct: (
    id: string,
    productData: UpdateProductSchema,
  ) => Promise<Product>;
  deleteProduct: (id: string) => Promise<Product>;
  getProductsOrderedByPrice: () => Promise<Product[]>;
}
