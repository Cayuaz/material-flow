import { formPrice } from "@/lib/utils";
import { Edit, Trash2 } from "lucide-react"; // Trash2 costuma ser mais moderno
import ErrorGetData from "../Error";
import { suggestionService } from "@/services/suggestionService";

const Suggestion = async () => {
  const suggestedProducts = await suggestionService();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-4/5 gap-8 px-10 mx-auto my-4 font-lato">
        {suggestedProducts.length > 0 &&
          suggestedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col gap-4 rounded-xl border border-zinc-800 bg-[#1a1b1b]/50 p-6 transition-all hover:border-zinc-700"
            >
              {/* Name and Price */}
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-bold text-white antialiased">
                  {product.name}
                </h2>
                <span className="text-sm font-semibold text-zinc-400">
                  {formPrice(Number(product.price))}
                </span>
              </div>

              {/* Separator */}
              <div className="h-px w-full bg-zinc-800" />

              <span className="text-sm font-semibold text-zinc-400">
                Quantity suggested: {product.suggestedQuantity}
              </span>

              {/* Delete and Edit */}
              <div className="flex items-center gap-4 self-end pt-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  title="Excluir"
                  className="text-zinc-500 transition-colors hover:text-red-400"
                >
                  <Trash2 size={18} />
                </button>
                <button
                  title="Editar"
                  className="text-zinc-500 transition-colors hover:text-white"
                >
                  <Edit size={18} />
                </button>
              </div>
            </div>
          ))}
      </div>
      {suggestedProducts.length === 0 && (
        <ErrorGetData msg="suggested products" />
      )}
    </>
  );
};

export default Suggestion;
