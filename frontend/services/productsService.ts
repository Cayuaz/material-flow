import { apiFetch } from "@/lib/api";
import { productArrayShema } from "@/validations/schemas";

export const productsService = async () => {
  const products = await apiFetch("/products");

  const { success, data } = productArrayShema.safeParse(products);

  console.log(products);
  console.log(success);

  if (!success) return [];

  return data;
};
