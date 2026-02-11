"use server";

import { apiFetch } from "@/lib/api";
import { MaterialFormValidation } from "@/validations/schemas";
import { revalidatePath } from "next/cache";

export const CreateMaterialService = async (data: MaterialFormValidation) => {
  const result = await apiFetch("/materials", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (result) revalidatePath("/materials");
  return result;
};
