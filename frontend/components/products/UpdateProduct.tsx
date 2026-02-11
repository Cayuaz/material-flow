"use client";

import { useProductStore } from "@/stores/useProductStore";
import UpdateProductForm from "./UpdateProductForm";

const UpdateProduct = () => {
  const { product } = useProductStore();

  return <>{product && <UpdateProductForm />}</>;
};

export default UpdateProduct;
