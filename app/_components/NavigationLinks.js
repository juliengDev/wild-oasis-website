// NavigationLinks.jsx
"use client";

import Link from "next/link";

export default function NavigationLinks({
  session,
  isMobile = false,
  closeMenu = () => {},
}) {
  return (
    <ul
      className={`flex text-xl font-semibold text-primary-100 ${isMobile ? "flex-col items-center gap-8 text-2xl" : "flex-row items-center gap-16"}`}
    >
      <li>
        <Link
          href="/cabins"
          className="transition-colors hover:text-accent-400"
          onClick={isMobile ? closeMenu : undefined}
        >
          Cabins
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="transition-colors hover:text-accent-400"
          onClick={isMobile ? closeMenu : undefined}
        >
          About
        </Link>
      </li>
      <li>
        {session?.user?.image ? (
          <Link
            href="/account"
            className="flex items-center gap-4 transition-colors hover:text-accent-400"
            onClick={isMobile ? closeMenu : undefined}
          >
            <img
              className="h-8 rounded-full"
              src={session.user.image}
              alt={session.user.name}
              referrerPolicy="no-referrer"
            />
            <span>Guest area</span>
          </Link>
        ) : (
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
            onClick={isMobile ? closeMenu : undefined}
          >
            Guest area
          </Link>
        )}
      </li>
    </ul>
  );
}
