import { apiFetch } from "@/lib/api";
import { materialArrayShema } from "@/validations/schemas";

export const MaterialService = async () => {
  const materials = await apiFetch("/materials");

  const { success, data } = materialArrayShema.safeParse(materials);

  if (!success) return [];

  return data;
};
