import { apiFetch } from "@/lib/api";
import { materialArrayShema } from "@/validations/schemas";

export const MaterialService = async () => {
  const materials = await apiFetch("/materials");

  const { success, data } = materialArrayShema.safeParse(materials);

  console.log(materials);
  console.log(success);

  if (!success) return [];

  return data;
};
