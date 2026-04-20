"use client";
import React, { useState } from "react";
import Link from "next/link";
import icon from "../assets/icon.jpeg";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false); // close sidebar
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      <nav className="bg-primary-color px-6 py-4 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] sticky top-0 z-50">
        {/* Logo */}
        <Image
          src={icon}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:color-primary p-3 navbar-highlight">
            Home
          </Link>
          <button onClick={() => handleScroll("features")} className="p-3 navbar-highlight">
            Features
          </button>
          <Link href="/Docs" className="p-3 navbar-highlight">
            Docs
          </Link>
          <Link href="/About" className="p-3 navbar-highlight">
            About
          </Link>
          <button onClick={() => handleScroll("contact")} className="p-3 navbar-highlight">
            Contact
          </button>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="https://billing-software-pro.vercel.app/" target="_blank" >
            <button className="px-5 py-2 login-btn shadow-md hover:shadow-lg transition">
              Login
            </button>
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-2xl">
            ☰
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg color-primary">Billing System</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-4 gap-4 text-gray-700 w-full">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="w-full text-center border border-[#49326b] text-[#49326b] py-2 rounded-lg hover:bg-[#49326b] hover:text-white transition"
          >
            Home
          </Link>

          <button
            onClick={() => handleScroll("features")}
            className="w-full border border-[#49326b] text-[#49326b] py-2 rounded-lg hover:bg-[#49326b] hover:text-white transition navbar-highlight"
          >
            Features
          </button>

          <Link
            href="/Docs"
            onClick={() => setIsOpen(false)}
            className="w-full text-center border border-[#49326b] text-[#49326b] py-2 rounded-lg hover:bg-[#49326b] hover:text-white transition navbar-highlight"
          >
            Docs
          </Link>

          <Link
            href="/About"
            onClick={() => setIsOpen(false)}
            className="w-full text-center border border-[#49326b] text-[#49326b] py-2 rounded-lg hover:bg-[#49326b] hover:text-white transition navbar-highlight"
          >
            About
          </Link>

          <button
            onClick={() => handleScroll("contact")}
            className="w-full border border-[#49326b] text-[#49326b] py-2 rounded-lg hover:bg-[#49326b] hover:text-white transition navbar-highlight"
          >
            Contact
          </button>

          {/* Login Button */}
          <a href="https://billing-software-pro.vercel.app/" target="_blank" >
            <button className="mt-4 w-full py-2 login-btn text-white rounded-lg shadow-md hover:opacity-90 transition">
              Login
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
