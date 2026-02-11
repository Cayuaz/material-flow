import { apiFetch } from "@/lib/api";
import { MaterialArrayShema } from "@/validations/schemas";

export const MaterialService = async () => {
  const materials = await apiFetch("/materials");

  const { success, data } = MaterialArrayShema.safeParse(materials);

  console.log(materials);
  console.log(success);

  if (!success) return [];

  return data;
};
