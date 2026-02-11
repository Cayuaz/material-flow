import { MaterialStoreSchema } from "@/validations/schemas";
import { create } from "zustand";

type MaterialStore = {
  material: MaterialStoreSchema | null;
  setMaterial: (newMaterial: MaterialStoreSchema | null) => void;
};

export const useMaterialStore = create<MaterialStore>((set) => ({
  material: null,
  setMaterial: (newMaterial: MaterialStoreSchema | null) =>
    set({ material: newMaterial }),
}));
