import { Decimal } from "@prisma/client/runtime/client";
import { AppError } from "../middlewares/error.js";
import type { IProductRepository } from "../repositories/IProductRepository.js";
import { createProductSchema } from "../validations/schemas.js";

export class CreateProductUseCase {
  constructor(private repository: IProductRepository) {}

  async execute(productData: unknown) {
    const { success, data } = createProductSchema.safeParse(productData);

    if (!success) throw new AppError("Invalid or incomplete data.");

    const product = {
      name: data.name,
      price: Decimal(data.price),
      materials: data.materials,
    };

    await this.repository.createProduct(product);

    return true;
  }
}
