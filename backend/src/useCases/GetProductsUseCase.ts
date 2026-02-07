import type { IProductRepository } from "../repositories/IProductRepository.js";

export class GetProductsUseCase {
  constructor(private repository: IProductRepository) {}

  async execute() {
    const products = await this.repository.getProducts();

    return products;
  }
}
