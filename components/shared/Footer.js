import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-2 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width="50"
            height="50"
          />
        </Link>
        <p>&#169; 2025 John Lake. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;