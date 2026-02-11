"use client";

import { useProductStore } from "@/stores/useProductStore";
import UpdateProductForm from "./UpdateProductForm";

//This component renders the edit product form
const UpdateProduct = () => {
  const { product } = useProductStore();

  return <>{product && <UpdateProductForm />}</>;
};

export default UpdateProduct;
