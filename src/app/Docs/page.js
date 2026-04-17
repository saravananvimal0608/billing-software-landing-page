import React from "react";
import {
  FaReceipt,
  FaInfoCircle,
  FaStar,
  FaBoxes,
  FaShoppingCart,
  FaHistory,
  FaUserShield,
  FaUserCog,
  FaCheckCircle,
  FaFire,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

export const metadata = {
  title: "Billing Management System for Small Shops",
  description:
    "A simple billing management system to manage products, track sales, and handle shop billing operations efficiently.",
};

const Docs = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 min-h-screen px-4 md:px-10 lg:px-20 py-12 font-sans">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header with gradient and icon */}
      <div className="relative text-center mb-14">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-5">
          <FaReceipt className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text">
          Billing Management System
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-5 mb-4"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          A modern billing management system designed for small shops to
          simplify billing, manage products, track sales history, and improve
          daily business operations efficiently.
        </p>
      </div>

      {/* Section 1 - Overview with card style + icon */}
      <section className="relative mb-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-xl">
            <FaInfoCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Traditional calculators only help calculate totals, but they do not
          provide proper tracking or management of sales data. This billing
          management system is designed to solve that problem for small
          businesses. Shop owners (Admins) can add and manage products such as
          Biryani, Tea, Snacks, and other items, while staff members can quickly
          search products and calculate billing amounts. After confirming the
          payment method (Cash, UPI, Card), the transaction is saved
          automatically. Instead of generating printed bills, all transactions
          are securely stored in the system history. This allows business owners
          to track daily sales, monitor performance, and maintain accurate
          records without manual effort.
        </p>
      </section>

      {/* Section 2 - Key Features (enhanced grid with icons) */}
      <section className="relative mb-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-xl">
            <FaStar className="w-6 h-6 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition">
                <FaBoxes className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                Product Management
              </h3>
            </div>
            <p className="text-gray-600 pl-11">
              Easily manage products and categories with a simple interface
              designed for small business owners.
            </p>
          </div>

          <div className="group p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition">
                <FaShoppingCart className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                Billing System
              </h3>
            </div>
            <p className="text-gray-600 pl-11">
              Fast and efficient billing system with real-time product search
              and instant total calculation.
            </p>
          </div>

          <div className="group p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition">
                <FaHistory className="w-5 h-5 text-purple-700" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                Sales History
              </h3>
            </div>
            <p className="text-gray-600 pl-11">
              Automatically stores transaction history to help track daily sales
              and business performance.
            </p>
          </div>

          <div className="group p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition">
                <FaUserShield className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                User Roles
              </h3>
            </div>
            <p className="text-gray-600 pl-11">
              Secure role-based access control for Admin and Staff to ensure
              proper system usage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Roles with modern badge style */}
      <section className="relative mb-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-rose-100 rounded-xl">
            <FaUserCog className="w-6 h-6 text-rose-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">User Roles</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-2">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border-l-4 border-blue-600">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                ADMIN
              </span>
            </div>
            <p className="text-gray-700">
              Full access to manage products, categories, staff accounts, and
              view complete sales history and analytics.
            </p>
          </div>
          <div className="bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl p-5 border-l-4 border-gray-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gray-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                STAFF
              </span>
            </div>
            <p className="text-gray-700">
              Limited access to billing operations, allowing staff to calculate
              totals and process transactions efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Plans (Pricing Cards with enhanced styling) */}
      <section className="relative mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
            <GiTakeMyMoney className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Flexible plans
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            Pricing Plans
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mt-2">
            Choose a plan that fits your business size and scale your billing
            operations with flexible features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 text-center border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-2xl font-bold text-gray-700">Basic</h3>
              <div className="mt-2 text-3xl font-black text-gray-800">Free</div>
            </div>
            <ul className="p-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-green-500" /> 15 Days
                History
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-green-500" /> 1 User
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-green-500" /> Basic
                Support
              </li>
            </ul>
          </div>

          {/* Pro - Highlighted */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 relative transition-all duration-300 hover:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md flex items-center gap-1">
              <FaFire className="w-3 h-3" /> MOST POPULAR
            </div>
            <div className="p-6 text-center border-b border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-blue-700">Pro</h3>
              <div className="mt-2 text-3xl font-black text-gray-800">
                ₹29
                <span className="text-base font-normal text-gray-500">/mo</span>
              </div>
            </div>
            <ul className="p-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-blue-500" /> 3 Months
                History
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-blue-500" /> 2 Users
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-blue-500" /> Higher
                Priority Support
              </li>
            </ul>
          </div>

          {/* Premium */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="p-6 text-center border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-2xl font-bold text-gray-700">Premium</h3>
              <div className="mt-2 text-3xl font-black text-gray-800">
                ₹59
                <span className="text-base font-normal text-gray-500">/mo</span>
              </div>
            </div>
            <ul className="p-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-green-500" /> 6 Months
                History
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-green-500" /> 3 Users
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-green-500" /> Highest
                Priority Support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5 - Future Features with roadmap style */}
      <section className="relative mb-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-orange-100 rounded-xl">
            <FaRocket className="w-6 h-6 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Upcoming Features
          </h2>
          <span className="ml-auto text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
            Roadmap 2026
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition">
            <div className="min-w-[28px] h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
              <FaArrowRight className="w-3 h-3" />
            </div>
            <span className="text-gray-700">
              Advanced staff management system including employee details,
              roles, and performance tracking.
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition">
            <div className="min-w-[28px] h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
              <FaArrowRight className="w-3 h-3" />
            </div>
            <span className="text-gray-700">
              Attendance tracking system to monitor daily staff activity and
              presence.
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition">
            <div className="min-w-[28px] h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
              <FaArrowRight className="w-3 h-3" />
            </div>
            <span className="text-gray-700">
              Salary management module to handle employee payments efficiently.
            </span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition">
            <div className="min-w-[28px] h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
              <FaArrowRight className="w-3 h-3" />
            </div>
            <span className="text-gray-700">
              Built-in bug reporting system with quick resolution to improve
              reliability and user experience.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;
