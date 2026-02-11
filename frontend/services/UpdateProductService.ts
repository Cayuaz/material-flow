"use server";

import { apiFetch } from "@/lib/api";
import { UpdateProductFormValidation } from "@/validations/schemas";
import { revalidatePath } from "next/cache";

export const UpdateProductService = async (
  id: string,
  data: UpdateProductFormValidation,
) => {
  const result = await apiFetch(`/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

  if (result) revalidatePath("/products");

  return result;
};
