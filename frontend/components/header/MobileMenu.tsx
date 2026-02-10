"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  //SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import RegisterMobile from "./RegisterMobile";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth > 650) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sm:hidden absolute left-5 top-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen} modal>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="w-full">
          <SheetTitle />
          <SheetHeader>
            {" "}
            <div className="flex flex-col gap-4 text-white">
              {" "}
              <SheetClose asChild>
                <Link
                  href={"/products"}
                  className="hover:font-semibold transition-colors text-white text-base"
                >
                  Products
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"/materials"}
                  className="hover:font-semibold transition-colors text-white text-base"
                >
                  Materials
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={"/suggestion"}
                  className="hover:font-semibold transition-colors text-white text-base"
                >
                  Suggestion
                </Link>
              </SheetClose>
              <RegisterMobile />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
