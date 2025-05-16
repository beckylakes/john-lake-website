"use client";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-16 md:w-20">
          <Image
            src="/assets/logo.svg"
            alt="Energy Logo"
            width={0}
            height={0}
            className="w-full h-auto"
            priority
          />
        </Link>

        {/* Desktop Nav (hidden on mobile, shown on md screens and up) */}
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems/>
        </nav>

        {/* Mobile Menu Button (shown on mobile, hidden on md screens and up) */}
        <div className="flex md:hidden w-32 justify-end gap-3">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;