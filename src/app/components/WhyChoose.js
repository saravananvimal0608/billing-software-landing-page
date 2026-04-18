import Image from "next/image";
import React from "react";
import WhyChooseImg from "../assets/why.png";
import { 
  FaShoppingCart, 
  FaBoxes, 
  FaChartLine, 
  FaUserShield, 
  FaHistory, 
  FaCheckCircle 
} from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className="bg-primary-color  pb-4">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="bounce-smooth text-3xl md:text-5xl font-bold color-primary">
            Why Choose BillingApp?
          </h2>

          <p className="color-primary leading-relaxed">
            Discover a smarter way to manage your shop billing, products, and
            sales with a simple and efficient system designed for small
            businesses.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center ">
          <div className="w-full max-w-md aspect-square">
            <Image
              src={WhyChooseImg}
              alt="why-choose-us image"
              className="w-full h-full rounded-full object-cover bounce-smooth"
            />
          </div>
        </div>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10">

  <div className="flex items-center why-choose-box gap-3">
   <FaShoppingCart size={50} className="icon-style"/>
    <div>
      <p className=" font-bold pb-3 color-primary">
        Smart Billing System
      </p>
      <p className="text-sm  color-primary">
        Fast and accurate billing with real-time product search and instant total calculation.
      </p>
    </div>
  </div>

  <div className="flex items-center why-choose-box gap-3">
    <FaBoxes size={50} className="icon-style" />
    <div>
      <p className="color-primary font-bold pb-3">
        Product Management
      </p>
      <p className="text-sm color-primary">
        Easily add, update, and manage products like Biryani, Tea, Snacks, and more.
      </p>
    </div>
  </div>

  <div className="flex items-center why-choose-box gap-3">
    <FaChartLine size={50} className="icon-style"/>
    <div>
      <p className="color-primary font-bold pb-3">
        Sales Tracking
      </p>
      <p className="text-sm color-primary">
        Automatically store all transactions and track daily sales without manual calculation.
      </p>
    </div>
  </div>

  <div className="flex items-center why-choose-box gap-3">
    <FaUserShield size={50} className="icon-style"/>
    <div>
      <p className="color-primary font-bold pb-3">
        Role-Based Access
      </p>
      <p className="text-sm color-primary">
        Admin controls the system while staff can only access billing operations securely.
      </p>
    </div>
  </div>

  <div className="flex items-center why-choose-box gap-3">
    <FaHistory size={50} className="icon-style"/>
    <div>
      <p className="color-primary font-bold pb-3">
        History & Reports
      </p>
      <p className="text-sm color-primary">
        View complete billing history and analyze shop performance easily.
      </p>
    </div>
  </div>

  <div className="flex items-center why-choose-box gap-3">
    <FaCheckCircle size={50} className="icon-style"/>
    <div>
      <p className="color-primary font-bold pb-3">
        Easy to Use
      </p>
      <p className="text-sm color-primary">
        Simple interface designed for small shop owners to use without technical knowledge.
      </p>
    </div>
  </div>

</div>
    </div>
  );
};

export default WhyChoose;
