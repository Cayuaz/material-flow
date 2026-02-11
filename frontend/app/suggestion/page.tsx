import Suggestion from "@/components/products/Suggestion";
import MainSkeleton from "@/components/MainSkeleton";
import { Suspense } from "react";

export default async function ProductsRoute() {
  return (
    <div>
      <h1 className="text-center text-white text-xl my-10 ">
        Suggested products to manufacture
      </h1>
      <Suspense fallback={<MainSkeleton />}>
        <Suggestion />
      </Suspense>
    </div>
  );
}
