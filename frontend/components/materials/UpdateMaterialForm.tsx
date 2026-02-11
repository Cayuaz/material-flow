"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorForm from "../ErrorForm";
import {
  updateMaterialFormValidation,
  UpdateMaterialFormValidation,
} from "@/validations/schemas";

import { useState } from "react";
import { X } from "lucide-react";

import { useMaterialStore } from "@/stores/useMaterialStore";
import { UpdateMaterialService } from "@/services/UpdateMaterialService";

const UpdateMaterialForm = () => {
  const { material, setMaterial } = useMaterialStore();
  const [response, setResponse] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UpdateMaterialFormValidation>({
    resolver: zodResolver(updateMaterialFormValidation),
    defaultValues: {
      name: material!.name,
      stock: material!.stock,
    },
  });

  const onSubmit = async (data: UpdateMaterialFormValidation) => {
    const result = await UpdateMaterialService(material!.id, data);

    if (result) {
      setResponse("ok");
    } else {
      setResponse("notOkay");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 bg-[#1a1b1b] w-full p-8 border border-zinc-800 rounded-xl font-lato shadow-2xl animate-in zoom-in-95 duration-300"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-2">
            <h2 className="text-white text-xl font-bold">Edit Product</h2>

            {/*Close button */}
            <button
              type="button"
              onClick={() => setMaterial(null)}
              className="text-zinc-500 hover:text-white transition-colors p-1 rounded-md hover:bg-zinc-800"
            >
              <X size={24} />
            </button>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
              Material Name
            </label>
            <input
              {...register("name")}
              placeholder="Ex: Oversized Tee"
              className="bg-zinc-900/50 border border-zinc-800 text-white p-3 rounded-lg outline-none focus:border-zinc-600 transition-all placeholder:text-zinc-700"
            />
            {errors.name && (
              <span className="text-red-400 text-xs italic">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Stock */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
              Price
            </label>
            <input
              type="number"
              {...register("stock", { valueAsNumber: true })}
              placeholder="0"
              className="bg-zinc-900/50 border border-zinc-800 text-white p-3 rounded-lg outline-none focus:border-zinc-600 transition-all placeholder:text-zinc-700"
            />
            {errors.stock && (
              <span className="text-red-400 text-xs italic">
                {errors.stock.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors uppercase text-sm tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Saving Changes..." : "Save Changes"}
          </button>
        </form>

        {/* Feedback toasts */}
        {/* If request successfully*/}
        {response === "ok" && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <ErrorForm
              message="Product updated successfully."
              isOk={true}
              setResponse={setResponse}
            />
          </div>
        )}
        {/* If request not successfully*/}
        {response === "notOkay" && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <ErrorForm
              message="Failed to update product."
              isOk={false}
              setResponse={setResponse}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateMaterialForm;
