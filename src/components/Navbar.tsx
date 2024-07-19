import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 z-[99999] px-10 py-4 md:px-32">
      <div className="flex items-center font-playfair md:justify-between">
        <img
          className="mr-auto w-40 md:mr-0 md:w-32"
          src="/logo.png"
          alt="Logo"
        />

        <Button size={"icon"} className="rounded-full text-black md:hidden">
          <AlignJustify />
        </Button>

        <ul className="hidden list-none items-center justify-between gap-x-6 text-xs text-white underline-offset-4 md:flex lg:gap-x-16 [&>li]:cursor-pointer">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">
            <a href="#menu">Menu</a>
          </li>
          <li className="hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <Button
            variant={"link"}
            className="hidden text-xs text-white lg:flex"
          >
            Sign In
          </Button>

          <Button className="shadow-btn hidden rounded-full px-6 text-xs text-black lg:flex">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
