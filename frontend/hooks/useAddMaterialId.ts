"use client";

import { useMaterialStore } from "@/stores/useMaterialStore";

export const useAddMaterialId = (id: string, name: string, stock: number) => {
  const { setMaterial } = useMaterialStore();

  const execute = () => {
    setMaterial({ id, name, stock });
  };

  return execute;
};
