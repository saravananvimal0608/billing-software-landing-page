import Image from "next/image";
import React from "react";
import WhyChooseImg from "../assets/hero.png";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const WhyChoose = () => {
  return (
    <div >
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-lg font-medium text-gray-600">Why Choose</h2>

          <h1 className="bounce-smooth text-3xl md:text-5xl font-bold text-black ">
            Deepan India
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Discover the advantages that set us apart in delivering exceptional
            financial solutions tailored just for you.
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
          <RiMoneyRupeeCircleFill size={70} />
          <div>
            <p className="primary-text font-bold pb-3">
              Right Asset allocation
            </p>
            <p className="text-sm">
              Deploying Right financial solutions for each client after proper
              profiling.
            </p>
          </div>
        </div>

        <div className="flex items-center why-choose-box gap-3">
          <RiMoneyRupeeCircleFill size={70} />
          <div>
            <p className="primary-text font-bold pb-3">
              Right Asset allocation
            </p>
            <p className="text-sm">
              Deploying Right financial solutions for each client after proper
              profiling.
            </p>
          </div>
        </div>

        <div className="flex items-center why-choose-box gap-3">
          <RiMoneyRupeeCircleFill size={70} />
          <div>
            <p className="primary-text font-bold pb-3">
              Right Asset allocation
            </p>
            <p className="text-sm">
              Deploying Right financial solutions for each client after proper
              profiling.
            </p>
          </div>
        </div>

        <div className="flex items-center why-choose-box gap-3">
          <RiMoneyRupeeCircleFill size={70} />
          <div>
            <p className="primary-text font-bold pb-3">
              Right Asset allocation
            </p>
            <p className="text-sm">
              Deploying Right financial solutions for each client after proper
              profiling.
            </p>
          </div>
        </div>

        <div className="flex items-center why-choose-box gap-3">
          <RiMoneyRupeeCircleFill size={70} />
          <div>
            <p className="primary-text font-bold pb-3">
              Right Asset allocation
            </p>
            <p className="text-sm">
              Deploying Right financial solutions for each client after proper
              profiling.
            </p>
          </div>
        </div>

        <div className="flex items-center why-choose-box gap-3">
          <RiMoneyRupeeCircleFill size={70} />
          <div>
            <p className="primary-text font-bold pb-3">
              Right Asset allocation
            </p>
            <p className="text-sm">
              Deploying Right financial solutions for each client after proper
              profiling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
