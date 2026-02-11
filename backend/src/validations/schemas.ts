import z from "zod";

const materialSchema = z.object({
  materialId: z.string(),
  quantity: z.number(),
});

const createProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  materials: z.array(materialSchema),
});

const createMaterialShcema = z.object({
  name: z.string(),
  stock: z.number(),
});

const updateProductShcema = z.object({
  name: z.string().optional(),
  price: z.number().optional(),
  materials: z.array(materialSchema),
});
const updateMaterialSchema = createMaterialShcema.partial();

type UpdateProductSchema = z.infer<typeof updateProductShcema>;
type UpdateMaterialSchema = z.infer<typeof updateMaterialSchema>;
type CreateProductSchema = z.infer<typeof createProductSchema>;

export {
  createProductSchema,
  createMaterialShcema,
  updateProductShcema,
  updateMaterialSchema,
  type UpdateProductSchema,
  type UpdateMaterialSchema,
  type CreateProductSchema,
};
