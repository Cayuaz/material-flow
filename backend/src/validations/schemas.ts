import z from "zod";

const materialSchema = z.object({
  id: z.string(),
  quantity: z.number(),
});

const createProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  materials: z.array(materialSchema),
});

const updateProductShcema = createProductSchema.partial();
type UpdateProductSchema = z.infer<typeof updateProductShcema>;

export { createProductSchema, updateProductShcema, type UpdateProductSchema };
