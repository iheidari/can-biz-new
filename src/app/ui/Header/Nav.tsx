import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="hidden md:flex space-x-8">
        <Link
          href="/"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          Home
        </Link>
        <Link
          href="/docs"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          Docs
        </Link>
        <Link
          href="/about"
          className="text-gray-800 dark:text-gray-200 hover:underline"
        >
          About
        </Link>
      </nav>
    </>
  );
};

export default Nav;
