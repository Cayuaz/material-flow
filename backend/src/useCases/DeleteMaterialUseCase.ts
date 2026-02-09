import type { IMaterialRepository } from "../repositories/IMaterialRepository.js";

export class DeleteMaterialUseCase {
  constructor(private repository: IMaterialRepository) {}

  async execute(id: string) {
    await this.repository.deleteMaterial(id);

    return true;
  }
}
