import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-2xl">Biz Directory</span>
          </Link>
        </div>

        <Nav />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
