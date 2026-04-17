"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (id) => {
    if (pathname === "/") {
      // Already in home → scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Not in home → go to home + scroll
      router.push(`/#${id}`);
    }
  };
  return (
    <nav
      className="bg-white px-6 py-4 flex justify-between items-center 
    shadow-[0_4px_20px_rgba(0,0,0,0.08)] sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">BillingApp</div>

      {/* Menu */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <button
          onClick={() => handleScroll("features")}
          className="hover:text-blue-600 transition"
        >
          Features
        </button>
        <Link href="/Docs" className="hover:text-blue-600 transition">
          Docs
        </Link>
        <Link href="/About" className="hover:text-blue-600 transition">
          About Us
        </Link>
        <button
          onClick={() => handleScroll("contact")}
          className="hover:text-blue-600 transition"
        >
          Contact
        </button>
      </div>

      {/* Button */}
      <div className="hidden md:block">
        <button className="px-5 py-2 login-btn shadow-md hover:shadow-lg transition">
          Login
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
