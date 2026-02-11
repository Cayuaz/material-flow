import CreateMaterialForm from "@/components/materials/CreateMaterialForm";

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
