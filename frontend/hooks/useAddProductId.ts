"use client";

import { useProductStore } from "@/stores/useProductStore";

export const useAddProductId = (id: string) => {
  const { setProductId } = useProductStore();

  const execute = () => {
    setProductId(id);
  };

  return execute;
};
