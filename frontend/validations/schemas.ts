import z from "zod";

const materialsProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  stock: z.number(),
  quantity: z.number(),
});

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  materials: z.array(materialsProductSchema),
});

const productArrayShema = z.array(productSchema);

export { productArrayShema };
