import { formPrice } from "@/lib/utils";
import { productService } from "@/services/productService";
import ErrorGetData from "../Error";
import { ProductActions } from "./ProductActions";

const Products = async () => {
  const products = await productService();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-4/5 gap-8 px-10 mx-auto my-4 font-lato">
        {products.length > 0 &&
          products.map((product) => (
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

              {/* Materials */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Materials for manufacturing:
                </h3>
                <div className="flex flex-col gap-2 py-1">
                  {product.materials.map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-zinc-700" />
                      {material.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Delete and Edit */}
              <ProductActions productId={product.id} />
            </div>
          ))}
      </div>
      {products.length === 0 && <ErrorGetData msg="products" />}
    </>
  );
};

export default Products;
