"use client";

import { useProductStore } from "@/stores/useProductStore";

export const useAddProductId = (id: string, name: string, price: number) => {
  const { setProduct } = useProductStore();

  const execute = () => {
    setProduct({ id, name, price });
  };

  return execute;
};
