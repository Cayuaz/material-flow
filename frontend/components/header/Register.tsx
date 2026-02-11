"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth <= 650) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <span className="text-base  hover:cursor-pointer hover:text-[#171717]">
          Register
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#1a1b1b] border-black">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-white">
            Create new
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-black" />
          <DropdownMenuItem className="hover:bg-none">
            <Link
              href={"/products/register"}
              className="hover:font-semibold transition-colors text-white"
            >
              Product
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href={"/materials/register"}
              className="hover:font-semibold transition-colors text-white "
            >
              Material
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/* <DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuGroup> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Register;
