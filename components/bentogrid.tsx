import Image from "next/image"
import { ArrowUpRight } from 'lucide-react';

export const BentoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Product Design */}
        <div className="md:col-span-2 bg-[#E6F3FF] rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[320px] md:min-h-[400px]">
          <div className="flex flex-col md:flex-row items-start justify-between h-full">
            <div className="space-y-4 md:space-y-6 md:max-w-[50%] z-10 w-full md:w-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
                  Product
                  <br />
                  Design
                </h2>
                <p className="text-gray-600 text-base md:text-lg tracking-tight mb-5">
                  We specialize in crafting intuitive, user-friendly product designs that elevate your brand and enhance the user experience.
                </p>
              </div>
              <a href="https://wa.me/message/HZ7KP2RUZNY2G1" target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white px-6 py-2.5 rounded-xl inline-flex items-center gap-2">
                Get Started
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </button></a>
            </div>
            <div className="mt-6 md:mt-0 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 flex justify-center md:justify-end w-full md:w-auto">
              <Image
                src="/productdesign.png"
                alt="Design showcase"
                width={300}
                height={300}
                className="w-48 h-48 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        </div>

        {/* User Research */}
        <div className="bg-[#E8F9F1] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[280px]">
          <div className="flex justify-end mb-4">
            <Image
              src="/placeholder.svg"
              alt="Chat bubble"
              width={60}
              height={60}
              className="text-gray-400 md:w-20 md:h-20"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tighter">User Research & Analysis</h3>
            <p className="text-gray-600 mt-2 tracking-tight text-sm md:text-base">
              Understanding your target audience through comprehensive research.
            </p>
          </div>
        </div>

        {/* Wireframing */}
        <div className="bg-[#FFE8E8] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[280px]">
          <h1 className="text-[#FF9898] text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-0">ui/ux</h1>
          <div>
            <h3 className="text-lg md:text-xl font-bold tracking-tighter">Wireframing & Prototyping</h3>
            <p className="text-gray-600 mt-2 tracking-tight text-sm md:text-base">
              Creating interactive prototypes that bring your ideas to life.
            </p>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="bg-[#FFF4E5] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[280px]">
          <Image
            src="/placeholder.svg"
            alt="Rotating arrows"
            width={60}
            height={60}
            className="text-[#FFB156] md:w-20 md:h-20 mb-4"
          />
          <div>
            <h3 className="text-lg md:text-xl font-bold tracking-tighter">UI/UX Design</h3>
            <p className="text-gray-600 mt-2 tracking-tight text-sm md:text-base">
              Crafting beautiful interfaces with seamless user experiences.
            </p>
          </div>
        </div>

        {/* Web Development */}
        <div className="bg-[#F0E8FF] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[280px]">
          <Image
            src="/placeholder.svg"
            alt="Lock illustration"
            width={60}
            height={60}
            className="text-[#9B51E0] md:w-20 md:h-20 mb-4"
          />
          <div>
            <h3 className="text-lg md:text-xl font-bold tracking-tighter">Web Development</h3>
            <p className="text-gray-600 mt-2 tracking-tight text-sm md:text-base">
              Custom web applications and e-commerce solutions.
            </p>
          </div>
        </div>

        {/* Branding */}
        <div className="bg-[#E8F9F1] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[280px]">
          <div className="relative mb-4 h-16 md:h-20">
            <Image
              src="/placeholder.svg"
              alt="Emoji celebration"
              width={80}
              height={80}
              className="absolute top-0 right-0 md:w-[120px] md:h-[120px]"
            />
            <Image
              src="/placeholder.svg"
              alt="Emoji"
              width={40}
              height={40}
              className="relative z-10 md:w-12 md:h-12"
            />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold tracking-tighter">Branding</h3>
            <p className="text-gray-600 mt-2 tracking-tight text-sm md:text-base">
              Creating compelling brand strategies that resonate.
            </p>
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8 border min-h-[200px] md:min-h-[280px]">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative">
                <Image
                  src="/placeholder.svg"
                  alt={`Team member ${i}`}
                  width={44}
                  height={44}
                  className="rounded-full md:w-14 md:h-14"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tighter">Digital Marketing</h3>
          <p className="text-gray-600 mt-2 tracking-tight text-sm md:text-base">
            Customized digital marketing strategies to grow your online presence.
          </p>
        </div>

        {/* Our Approach */}
        <div className="bg-gray-100 rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[280px] md:min-h-[400px] flex flex-col">
          <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-gray-200 -z-0" />
          <div className="relative z-10 flex-1 flex flex-col justify-between">
            <div className="flex justify-center mb-4">
              <Image
                src="/placeholder.svg"
                alt="Phone mockup"
                width={120}
                height={240}
                className="md:w-[200px] md:h-[400px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tighter">Our Approach</h3>
              <p className="text-gray-600 tracking-tight text-sm md:text-base">
                We focus on collaboration, creativity, and results.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#FFE8E8] rounded-3xl p-6 md:p-8 min-h-[200px] md:min-h-[280px] flex flex-col">
          <div className="grid grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-6 flex-1">
            {['❤️', '📸', '🔔', '⭐️', '👍', '✈️', 'Aa', '⭐️'].map((icon, i) => (
              <div key={i} className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-sm flex items-center justify-center aspect-square">
                <span className="text-sm md:text-lg">{icon}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tighter">Why Choose Us</h3>
            <p className="text-gray-600 mt-2 tracking-tight text-sm md:text-base">
              Expert team with proven track record of success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

