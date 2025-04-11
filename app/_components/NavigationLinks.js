// NavigationLinks.jsx
"use client";

import Link from "next/link";

export default function NavigationLinks({ session, isMobile = false, closeMenu = () => {} }) {
  // Animation delay for staggered entrance
  const getAnimationDelay = (index) => {
    if (!isMobile) return 0;
    return `${100 + (index * 50)}ms`;
  };

  const navItems = [
    { href: "/cabins", label: "Cabins" },
    { href: "/about", label: "About" },
    { 
      href: "/account", 
      label: "Guest area",
      hasImage: session?.user?.image,
      image: session?.user?.image,
      alt: session?.user?.name
    }
  ];

  return (
    <ul className={`flex ${isMobile ? "flex-col items-center gap-8 text-2xl" : "flex-row items-center gap-16"}`}>
      {navItems.map((item, index) => (
        <li 
          key={item.href}
          style={{ 
            transitionDelay: getAnimationDelay(index),
            animation: isMobile ? `fadeInUp 0.5s forwards ${getAnimationDelay(index)}` : 'none'
          }}
          className={isMobile ? "opacity-0" : ""}
        >
          {item.hasImage ? (
            <Link
              href={item.href}
              className="flex items-center gap-4 transition-all duration-300 hover:text-accent-400"
              onClick={isMobile ? closeMenu : undefined}
            >
              <img
                className="h-8 rounded-full"
                src={item.image}
                alt={item.alt}
                referrerPolicy="no-referrer"
              />
              <span>{item.label}</span>
            </Link>
          ) : (
            <Link
              href={item.href}
              className="transition-all duration-300 hover:text-accent-400"
              onClick={isMobile ? closeMenu : undefined}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}