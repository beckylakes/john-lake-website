"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="m-5 flex w-full flex-col items-start gap-4 md:flex-row">
      {headerLinks.map((link) => {
        const isActive =
          pathname === link.route ||
          link.children?.some((child) => pathname === child.route);

        return (
          <li key={link.label} className="group relative">
            {/* Parent item */}
            {link.children ? (
              <span
                className={`inline-flex items-center gap-1 whitespace-nowrap px-2 py-2 cursor-default ${
                  isActive ? "text-primary-500" : ""
                }`}
              >
                {link.label}
                <ChevronDown size={16} />
              </span>
            ) : (
              <Link
                href={link.route}
                className={`inline-flex items-center gap-1 whitespace-nowrap px-2 py-2 ${
                  isActive ? "text-primary-500" : ""
                }`}
              >
                {link.label}
              </Link>
            )}

            {/* Dropdown */}
            {link.children && (
              <div className="absolute left-0 top-full z-50 hidden pt-1 group-hover:block">
                <ul className="min-w-[220px] rounded-md border bg-white py-2 shadow-lg">
                  {link.children.map((child) => {
                    const isChildActive = pathname === child.route;

                    return (
                      <li key={child.route}>
                        <Link
                          href={child.route}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                            isChildActive ? "text-primary-500" : ""
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;