import type { IProductRepository } from "../repositories/IProductRepository.js";

export class DeleteProductUseCase {
  constructor(private repository: IProductRepository) {}

  async execute(id: string) {
    await this.repository.deleteProduct(id);

    return true;
  }
}
