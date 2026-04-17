"use client";
import React from "react";
import { useState } from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mb-5 pt-6  text-center bg-banner">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"></svg>
        <span>{year}</span> © Cotechies . All rights reserved.
      </p>
      <p className="text-gray-300 text-xs mt-1">
        Secure • Reliable • Smart Billing
      </p>
    </footer>
  );
};

export default Footer;
