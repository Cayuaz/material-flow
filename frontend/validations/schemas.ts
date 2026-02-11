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

const MaterialSchema = z.object({
  id: z.string(),
  name: z.string(),
  stock: z.number(),
});

const suggestedProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  suggestedQuantity: z.number(),
});

const MaterialArrayShema = z.array(MaterialSchema);

const productArrayShema = z.array(productSchema);

const suggestedArraySchema = z.array(suggestedProductSchema);

export { productArrayShema, MaterialArrayShema, suggestedArraySchema };
