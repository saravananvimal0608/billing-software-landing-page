import React from "react";
import {
  FaInfoCircle,
  FaBookOpen,
  FaEye,
  FaStar,
  FaLightbulb,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import Link from "next/link";

export const metadata = {
  title: "About Billing Management System | Smart Billing for Small Shops",
  description:
    "Learn about our billing management system designed for small shops to manage products, track sales history, and simplify billing operations efficiently.",
  keywords: [
    "billing system",
    "shop billing software",
    "small business billing app",
    "sales tracking system",
    "pos system for shops",
  ],
};

const About = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 min-h-screen px-4 md:px-10 lg:px-20 py-12 font-sans">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative text-center mb-14">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-5">
          <FaInfoCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
          About Us
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-4 mb-4"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Discover the story behind our billing management system, built to
          simplify billing, improve sales tracking, and help small shop owners
          manage their business operations efficiently.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="relative mb-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-xl">
            <FaBookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          The Billing Management System was developed in 2026 to solve a common
          challenge faced by small shop owners — managing billing using
          traditional calculators and manual methods. These outdated approaches
          often result in calculation errors, lack of proper sales records, and
          difficulty in tracking daily business performance. This application
          was built as a simple and effective digital solution to overcome these
          issues. It allows shop owners to manage products, track sales history,
          and handle billing operations more accurately and efficiently.
          Designed with simplicity and usability in mind, this system is
          suitable for small-scale businesses looking to digitize their billing
          process and maintain organized records without complexity.
        </p>
      </section>

      {/* Mission & Vision Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Mission */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-xl">
              <FaRocket className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            Our vision is to make digital billing accessible for small
            businesses by providing a user-friendly system that simplifies
            operations and supports better sales tracking and decision-making.
          </p>
        </section>

        {/* Vision */}
        <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-xl">
              <FaEye className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            To become the most trusted and widely adopted billing solution for
            small businesses globally, revolutionizing how shop owners manage
            their daily operations and financial tracking.
          </p>
        </section>
      </div>

      {/* Core Values */}
      <section className="relative mb-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-100 rounded-xl">
            <FaStar className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Our Core Values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 text-center group hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 transition">
              <SiSimpleanalytics className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Simplicity</h3>
            <p className="text-sm text-gray-500">
              We focus on creating easy-to-use solutions that simplify billing
              and business management for everyone.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 text-center group hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-200 transition">
              <FaLightbulb className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-sm text-gray-500">
              We continuously improve our system with modern features to enhance
              performance and usability.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 text-center group hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-200 transition">
              <FaHeart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Customer First</h3>
            <p className="text-sm text-gray-500">
              We prioritize the needs of small business owners and aim to
              deliver practical and useful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative mb-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Have Questions?</h2>
        <p className="text-blue-100 mb-6 max-w-md mx-auto">
          Get in touch to learn how this billing system can help simplify your
          shop operations and improve sales tracking.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"/#contact"}>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition shadow-md flex items-center gap-2 justify-center">
              <MdContactSupport className="w-5 h-5" />
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
