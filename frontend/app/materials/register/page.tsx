import CreateMaterialForm from "@/components/materials/CreateMaterialForm";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Register New Material",
  description: "Add new materials to your production system.",
};

export default function RegisterMaterial() {
  return (
    <div className="px-8">
      <h1 className="text-center text-white text-xl my-10 ">
        Register new material
      </h1>
      <CreateMaterialForm />{" "}
    </div>
  );
}
