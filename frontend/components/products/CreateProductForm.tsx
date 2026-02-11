"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { useEffect, useState } from "react";
import ErrorForm from "../ErrorForm";
import { MaterialSelectorField } from "./MaterialSelectorField";
import { MaterialService } from "@/services/materialService";
import {
  type MaterialArraySchema,
  ProductFormValidation,
  productFormValidation,
} from "@/validations/schemas";
import { CreateProductService } from "@/services/createProductService";

const CreateProductForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      productFormValidation,
    ) as unknown as Resolver<ProductFormValidation>,
  });

  const [response, setResponse] = useState("");

  const onSubmit = async (data: ProductFormValidation) => {
    const result = await CreateProductService(data);

    if (result) {
      setResponse("ok");
    } else {
      setResponse("notOkay");
    }
  };

  const [availableMaterials, setAvailableMaterials] =
    useState<MaterialArraySchema>([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      const data = await MaterialService();
      setAvailableMaterials(data);
      console.log(data);
    };
    fetchMaterials();
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 bg-[#1a1b1b]/50 my-10 w-full max-w-lg mx-auto p-8 border border-zinc-800 rounded-xl font-lato shadow-2xl"
      >
        <h2 className="text-white text-xl font-bold border-b border-zinc-800 pb-4 mb-2">
          Register New Material
        </h2>

        {/* Name */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
            Product Name
          </label>
          <input
            {...register("name")}
            placeholder="T-shirt"
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
            type="string"
            {...register("price")}
            placeholder="R$100.00"
            className="bg-zinc-900/50 border border-zinc-800 text-white p-3 rounded-lg outline-none focus:border-zinc-600 transition-all placeholder:text-zinc-700"
          />
          {errors.price && (
            <span className="text-red-400 text-xs italic">
              {errors.price.message}
            </span>
          )}
        </div>

        {availableMaterials.length > 0 && (
          <MaterialSelectorField
            control={control}
            register={register}
            errors={errors}
            availableMaterials={availableMaterials}
          />
        )}

        {/* Botão de Envio */}
        <button
          type="submit"
          className="mt-4 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors uppercase text-sm tracking-widest"
        >
          Save Material
        </button>
      </form>
      {response === "ok" && (
        <ErrorForm
          message="
          Product created successfully."
          isOk={true}
          setResponse={setResponse}
        />
      )}
      {response === "notOkay" && (
        <ErrorForm
          message="The product could not be created. Please try again later."
          isOk={false}
          setResponse={setResponse}
        />
      )}
    </>
  );
};

export default CreateProductForm;
