"use client";

import { useEffect, useState } from "react";
import { useFieldArray, Control, FieldErrors } from "react-hook-form";
import { X, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MaterialArraySchema,
  UpdateProductFormValidation,
} from "@/validations/schemas";
import { MaterialService } from "@/services/materialService";

type UpdateMaterialSelectorFieldProps = {
  control: Control<UpdateProductFormValidation>;
  errors: FieldErrors<UpdateProductFormValidation>;
};

export const UpdateMaterialSelectorField = ({
  control,
  errors,
}: UpdateMaterialSelectorFieldProps) => {
  const [availableMaterials, setAvailableMaterials] =
    useState<MaterialArraySchema>([]);

  //Get materials with MaterialService
  useEffect(() => {
    const fetchMaterials = async () => {
      const data = await MaterialService();
      setAvailableMaterials(data);
      console.log(data);
    };
    fetchMaterials();
  }, []);

  // It is a dinamic array that possibility to save the materials product
  //Control allows the access to main form
  const { fields, append, remove } = useFieldArray({
    control,
    name: "materials",
  });

  //State with material id
  const [selectedId, setSelectedId] = useState("");
  const [quantity, setQuantity] = useState<number>(1);

  //Add material function (add material in fields with append)
  const handleAddMaterial = () => {
    if (!selectedId || quantity <= 0) return;

    append({ materialId: selectedId, quantity: quantity });

    // CLeanup
    setSelectedId("");
    setQuantity(1);
  };

  return (
    <>
      {availableMaterials.length > 0 && (
        <div className="flex flex-col gap-4 w-full">
          <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider font-lato">
            Select Materials
          </label>

          {/* Select options with materials from database */}
          <div className="flex flex-col sm:flex-row gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
            <div className="flex-1">
              <Select onValueChange={setSelectedId} value={selectedId}>
                <SelectTrigger className="bg-[#1a1b1b] border-zinc-800 text-white focus:ring-0">
                  <SelectValue placeholder="Choose a material" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1b1b] border-zinc-800 text-white">
                  {availableMaterials.map((m) => (
                    <SelectItem key={m.id} value={m.id}>
                      {m.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/*Input refers to material quantity */}
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder="Qty"
              className="w-full sm:w-24 bg-[#1a1b1b] border border-zinc-800 text-white p-2 rounded-md outline-none focus:border-zinc-600 transition-all font-lato"
            />

            {/*Add material button */}
            <button
              type="button"
              onClick={handleAddMaterial}
              className="bg-zinc-100 hover:bg-white text-black p-2 rounded-md transition-colors flex items-center justify-center"
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Added materials (rendered with fields) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            {fields.map((field, index) => {
              // Search material name by field id in availableMaterials
              const materialName = availableMaterials.find(
                (m) => m.id === field.materialId,
              )?.name;

              return (
                <div
                  key={field.id}
                  className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg animate-in fade-in slide-in-from-top-2"
                >
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-bold font-lato">
                      {materialName}
                    </span>
                    <span className="text-zinc-500 text-xs tracking-widest uppercase">
                      Qty: {field.quantity}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-zinc-600 hover:text-red-400 transition-colors p-1"
                  >
                    <X size={16} />
                  </button>
                </div>
              );
            })}
          </div>

          {errors.materials && (
            <span className="text-red-400 text-xs italic">
              {errors.materials.message}
            </span>
          )}
        </div>
      )}
      {availableMaterials.length === 0 && (
        <p className="text-red-400">Failed to load available materials.</p>
      )}
    </>
  );
};
