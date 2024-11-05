"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 md:hidden">
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link href="/">
              <span className="text-gray-800 dark:text-gray-200">Home</span>
            </Link>
            <Link href="/docs">
              <span className="text-gray-800 dark:text-gray-200">Docs</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-800 dark:text-gray-200">About</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
