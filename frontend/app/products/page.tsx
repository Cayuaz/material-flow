import Products from "@/components/products/Products";
import SkeletonProducts from "@/components/products/ProductsSkeleton";
import { Suspense } from "react";

export default async function ProductsRoute() {
  return (
    <div>
      <h1 className="text-center text-white text-xl my-10 ">
        Registered products
      </h1>
      <Suspense fallback={<SkeletonProducts />}>
        <Products />
      </Suspense>
    </div>
  );
}
