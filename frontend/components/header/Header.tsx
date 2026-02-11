import Image from "next/image";
import Link from "next/link";
import Register from "./Register";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="py-6 flex flex-col items-center justify-center gap-8 bg-[#2b323f] text-white w-full px-4 relative">
      <Image
        src={"/app-logo.svg"}
        alt="Website logo"
        width={100}
        height={100}
      />
      <nav className=" justify-center items-center hidden sm:flex">
        <ul className="flex gap-6">
          <li className="hover:text-[#171717] transition-colors ">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="hover:text-[#171717] transition-colors">
            <Link href={"/materials"}>Materials</Link>
          </li>
          <li className="hover:text-[#171717] transition-colors">
            <Link href={"/suggestion"}>Suggestion</Link>
          </li>
          <Register />
        </ul>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
