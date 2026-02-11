"use client";

import { useProductStore } from "@/stores/useProductStore";
import UpdateProductForm from "./UpdateProductForm";

const UpdateProduct = () => {
  const { productId } = useProductStore();

  return <>{productId && <UpdateProductForm />}</>;
};

export default UpdateProduct;
