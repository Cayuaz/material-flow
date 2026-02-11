"use client";

import { useMaterialStore } from "@/stores/useMaterialStore";

//This hook returns a function that sends the data to the global state, which will serve as the basis for rendering the edit form.
export const useAddMaterialId = (id: string, name: string, stock: number) => {
  const { setMaterial } = useMaterialStore();

  const execute = () => {
    setMaterial({ id, name, stock });
  };

  return execute;
};
