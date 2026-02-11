import { apiFetch } from "@/lib/api";
import { suggestedArraySchema } from "@/validations/schemas";

export const suggestionService = async () => {
  const products = await apiFetch("/products/suggestion");

  const { success, data } = suggestedArraySchema.safeParse(products);

  console.log(products);
  console.log(success);

  if (!success) return [];

  return data;
};
