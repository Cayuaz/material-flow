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

const productStoreSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
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

const createMaterialSchema = z.object({
  materialId: z.string().min(1),
  quantity: z.number().min(1),
});

const productFormValidation = z.object({
  name: z.string().min(1),
  price: z.number().min(0.01),
  materials: z.array(createMaterialSchema).min(1),
});
const updateProductFormValidation = z
  .object({
    name: z.string().optional(),
    price: z.number().optional(),

    materials: z.array(createMaterialSchema).optional(),
  })
  .refine(
    (data) => {
      const hasName = data.name !== undefined && data.name.trim() !== "";
      const hasPrice = data.price !== undefined;

      const hasMaterials =
        data.materials !== undefined && data.materials.length > 0;

      return hasName || hasPrice || hasMaterials;
    },
    {
      message: "You must update at least one field to save.",
      path: ["root"],
    },
  );

const updateMaterialFormValidation = z
  .object({
    name: z.string().optional(),
    stock: z.number().optional(),
  })
  .refine(
    (data) => {
      const hasName = data.name !== undefined && data.name.trim() !== "";
      const hasPrice = data.stock !== undefined;

      return hasName || hasPrice;
    },
    {
      message: "You must update at least one field to save.",
      path: ["root"],
    },
  );

type UpdateProductFormValidation = z.infer<typeof updateProductFormValidation>;
type UpdateMaterialFormValidation = z.infer<
  typeof updateMaterialFormValidation
>;

type MaterialFormValidation = z.infer<typeof materialFormValidation>;
type ProductFormValidation = z.infer<typeof productFormValidation>;
type MaterialArraySchema = z.infer<typeof materialArrayShema>;

type ProductStoreSchema = z.infer<typeof productStoreSchema>;
type MaterialStoreSchema = z.infer<typeof MaterialSchema>;

export {
  productArrayShema,
  materialArrayShema,
  suggestedArraySchema,
  materialFormValidation,
  productFormValidation,
  updateMaterialFormValidation,
  updateProductFormValidation,
  productStoreSchema,
  type MaterialFormValidation,
  type ProductFormValidation,
  type MaterialArraySchema,
  type UpdateProductFormValidation,
  type UpdateMaterialFormValidation,
  type ProductStoreSchema,
  type MaterialStoreSchema,
};
