"use server";

import { apiFetch } from "@/lib/api";
import { revalidatePath } from "next/cache";

export const DeleteProductService = async (id: string) => {
  const result = await apiFetch(`/products/${id}`, {
    method: "DELETE",
  });

  if (result) {
    revalidatePath("/products");
    return { success: true };
  } else {
    return { success: false };
  }
};
