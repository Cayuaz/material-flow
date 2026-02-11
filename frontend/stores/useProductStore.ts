// import { UpdateProduct } from "@/validations/schemas";
import { ProductStoreSchema } from "@/validations/schemas";
import { create } from "zustand";

type ProductStore = {
  product: ProductStoreSchema | null;
  setProduct: (product: ProductStoreSchema | null) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  product: null,
  setProduct: (newProduct: ProductStoreSchema | null) =>
    set({ product: newProduct }),
}));
