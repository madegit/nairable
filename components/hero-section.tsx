"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] pt-20 tracking-tight overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-20 min-h-[80vh]">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-300/30 blur-[80px] animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-green-400/30 blur-[80px] animate-blob animation-delay-2000" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000025_1px,transparent_1px)] [background-size:24px_24px] -z-10" />

      {/* Floating Icons */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Globe Icon - Large */}
        <div className="absolute left-4 top-32 md:left-10 md:top-40 animate-float z-0">
          <Image
            src="/ill3.jpeg"
            alt="Globe Icon"
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg"
          />
        </div>

        {/* Yellow Icon - Medium */}
        <div className="absolute left-20 top-16 md:left-32 md:top-20 animate-float-delay-1 z-0">
          <Image
            src="/ill5.jpeg"
            alt="Yellow Icon"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-lg"
          />
        </div>

        {/* Purple Robot - Medium */}
        <div className="absolute right-8 top-24 md:right-16 md:top-32 animate-float-delay-2 z-0">
          <Image
            src="/ill1.jpeg"
            alt="Purple Robot"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-lg"
          />
        </div>

        {/* Neon Yellow - Large */}
        <div className="absolute right-12 bottom-32 md:right-24 md:bottom-40 animate-float-delay-3 z-0">
          <Image
            src="/ill6.jpeg"
            alt="Neon Icon"
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-lg"
          />
        </div>

        {/* Grayscale 3D - Medium */}
        <div className="absolute left-16 bottom-24 md:left-28 md:bottom-32 animate-float-delay-4 z-0">
          <Image
            src="/ill4.jpeg"
            alt="3D Icon"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
            Creative Solutions
            <br />
            Tailored for Your Business.
          </h1>
          <p className="text-gray-600 mb-4 max-w-md text-sm sm:text-base">
            We craft digital experiences that captivate and convert visitors
            into loyal customers.
          </p>

          {/* Trusted by Section */}
          <div className="flex items-center mb-8">
            <Image
              src="/user8.jpg"
              alt="User 1"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <Image
              src="/user2.jpg"
              alt="User 2"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white -ml-3"
            />
            <Image
              src="/user5.jpg"
              alt="User 3"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white -ml-3"
            />
            <Image
              src="/user4.jpg"
              alt="User 4"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white -ml-3"
            />
            <p className="text-gray-500 text-sm sm:ml-2 md:ml-4">
              Trusted already by 1.2k+
            </p>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="outline"
              className="bg-white rounded-xl text-[#08CE6C] hover:bg-gray-100 px-4 py-5 border border-gray-300 sm:px-10 sm:py-6"
            >
              Learn More
            </Button>
            <a
              href="https://wa.me/message/HZ7KP2RUZNY2G1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                className="bg-[#08CE6C] rounded-xl text-white hover:bg-gray-800 px-4 py-5 flex items-center justify-center sm:px-10 sm:py-6"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
