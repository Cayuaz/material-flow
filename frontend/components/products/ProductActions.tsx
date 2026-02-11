"use client"; // 👈 OBRIGATÓRIO para usar hooks

import { Edit, Trash2 } from "lucide-react";
import { useAddProductId } from "@/hooks/useAddProductId"; // Ajuste o caminho

interface ProductActionsProps {
  productId: string;
}

export const ProductActions = ({ productId }: ProductActionsProps) => {
  // Chamamos o hook passando o ID deste produto específico
  const setProductId = useAddProductId(productId);

  return (
    <div className="flex items-center gap-4 self-end pt-2 opacity-0 transition-opacity group-hover:opacity-100">
      <button
        onClick={setProductId} // Ao clicar, joga o ID no Zustand
        title="Excluir"
        className="text-zinc-500 transition-colors hover:text-red-400"
      >
        <Trash2 size={18} />
      </button>

      <button
        onClick={setProductId} // Ajuste aqui se a lógica de editar for diferente
        title="Editar"
        className="text-zinc-500 transition-colors hover:text-white"
      >
        <Edit size={18} />
      </button>
    </div>
  );
};
