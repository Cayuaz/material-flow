import type { IMaterialRepository } from "../repositories/IMaterialRepository.js";

export class GetMaterialsUseCase {
  constructor(private repository: IMaterialRepository) {}

  async execute() {
    const materials = await this.repository.getMaterials();

    return materials;
  }
}
