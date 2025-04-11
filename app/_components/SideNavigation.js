"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-t bg-primary-950 text-primary-200 md:relative md:h-screen md:w-full md:border-r md:border-t-0 md:bg-transparent">
      <ul className="flex justify-around gap-2 text-sm font-medium md:flex-col md:justify-start md:gap-2 md:p-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 rounded px-3 py-2 md:flex-row md:justify-start md:px-4 md:py-3 ${
                  isActive
                    ? "bg-primary-900 text-primary-100"
                    : "hover:bg-primary-900 hover:text-primary-100"
                }`}
              >
                {link.icon}
                <span className="text-xs md:text-sm">{link.name}</span>
              </Link>
            </li>
          );
        })}
        {/* Sign out only on desktop */}
        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
