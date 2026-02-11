"use client";

import { Edit, Trash2 } from "lucide-react";
import { useAddProductId } from "@/hooks/useAddProductId"; // Ajuste o caminho
import { useAddMaterialId } from "@/hooks/useAddMaterialId";
import { toast } from "sonner";
import { DeleteProductService } from "@/services/deleteProductService";
import { DeleteMaterialService } from "@/services/deleteMaterialService";

interface EditAndTrashProps {
  id: string;
  name: string;
  price?: number;
  stock?: number;
  ProductOrMaterial: string;
}

export const EditAndTrash = ({
  id,
  name,
  price,
  stock,
  ProductOrMaterial,
}: EditAndTrashProps) => {
  const setProductId = useAddProductId(id, name, price!);
  const setMaterialId = useAddMaterialId(id, name, stock!);

  //Delete function with delete toast
  const handleDelete = () => {
    toast("Are you sure?", {
      description: `You are about to delete ${name}. This action cannot be undone.`,
      action: {
        label: "Delete",

        onClick: () => {
          const deletePromise =
            ProductOrMaterial === "product"
              ? DeleteProductService(id)
              : DeleteMaterialService(id);

          toast.promise(deletePromise, {
            loading: "Deleting product...",
            success: (data) => {
              if (data.success) {
                return `${name} has been deleted.`;
              } else {
                throw new Error();
              }
            },
            error: "Failed to delete product. Please try again.",
          });
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => console.log("Cancelled"),
      },

      actionButtonStyle: {
        backgroundColor: "#ef4444",
        color: "white",
      },
    });
  };

  return (
    <div className="flex items-center gap-4 self-end pt-2 opacity-0 transition-opacity group-hover:opacity-100">
      <button
        onClick={handleDelete}
        title="Excluir"
        className="text-zinc-500 transition-colors hover:text-red-400"
      >
        <Trash2 size={18} />
      </button>

      <button
        onClick={ProductOrMaterial === "product" ? setProductId : setMaterialId}
        title="Editar"
        className="text-zinc-500 transition-colors hover:text-white"
      >
        <Edit size={18} />
      </button>
    </div>
  );
};
