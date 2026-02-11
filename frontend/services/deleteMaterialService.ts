"use server";

import { apiFetch } from "@/lib/api";
import { revalidatePath } from "next/cache";

export const DeleteMaterialService = async (id: string) => {
  const result = await apiFetch(`/materials/${id}`, {
    method: "DELETE",
  });

  if (result) {
    revalidatePath("/materials");
    return { success: true };
  } else {
    return { success: false };
  }
};
