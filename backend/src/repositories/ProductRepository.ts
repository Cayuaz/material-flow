import { Decimal } from "@prisma/client/runtime/client";
import { Product } from "../entities/Product.js";
// import type { IProductRepository } from "./IProductRepository.js";
import { prisma } from "../lib/prisma.js";
import type {
  CreateProductSchema,
  UpdateProductSchema,
} from "../validations/schemas.js";
import type { IProductRepository } from "./IProductRepository.js";

export class ProductRepository implements IProductRepository {
  //This method returns all products with materials and quantity
  async getProducts() {
    //Prisma select take only name, price and materials props
    //Materials references a respective materials necessary to make a product
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        materials: {
          select: {
            material: true,
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
              id: material.material.id,
              name: material.material.name,
              stock: material.material.stock,
              quantity: material.quantity,
            };
          }),
          product.id,
        ),
    );
  }

  //This method creates a new product and a new line in ProductMaterial table
  async createProduct(product: CreateProductSchema) {
    //It connects materials data id with the materials database id
    return await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        materials: {
          create: product.materials!.map((m) => ({
            quantity: m.quantity,
            material: { connect: { id: m.materialId! } },
          })),
        },
      },
    });
  }
  //This method updates some prop (name, price and materials) of a product
  async updateProduct(id: string, productData: UpdateProductSchema) {
    //The materials logic is the same of createProduct method, if materials exist it connect new materials product id with the materials database id, but it delete all old materials before do this
    return await prisma.product.update({
      where: { id },
      data: {
        ...(productData.name && { name: productData.name }),
        ...(productData.price && { price: Decimal(productData.price) }),
        ...(productData.materials.length > 0 && {
          materials: {
            deleteMany: {},
            create: productData.materials.map((m) => ({
              quantity: m.quantity,
              material: { connect: { id: m.materialId } },
            })),
          },
        }),
      },
    });
  }
  //This method deletes a product
  async deleteProduct(id: string) {
    return await prisma.product.delete({ where: { id } });
  }
  //
  async getProductsOrderedByPrice() {
    const products = await prisma.product.findMany({
      orderBy: { price: "desc" },
      select: {
        id: true,
        name: true,
        price: true,
        materials: {
          select: {
            quantity: true,
            material: { select: { id: true, name: true, stock: true } },
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
          product.materials.map((m) => ({
            id: m.material.id,
            name: m.material.name,
            stock: m.material.stock,
            quantity: m.quantity,
          })),
          product.id,
        ),
    );
  }
}
