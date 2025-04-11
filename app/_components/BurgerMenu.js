// BurgerMenu.jsx
"use client";

import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import { Menu, X } from "lucide-react";

export default function BurgerMenu({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Burger menu button (visible on mobile) */}
      <button
        className="z-20 block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation (hidden on mobile) */}
      <nav className="z-10 hidden md:block">
        <NavigationLinks session={session} />
      </nav>

      {/* Mobile navigation (shown when menu is open) */}
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-95">
          <div className="flex h-full flex-col items-center justify-center">
            <nav className="text-center">
              <NavigationLinks
                session={session}
                isMobile={true}
                closeMenu={() => setIsOpen(false)}
              />
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
