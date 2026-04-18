"use client";
import React, { useState } from "react";
import image from "../assets/contact.png";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formData);
      setErrors({});
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
   <div
  className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 md:px-16 py-10 bg-primary-color"
  id="contact"
>
  {/* LEFT SIDE */}
  <div className="space-y-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold color-primary">
      How to Get Started?
    </h1>

    <p className="color-primary">Set up your shop in minutes.</p>
    <p className="color-primary">
      Add your products and categories easily.
    </p>
    <p className="color-primary">
      Start billing instantly and track your daily sales.
    </p>

    <Image
      src={image}
      alt="contact-img"
      className="w-full h-auto object-contain rounded-xl mt-4"
    />
  </div>

  {/* RIGHT SIDE FORM */}
  <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl w-full">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className={`border p-3 rounded-md w-full focus:outline-none focus:ring-2 ${
          errors.name
            ? "border-red-500 focus:ring-red-400"
            : "border-[#49326b] focus:ring-[#49326b]"
        }`}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className={`border p-3 rounded-md w-full focus:outline-none focus:ring-2 ${
          errors.email
            ? "border-red-500 focus:ring-red-400"
            : "border-[#49326b] focus:ring-[#49326b]"
        }`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className={`border p-3 rounded-md w-full focus:outline-none focus:ring-2 ${
          errors.phone
            ? "border-red-500 focus:ring-red-400"
            : "border-[#49326b] focus:ring-[#49326b]"
        }`}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows={4}
        className={`border p-3 rounded-md w-full focus:outline-none focus:ring-2 ${
          errors.message
            ? "border-red-500 focus:ring-red-400"
            : "border-[#49326b] focus:ring-[#49326b]"
        }`}
      ></textarea>
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message}</p>
      )}

      <button className="bg-[#49326b] text-white py-3 rounded-md hover:opacity-90 transition">
        Send Message
      </button>
    </form>
  </div>
</div>
  );
};

export default Contact;