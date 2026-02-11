import MainSkeleton from "@/components/MainSkeleton";
import Materials from "@/components/materials/Materials";
import UpdateMaterial from "@/components/materials/UpdateMaterial";
import { Suspense } from "react";

export default async function MaterialsRoute() {
  return (
    <div>
      <h1 className="text-center text-white text-xl my-10 ">
        Registered materials
      </h1>
      <Suspense fallback={<MainSkeleton />}>
        <Materials />
      </Suspense>
      <UpdateMaterial />
    </div>
  );
}
