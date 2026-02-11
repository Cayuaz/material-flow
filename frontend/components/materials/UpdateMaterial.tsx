"use client";

import UpdateMaterialForm from "./UpdateMaterialForm";
import { useMaterialStore } from "@/stores/useMaterialStore";

const UpdateMaterial = () => {
  const { material } = useMaterialStore();

  return <>{material && <UpdateMaterialForm />}</>;
};

export default UpdateMaterial;
