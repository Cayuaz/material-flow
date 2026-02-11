"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorForm from "../ErrorForm";
import { UpdateMaterialSelectorField } from "./UpdateMaterialSelectorField";
import {
  updateProductFormValidation,
  UpdateProductFormValidation,
} from "@/validations/schemas";

import { useState } from "react";
import { X } from "lucide-react";
import { useProductStore } from "@/stores/useProductStore";
import { UpdateProductService } from "@/services/UpdateProductService";

const UpdateProductForm = () => {
  const { product, setProduct } = useProductStore();
  const [response, setResponse] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UpdateProductFormValidation>({
    resolver: zodResolver(updateProductFormValidation),
    defaultValues: {
      name: product!.name,
      price: product!.price,
      materials: [],
    },
  });

  const onSubmit = async (data: UpdateProductFormValidation) => {
    const result = await UpdateProductService(product!.id, data);

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
              onClick={() => setProduct(null)}
              className="text-zinc-500 hover:text-white transition-colors p-1 rounded-md hover:bg-zinc-800"
            >
              <X size={24} />
            </button>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
              Product Name
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

          {/* Price */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
              Price
            </label>
            <input
              type="number"
              step="00.1"
              {...register("price", { valueAsNumber: true })}
              placeholder="0.00"
              className="bg-zinc-900/50 border border-zinc-800 text-white p-3 rounded-lg outline-none focus:border-zinc-600 transition-all placeholder:text-zinc-700"
            />
            {errors.price && (
              <span className="text-red-400 text-xs italic">
                {errors.price.message}
              </span>
            )}
          </div>

          {/* Seletor de Materiais */}
          {/* Passei 'register' e 'availableMaterials' pois o componente filho pode precisar, ajuste conforme a props dele */}
          <UpdateMaterialSelectorField control={control} errors={errors} />

          {/* Botão de Salvar */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors uppercase text-sm tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Saving Changes..." : "Save Changes"}
          </button>
        </form>

        {/* Toasts de Feedback (Posicionados Absolute ou Fixed dentro do Overlay) */}
        {response === "ok" && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <ErrorForm
              message="Product updated successfully."
              isOk={true}
              setResponse={setResponse}
            />
          </div>
        )}
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

export default UpdateProductForm;
