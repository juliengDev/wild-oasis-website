// BurgerMenu.jsx
"use client";

import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import { Menu, X } from "lucide-react";

export default function BurgerMenu({ session }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match this with the CSS transition duration
    }
  };

  return (
    <>
      {/* Burger menu button (visible on mobile) */}
      <button
        className="z-50 flex h-12 w-12 items-center justify-center md:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="burger-icon-wrapper relative h-6 w-6">
          {isOpen ? (
            // Croix (X) - deux lignes distinctes
            <>
              <span className="absolute left-0 top-3 h-0.5 w-6 rotate-45 transform bg-current"></span>
              <span className="absolute left-0 top-3 h-0.5 w-6 -rotate-45 transform bg-current"></span>
            </>
          ) : (
            // Hamburger - trois lignes horizontales
            <>
              <span className="absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300"></span>
              <span className="absolute left-0 top-3 h-0.5 w-6 bg-current transition-all duration-300"></span>
              <span className="absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-all duration-300"></span>
            </>
          )}
        </div>
      </button>

      {/* Desktop navigation (hidden on mobile) */}
      <nav className="z-10 hidden md:block">
        <NavigationLinks session={session} />
      </nav>

      {/* Mobile navigation overlay */}
      <div
        className={`fixed inset-0 z-40 transform bg-gray-900 bg-opacity-95 transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div
          className={`flex h-full flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <nav className="text-center">
            <NavigationLinks
              session={session}
              isMobile={true}
              closeMenu={toggleMenu}
            />
          </nav>
        </div>
      </div>
    </>
  );
}
