"use server";

import { apiFetch } from "@/lib/api";
import { ProductFormValidation } from "@/validations/schemas";
import { revalidatePath } from "next/cache";

export const CreateProductService = async (data: ProductFormValidation) => {
  const result = await apiFetch("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (result) revalidatePath("/products");
  return result;
};
