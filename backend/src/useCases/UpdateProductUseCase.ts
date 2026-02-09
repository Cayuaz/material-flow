import { AppError } from "../middlewares/error.js";
import type { IProductRepository } from "../repositories/IProductRepository.js";
import { updateProductShcema } from "../validations/schemas.js";

export class UpdateProductUseCase {
  constructor(private repository: IProductRepository) {}

  async execute(id: string, productData: unknown) {
    const { success, data } = updateProductShcema.safeParse(productData);

    if (!success) throw new AppError("Invalid or incomplete data");

    const props = Object.keys(data).length;

    if (!props) throw new AppError("Invalid or incomplete data");

    await this.repository.updateProduct(id, data);

    return true;
  }
}
