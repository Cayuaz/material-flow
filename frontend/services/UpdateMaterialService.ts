"use server";

import { apiFetch } from "@/lib/api";
import { UpdateMaterialFormValidation } from "@/validations/schemas";
import { revalidatePath } from "next/cache";

export const UpdateMaterialService = async (
  id: string,
  data: UpdateMaterialFormValidation,
) => {
  console.log(data);
  const result = await apiFetch(`/materials/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

  if (result) revalidatePath("/products");

  return result;
};
