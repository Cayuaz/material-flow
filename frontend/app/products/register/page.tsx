import CreateProductForm from "@/components/products/CreateProductForm";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Register New Product",
  description: "Add new items to your production system.",
};

export default function RegisterProduct() {
  return (
    <div className="px-8">
      <h1 className="text-center text-white text-xl my-10 ">
        Register new product
      </h1>
      <CreateProductForm />{" "}
    </div>
  );
}
