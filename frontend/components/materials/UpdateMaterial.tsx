"use client";

import UpdateMaterialForm from "./UpdateMaterialForm";
import { useMaterialStore } from "@/stores/useMaterialStore";

//This component renders the edit material form
const UpdateMaterial = () => {
  const { material } = useMaterialStore();

  return <>{material && <UpdateMaterialForm />}</>;
};

export default UpdateMaterial;
