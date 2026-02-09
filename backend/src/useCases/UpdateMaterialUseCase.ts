import { AppError } from "../middlewares/error.js";
import { updateMaterialSchema } from "../validations/schemas.js";
import type { IMaterialRepository } from "../repositories/IMaterialRepository.js";

export class UpdateMaterialUseCase {
  constructor(private repository: IMaterialRepository) {}

  async execute(id: string, materialData: unknown) {
    const { success, data } = updateMaterialSchema.safeParse(materialData);

    if (!success) throw new AppError("Invalid or incomplete data");

    const props = Object.keys(data).length;

    if (!props) throw new AppError("Invalid or incomplete data");

    await this.repository.updateMaterial(id, data);

    return true;
  }
}
