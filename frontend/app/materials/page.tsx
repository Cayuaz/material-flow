import MainSkeleton from "@/components/MainSkeleton";
import Materials from "@/components/materials/Materials";
import UpdateMaterial from "@/components/materials/UpdateMaterial";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materials Inventory",
  description:
    "Monitor raw material stock levels and manage inventory inputs/outputs.",
};

export default async function MaterialsRoute() {
  return (
    <div>
      <h1 className="text-center text-white text-xl my-15 uppercase font-bold tracking-wide">
        Registered materials
      </h1>
      <Suspense fallback={<MainSkeleton />}>
        <Materials />
      </Suspense>
      <UpdateMaterial />
    </div>
  );
}
