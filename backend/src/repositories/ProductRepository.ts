import { Product } from "../entities/Product.js";
// import type { IProductRepository } from "./IProductRepository.js";
import { prisma } from "../lib/prisma.js";

export class ProductRepository {
  async getProducts() {
    //Return of products with materials and quantity
    //Prisma select take only name, price and materials props
    //Materials references a respective materials necessary to make a product
    const products = await prisma.product.findMany({
      select: {
        name: true,
        price: true,
        materials: {
          select: {
            material: { select: { name: true, stock: true } },
            quantity: true,
          },
        },
      },
    });

    if (products.length === 0) return [];

    //Transform products data in entities with Product class
    return products.map(
      (product) =>
        new Product(
          product.name,
          product.price,
          product.materials.map((material) => {
            return {
              name: material.material.name,
              stock: material.material.stock,
              quantity: material.quantity,
            };
          }),
        ),
    );
  }
}
