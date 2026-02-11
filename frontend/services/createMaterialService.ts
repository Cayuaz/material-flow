import { apiFetch } from "@/lib/api";
import { MaterialFormValidation } from "@/validations/schemas";

export const CreateMaterialService = async (data: MaterialFormValidation) => {
  console.log(data);
  const result = await apiFetch("/ml", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return result;
};
