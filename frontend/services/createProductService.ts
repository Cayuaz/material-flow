import { apiFetch } from "@/lib/api";
import { ProductFormValidation } from "@/validations/schemas";

export const CreateProductService = async (data: ProductFormValidation) => {
  console.log(data);
  const result = await apiFetch("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return result;
};
