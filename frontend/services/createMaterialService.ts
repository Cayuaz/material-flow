import { apiFetch } from "@/lib/api";
import { MaterialFormValidation } from "@/validations/schemas";

export const CreateMaterialService = async (data: MaterialFormValidation) => {
  const result = await apiFetch("/materials", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return result;
};
