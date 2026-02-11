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

const materialArrayShema = z.array(MaterialSchema);

const productArrayShema = z.array(productSchema);

const suggestedArraySchema = z.array(suggestedProductSchema);

const materialFormValidation = z.object({
  name: z.string().min(1),
  stock: z.coerce.number().min(1),
});

const productFormValidation = z.object({
  name: z.string().min(1),
  price: z.number().min(0.01),
  materials: z
    .array(
      z.object({
        materialId: z.string().min(1),
        quantity: z.number().min(1),
      }),
    )
    .min(1),
});

type MaterialFormValidation = z.infer<typeof materialFormValidation>;
type ProductFormValidation = z.infer<typeof productFormValidation>;
type MaterialArraySchema = z.infer<typeof materialArrayShema>;

export {
  productArrayShema,
  materialArrayShema,
  suggestedArraySchema,
  materialFormValidation,
  productFormValidation,
  type MaterialFormValidation,
  type ProductFormValidation,
  type MaterialArraySchema,
};
