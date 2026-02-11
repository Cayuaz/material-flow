import { apiFetch } from "@/lib/api";
import { productArrayShema } from "@/validations/schemas";

export const productService = async () => {
  const products = await apiFetch("/products");

  const { success, data } = productArrayShema.safeParse(products);

  if (!success) return [];

  return data;
};
