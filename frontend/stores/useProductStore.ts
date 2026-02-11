// import { UpdateProduct } from "@/validations/schemas";
import { create } from "zustand";

type ProductStore = {
  productId: string | null;
  setProductId: (newId: string | null) => void;
  //   product: UpdateProduct | null;
  //   setProduct: (newProduct: UpdateProduct | null) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  productId: null,
  setProductId: (newId: string | null) => set({ productId: newId }),
  //   product: null,
  //   setProduct: (newProduct: UpdateProduct | null) =>
  //     set({ product: newProduct }),
}));
