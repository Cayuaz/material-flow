import { AppError } from "../middlewares/error.js";
import type { IMaterialRepository } from "../repositories/IMaterialRepository.js";
import { createMaterialShcema } from "../validations/schemas.js";

export class CreateMaterialUseCase {
  constructor(private repository: IMaterialRepository) {}

  async execute(materialData: unknown) {
    const { success, data } = createMaterialShcema.safeParse(materialData);

    if (!success) throw new AppError("Invalid or incomplete data.");

    await this.repository.createMaterial(data);

    return true;
  }
}
