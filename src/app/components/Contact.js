import React from "react";
import image from '../assets/hero.png'
import Image from "next/image";

const Contact = () => {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2  gap-8 my-10 p-16 bg-secondary " id="contact">


  <div className="space-y-3">
    <h1 className="text-2xl font-bold">How to Get Started?</h1>

    <p className="text-gray-600">Speak with our experts.</p>
    <p className="text-gray-600">Share your financial needs and expectations.</p>
    <p className="text-gray-600">
      Get a personalized, detailed wealth creation plan designed just for you.
    </p>

    <Image
      src={image}
      alt="contact-img"
      className="w-full h-[250px] object-cover rounded-lg mt-4"
    />
  </div>


  <div className="bg-white p-6 rounded-xl shadow-md">
    <form className="flex flex-col gap-4">

      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="number"
        placeholder="Phone Number"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        placeholder="Your Message"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>

      <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Send Message
      </button>

    </form>
  </div>

</div>
  );
};

export default Contact;
