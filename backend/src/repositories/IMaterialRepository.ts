import type { Material } from "../entities/Material.js";
import type { UpdateMaterialSchema } from "../validations/schemas.js";

export interface IMaterialRepository {
  getMaterials: () => Promise<Material[]>;
  createMaterial: (material: Material) => Promise<Material>;
  updateMaterial: (
    id: string,
    materialData: UpdateMaterialSchema,
  ) => Promise<Material>;
  deleteMaterial: (id: string) => Promise<Material>;
}
