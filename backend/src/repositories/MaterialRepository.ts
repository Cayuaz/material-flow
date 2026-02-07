import { Material } from "../entities/Material.js";
import { prisma } from "../lib/prisma.js";
import type { UpdateMaterialSchema } from "../validations/schemas.js";

export class MaterialRepository {
  //This method returns all materials
  async getMaterials() {
    const materials = await prisma.material.findMany();

    if (materials.length === 0) return [];

    //Transform materials data in entities with Material class
    return materials.map((m) => new Material(m.name, m.stock, m.id));
  }
  //This method creates a new material
  async createMaterials(material: Material) {
    return await prisma.material.create({
      data: { name: material.name, stock: material.stock },
    });
  }
  //This method updates some prop (name, stock) of a material
  async updateMaterial(id: string, materialData: UpdateMaterialSchema) {
    return await prisma.material.update({
      where: { id },
      data: {
        ...(materialData.name && { name: materialData.name }),
        ...(materialData.stock && { stock: materialData.stock }),
      },
    });
  }
  //This method deletes a material
  async deleteMaterial(id: string) {
    return await prisma.material.delete({ where: { id } });
  }
}
