import { Material } from "../entities/Material.js";
import { prisma } from "../lib/prisma.js";

export class MaterialRepository {
  async getMaterials() {
    const materials = await prisma.material.findMany();

    if (materials.length === 0) return [];

    return materials.map((m) => new Material(m.name, m.stock, m.id));
  }
}
