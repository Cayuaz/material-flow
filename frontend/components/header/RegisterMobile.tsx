import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";

const RegisterMobile = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className="flex flex-col items-start justify-start"
      >
        <AccordionTrigger className="pt-0 hover:font-semibold hover:no-underline transition-colors text-white text-base">
          Register
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <SheetClose asChild>
            <Link
              href={"/products/register"}
              className="hover:font-semibold transition-colors text-white text-base"
            >
              Product
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href={"/material/register"}
              className="hover:font-semibold transition-colors text-white text-base"
            >
              Material
            </Link>
          </SheetClose>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RegisterMobile;
