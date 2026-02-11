import CreateProductForm from "@/components/products/CreateProductForm";

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
