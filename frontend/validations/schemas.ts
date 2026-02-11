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
    // Redefina os campos como opcionais explicitamente para ter controle total
    name: z.string().optional(),
    price: z.number().min(0.01).optional(),

    // Aqui está o pulo do gato: Permite array vazio ou undefined no início,
    // mas se tiver dados, valida o conteúdo.
    materials: z.array(createMaterialSchema).optional(),
  })
  .refine(
    (data) => {
      // Sua lógica de "pelo menos um" continua válida aqui
      const hasName = data.name !== undefined && data.name.trim() !== "";
      const hasPrice = data.price !== undefined;

      // Verifique se materials existe E se tem itens (se essa for a regra de negócio para update)
      // Se a regra for "pode enviar lista vazia para limpar", ajuste a lógica.
      // Assumindo que update de materiais é substituir a lista:
      const hasMaterials =
        data.materials !== undefined && data.materials.length > 0;

      return hasName || hasPrice || hasMaterials;
    },
    {
      message: "You must update at least one field to save.",
      path: ["root"],
    },
  );

type UpdateProductFormValidation = z.infer<typeof updateProductFormValidation>;

type MaterialFormValidation = z.infer<typeof materialFormValidation>;
type ProductFormValidation = z.infer<typeof productFormValidation>;
type MaterialArraySchema = z.infer<typeof materialArrayShema>;

export {
  productArrayShema,
  materialArrayShema,
  suggestedArraySchema,
  materialFormValidation,
  productFormValidation,
  updateProductFormValidation,
  type MaterialFormValidation,
  type ProductFormValidation,
  type MaterialArraySchema,
  type UpdateProductFormValidation,
};
