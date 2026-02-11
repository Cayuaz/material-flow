import ErrorGetData from "../Error";
import { MaterialService } from "@/services/materialService";
import { EditAndTrash } from "../EditAndTrash";

const Materials = async () => {
  const materials = await MaterialService();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-4/5 gap-8 px-10 mx-auto my-4 font-lato">
        {materials.length > 0 &&
          materials.map((material) => (
            <div
              key={material.id}
              className="group relative flex justify-between gap-4 rounded-xl border border-zinc-800 bg-[#1a1b1b]/50 p-6 transition-all hover:border-zinc-700"
            >
              {/* Name and Stock */}
              <div className="flex flex-col items-start justify-between gap-2">
                <h2 className="text-lg font-bold text-white antialiased">
                  {material.name}
                </h2>
                <span className="text-sm font-semibold text-zinc-400">
                  Stock: {material.stock}
                </span>
              </div>

              {/* Delete and Edit */}
              <EditAndTrash
                id={material.id}
                name={material.name}
                stock={material.stock}
                ProductOrMaterial="material"
              />
            </div>
          ))}
      </div>
      {materials.length === 0 && <ErrorGetData msg="materials" />}
    </>
  );
};

export default Materials;
