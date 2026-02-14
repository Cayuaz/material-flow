import Image from "next/image";
import Link from "next/link";
import Register from "./Register";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="py-6 flex flex-col items-center justify-center gap-10 bg-[#2b323f] text-white w-full px-4 relative tracking-wide border-b-2 border-b-zinc-700">
      <Image
        src={"/app-logo.svg"}
        alt="Website logo"
        width={100}
        height={100}
      />
      <nav className=" justify-center items-center hidden sm:flex text-lg">
        <ul className="flex gap-8">
          <li className="hover:text-[#171717] transition-colors ">
            <Link href={"/"}>Home</Link>
          </li>
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
