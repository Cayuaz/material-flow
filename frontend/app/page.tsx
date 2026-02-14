import {
  Package,
  Hammer,
  Lightbulb,
  PlusCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white font-lato">
      <div className="max-w-6xl mx-auto px-10 py-20">
        <header className="mb-20">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-6 bg-linear-to-r from-white to-zinc-600 bg-clip-text text-transparent ">
            Welcome to Material Flow
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A streamlined management system for your production pipeline.
            Organize materials, track inventory, and optimize your entire
            manufacturing process with precision.
          </p>
        </header>

        {/* Cards with links */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Products Section */}
          <Link
            href="/products"
            className="group p-8 bg-[#1a1b1b]/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <Package
                className="text-zinc-500 group-hover:text-white transition-colors"
                size={28}
              />
              <h2 className="text-2xl font-bold">Products</h2>
            </div>
            <p className="text-zinc-500 mb-6 leading-relaxed">
              View your catalog, manufacturing costs, and the exact material
              composition for each garment.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
              Go to catalog <ArrowRight size={16} />
            </div>
          </Link>

          {/* Materials Section */}
          <Link
            href="/materials"
            className="group p-8 bg-[#1a1b1b]/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <Hammer
                className="text-zinc-500 group-hover:text-white transition-colors"
                size={28}
              />
              <h2 className="text-2xl font-bold">Materials</h2>
            </div>
            <p className="text-zinc-500 mb-6 leading-relaxed">
              Monitor inventory for fabrics and hardware. Ensure you never run
              out of raw materials.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
              Manage stock <ArrowRight size={16} />
            </div>
          </Link>

          {/* Suggestion Section */}
          <Link
            href="/suggestion"
            className="group p-8 bg-[#1a1b1b]/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <Lightbulb
                className="text-zinc-500 group-hover:text-white transition-colors"
                size={28}
              />
              <h2 className="text-2xl font-bold">Suggestion</h2>
            </div>
            <p className="text-zinc-500 leading-relaxed">
              Manufacturing insights based on your current stock. Discover what
              can be produced right now.
            </p>
          </Link>

          {/* Dual Register Section */}
          <div className="p-8 bg-[#1a1b1b]/50 border border-zinc-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <PlusCircle className="text-zinc-400" size={28} />
                <h2 className="text-2xl font-bold text-white">Register</h2>
              </div>
              <p className="text-zinc-500 mb-6 leading-relaxed">
                Add new items to the system. Choose what you want to register:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/register"
                className="flex-1 text-center py-3 bg-white text-black text-sm font-bold uppercase tracking-tighter rounded-lg hover:bg-zinc-200 transition-colors"
              >
                New Product
              </Link>
              <Link
                href="/materials/register"
                className="flex-1 text-center py-3 border border-zinc-700 text-white text-sm font-bold uppercase tracking-tighter rounded-lg hover:bg-zinc-800 transition-colors"
              >
                New Material
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
