import { Decimal } from "@prisma/client/runtime/client";
import { Product } from "../entities/Product.js";
// import type { IProductRepository } from "./IProductRepository.js";
import { prisma } from "../lib/prisma.js";
import type { UpdateProductSchema } from "../validations/schemas.js";
import type { IProductRepository } from "./IProductRepository.js";

export class ProductRepository implements IProductRepository {
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

  async createProduct(product: Product) {
    //This method creates a new product and a new line in ProductMaterial table
    //It connects materials data id with the materials database id
    return await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        materials: {
          create: product.materials!.map((m) => ({
            quantity: m.quantity,
            material: { connect: { id: m.id! } },
          })),
        },
      },
    });
  }
  //This method updates some prop (name, price and materials) of a product
  //The materials logic is the same of createProduct method, if materials exist it connect new materials product id with the materials database id, but it delete all old materials before do this
  async updateProduct(id: string, productData: UpdateProductSchema) {
    return await prisma.product.update({
      where: { id },
      data: {
        ...(productData.name && { name: productData.name }),
        ...(productData.price && { price: Decimal(productData.price) }),
        ...(productData.materials && {
          materials: {
            deleteMany: {},
            create: productData.materials.map((m) => ({
              quantity: m.quantity,
              material: { connect: { id: m.id } },
            })),
          },
        }),
      },
    });
  }
  async deleteProduct(id: string) {
    return await prisma.product.delete({ where: { id } });
  }
}
