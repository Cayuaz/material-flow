"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorForm from "../ErrorForm";
import { MaterialSelectorField } from "./MaterialSelectorField";
import {
  ProductFormValidation,
  productFormValidation,
} from "@/validations/schemas";
import { CreateProductService } from "@/services/createProductService";
import { useState } from "react";

const CreateProductForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ProductFormValidation>({
    resolver: zodResolver(productFormValidation),
    defaultValues: {
      name: "",
      price: 0,
      materials: [],
    },
  });

  //State to ErrorForm component
  const [response, setResponse] = useState("");

  const onSubmit = async (data: ProductFormValidation) => {
    const result = await CreateProductService(data);

    if (result) {
      setResponse("ok");
    } else {
      setResponse("notOkay");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 bg-[#1a1b1b]/50 my-10 w-full max-w-lg mx-auto p-8 border border-zinc-800 rounded-xl font-lato shadow-2xl"
      >
        <h2 className="text-white text-xl font-bold border-b border-zinc-800 pb-4 mb-2">
          Register New Product
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
            type="number"
            {...register("price", { valueAsNumber: true })}
            placeholder="R$100.00"
            className="bg-zinc-900/50 border border-zinc-800 text-white p-3 rounded-lg outline-none focus:border-zinc-600 transition-all placeholder:text-zinc-700"
          />
          {errors.price && (
            <span className="text-red-400 text-xs italic">
              {errors.price.message}
            </span>
          )}
        </div>

        {/*Materials selector component */}
        <MaterialSelectorField control={control} errors={errors} />

        {/* Send button */}
        <button
          type="submit"
          className="mt-4 bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors uppercase text-sm tracking-widest"
        >
          {!isSubmitting ? "Save Material" : "Loading..."}
        </button>
      </form>
      {/* Feedback Toasts */}
      {/* If request successfully*/}
      {response === "ok" && (
        <ErrorForm
          message="
          Product created successfully."
          isOk={true}
          setResponse={setResponse}
        />
      )}
      {/* If request not successfully */}
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
