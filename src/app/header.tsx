"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "@/components/menu";
import { scrollTo } from "@/utils/scrollTo";

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={`bg-white text-gray-900 border-b ${
          isSticky ? "fixed top-0 left-0 right-0 shadow-lg z-50" : ""
        }`}
      >
        <div className="container mx-auto items-center justify-between flex">
          <Image src="/static/logo.png" alt="logo" width="150" height="100" />

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-500 hover:text-blue-500 mr-4"
          >
            <Menu />
          </button>

          <div className="hidden md:flex gap-8 text-lg">
            <button
              onClick={() => scrollTo("#home")}
              className="hover:text-blue-500"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="hover:text-blue-500"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="hover:text-blue-500"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollTo("#location")}
              className="hover:text-blue-500"
            >
              Location
            </button>
            <button
              onClick={() => scrollTo("#gallery")}
              className="hover:text-blue-500"
            >
              Gallery
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className={
              `md:hidden w-full top-[75px] bg-white text-center border-t ` +
              isSticky
                ? "relative"
                : "absolute"
            }
          >
            <div className="mt-2 text-center mb-4 flex flex-col justify-center">
              <button
                onClick={() => {
                  scrollTo("#home");
                  setIsMobileMenuOpen(false);
                }}
                className="block text-lg py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollTo("#about");
                  setIsMobileMenuOpen(false);
                }}
                className="block text-lg py-2"
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollTo("#contact");
                  setIsMobileMenuOpen(false);
                }}
                className="block text-lg py-2"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  scrollTo("#location");
                  setIsMobileMenuOpen(false);
                }}
                className="block text-lg py-2"
              >
                Location
              </button>
              <button
                onClick={() => {
                  scrollTo("#gallery");
                  setIsMobileMenuOpen(false);
                }}
                className="block text-lg py-2"
              >
                Gallery
              </button>
            </div>
          </div>
        )}
      </div>

      {isSticky && <div className="h-[75px]"></div>}
    </>
  );
}
