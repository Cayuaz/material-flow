"use client";

import { useProductStore } from "@/stores/useProductStore";

//This hook returns a function that sends the data to the global state, which will serve as the basis for rendering the edit form.
export const useAddProductId = (id: string, name: string, price: number) => {
  const { setProduct } = useProductStore();

  const execute = () => {
    setProduct({ id, name, price });
  };

  return execute;
};
