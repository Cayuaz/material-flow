import { Skeleton } from "@/components/ui/skeleton";

export default function MainSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:w-4/5 gap-8 px-10 mx-auto my-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col space-y-3 bg-[#1a1b1b]/50 p-4 rounded-xl border border-zinc-800"
        >
          <Skeleton className="h-31.25 w-full rounded-xl bg-zinc-800" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-62.5 bg-zinc-800" />

            <Skeleton className="h-4 w-50 bg-zinc-800" />
          </div>

          <div className="flex justify-between items-center pt-2">
            <Skeleton className="h-8 w-20 bg-zinc-800" />
            <Skeleton className="h-8 w-8 rounded-full bg-zinc-800" />
          </div>
        </div>
      ))}
    </div>
  );
}
