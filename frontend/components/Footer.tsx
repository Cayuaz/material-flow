export const Footer = () => {
  return (
    <footer className="w-full mx-auto px-10 py-12 mt-10 border-t border-zinc-900 font-lato bg-black">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-white font-bold tracking-tighter text-lg">
            Material Flow
          </span>
          <p className="text-zinc-500 text-sm">
            Production Management & Inventory Control System.
          </p>
        </div>

        {/* Status and Copyright */}
        <div className="flex flex-col md:items-end gap-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
              System Operational
            </span>
          </div>
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-medium">
            © 2026 Material Flow • All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
