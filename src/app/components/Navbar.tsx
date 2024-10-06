"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  return (
    <div className="relative z-50">
      <div className="flex items-center justify-between px-4 lg:px-24">
        <Image
          src="/logo.png"
          alt="logo"
          width={256}
          height={92}
          className="hidden md:block"
        />
        <Image
          src="/logo.png"
          alt="logo"
          width={186}
          height={72}
          className="md:hidden"
        />
        <nav className="bg-[#202020]  hidden md:block mr-8 px-16 w-fit rounded-full font-poppins text-[#CECECE] relative">
          <div className="w-fit mx-auto flex items-center justify-between">
            <div className="flex  space-x-5 items-center justify-center">
              <Link href="#" className="hover:text-white transition-colors">
                Stats
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Pools
              </Link>
              <div
                className="relative py-[10px]"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <button className="flex items-center hover:text-white justify-center transition-colors">
                  Resources
                  <div className="ml-1 mt-1">
                    <ArrowDown />
                  </div>
                </button>
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#202020] ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {["Docs", "X", "Telegram", "Governance", "Git"].map(
                        (item) => (
                          <Link
                            key={item}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                            role="menuitem"
                          >
                            {item}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        <Link
          href={"https://swap-swap2choccy.vercel.app/swap"}
          target="_blank"
          className="bg-[#F202FF] hidden md:block uppercase hover:scale-105 transform transition-all duration-300 text-sm md:text-base font-poppins font-semibold text-white rounded-[10px] px-4 md:px-[25px] py-[10px] "
        >
          Swap Now
        </Link>

        <button
          className="md:hidden text-[#CECECE]"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed h-fit  inset-y-0 left-0 w-full bg-[#202020]  transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden overflow-y-auto`}
      >
        <div className="flex flex-col ">
          <div className="flex justify-between items-center px-8">
            <Image src="/logo.png" alt="logo" width={186} height={72} />
            <button
              onClick={toggleMobileMenu}
              className="text-[#CECECE]"
              aria-label="Close mobile menu"
            >
              <X />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-8 font-poppins text-[#CECECE]">
            <Link href="#" className="hover:text-white transition-colors">
              Stats
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Pools
            </Link>
            <div className="relative">
              <button
                className="flex items-center hover:text-white justify-between w-full transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                Resources
                <ArrowDown />
              </button>
              {isOpen && (
                <div className="mt-2 space-y-2 ml-4">
                  {["Docs", "X", "Telegram", "Governance", "Git"].map(
                    (item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block py-2 text-sm text-gray-300 hover:text-white"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </nav>
          <div className="mt-auto p-8">
            <Link
              href={"https://swap-swap2choccy.vercel.app/swap"}
              target="_blank"
              className="w-full py-[10px] bg-[#F202FF] uppercase hover:scale-105 transform transition-all duration-300 text-sm font-poppins font-semibold text-white rounded-[10px] px-6"
            >
              Swap Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 0.625L4.5 4.375L0.75 0.625"
        stroke="#CECECE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="gray"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        d="M7.95 11.95h32m-32 12h32m-32 12h32"
      />
    </svg>
  );
}

function X() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      <path
        fill="gray"
        d="M7.293 8L3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708z"
      />
    </svg>
  );
}
