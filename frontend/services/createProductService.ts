import { apiFetch } from "@/lib/api";
import { ProductFormValidation } from "@/validations/schemas";

export const CreateProductService = async (data: ProductFormValidation) => {
  const result = await apiFetch("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return result;
};
