import { apiFetch } from "@/lib/api";
import { suggestedArraySchema } from "@/validations/schemas";

export const suggestionService = async () => {
  const products = await apiFetch("/products/suggestion");

  const { success, data } = suggestedArraySchema.safeParse(products);

  if (!success) return [];

  return data;
};
