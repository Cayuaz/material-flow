import type { IMaterialRepository } from "../repositories/IMaterialRepository.js";
import type { IProductRepository } from "../repositories/IProductRepository.js";

export class SuggestedProductsUseCase {
  constructor(
    private productRepository: IProductRepository,
    private materialRepository: IMaterialRepository,
  ) {}

  async execute() {
    const products = await this.productRepository.getProductsOrderedByPrice();
    const materials = await this.materialRepository.getMaterials();

    if (products.length === 0 || materials.length === 0) return [];

    //Create virtual stock for suggestion calc logic
    const virtualStock = new Map<string, number>();
    materials.forEach((m) => virtualStock.set(m.id!, m.stock));

    const suggestedProducts = products.map((product) => {
      let maxPossible = Infinity;

      //This logic check the max quantity of products is possible to make
      //maxPossible needs to be the material ends first
      product.materials?.forEach((productMaterial) => {
        const materialStock = virtualStock.get(productMaterial.id) || 0;
        // stock / quantitiy
        //Ex: One shirt costs 2 of determined material, but it has only 10 stock of this material, then max possible will be 5. And if a material calculates smaller than 5 it will replace the max possible
        const possibleForThisMaterial = Math.floor(
          materialStock / productMaterial.quantity,
        );

        if (possibleForThisMaterial < maxPossible)
          maxPossible = possibleForThisMaterial;
      });

      //This logic calculates the material stock subtract product materials quantity
      //if max possible = 10, all materials stock will be subtract material quantity x 10
      product.materials?.forEach((productMaterial) => {
        const materialStock = virtualStock.get(productMaterial.id) || 0;
        const consumed = maxPossible * productMaterial.quantity;
        virtualStock.set(productMaterial.id, materialStock - consumed);
      });

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        suggestedQuantity: maxPossible,
      };
    });

    return suggestedProducts.filter(
      (product) => product.suggestedQuantity !== 0,
    );
  }
}
