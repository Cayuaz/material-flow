import Suggestion from "@/components/products/Suggestion";
import MainSkeleton from "@/components/MainSkeleton";
import { Suspense } from "react";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Production Suggestion",
  description:
    "AI-powered analysis to determine maximum production capacity based on current stock bottlenecks.",
};

export default async function ProductsRoute() {
  return (
    <div>
      <h1 className="text-center text-white text-xl my-15 uppercase font-bold tracking-wide px-4 md:px-10">
        Suggested products to manufacture
      </h1>
      <p className="text-justify text-zinc-400 text-base w-4/5 mx-auto md:px-10 ">
        Based on the current product inventory, these are the suggested products
        to be produced, taking into account the most expensive products to the
        cheapest until the inventory is depleted.
      </p>
      <Suspense fallback={<MainSkeleton />}>
        <Suggestion />
      </Suspense>
    </div>
  );
}
