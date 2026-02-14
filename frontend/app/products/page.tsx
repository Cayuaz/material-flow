import Products from "@/components/products/Products";
import MainSkeleton from "@/components/MainSkeleton";
import { Suspense } from "react";
import UpdateProduct from "@/components/products/UpdateProduct";

export default async function ProductsRoute() {
  return (
    <div>
      <h1 className="text-center text-white text-xl my-15 uppercase font-bold tracking-wide">
        Registered products
      </h1>
      <Suspense fallback={<MainSkeleton />}>
        <Products />
      </Suspense>
      <UpdateProduct />
    </div>
  );
}
