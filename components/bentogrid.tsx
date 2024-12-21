import Image from "next/image"
import { ArrowUpRight } from 'lucide-react';

export const BentoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Product Design */}
        <div className="col-span-2 bg-[#E6F3FF] rounded-3xl p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start justify-between h-full">
            <div className="space-y-6 md:max-w-[50%] z-10">

              <div>
                <h2 className="text-4xl font-bold tracking-tighter leading-tight mb-4">
                  Product
                  <br />
                  Design
                </h2>
                <p className="text-gray-600 text-lg tracking-tight mb-5">
                  We specialize in crafting intuitive, user-friendly product designs that elevate your brand and enhance the user experience.
                </p>
              </div>
              <a href="https://wa.me/message/HZ7KP2RUZNY2G1" target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white px-6 py-2.5 rounded-xl inline-flex items-center gap-2">
                Get Started
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </button></a>
            </div>
            <div className="md:absolute md:right-[0px]  m-[-20px] md:m-0  top-[-50%] md:top-[5%] md:transform md:-translate-y-1/2">
              <Image
                src="/productdesign.png"
                alt="Design showcase"
                width={400}
                height={400}
                className="mt-8 md:mt-0"
              />
            </div>
          </div>
        </div>

        {/* User Research */}
        <div className="bg-[#E8F9F1] rounded-3xl p-8 flex flex-col justify-between">
          <div className="flex justify-end">
            <Image
              src="/placeholder.svg"
              alt="Chat bubble"
              width={80}
              height={80}
              className="text-gray-400"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter">User Research & Analysis</h3>
            <p className="text-gray-600 mt-2 tracking-tight">
              Understanding your target audience through comprehensive research.
            </p>
          </div>
        </div>

        {/* Wireframing */}
        <div className="bg-[#FFE8E8] rounded-3xl p-8 flex flex-col justify-between">
          <h1 className="text-[#FF9898] text-7xl font-bold tracking-tighter">ui/ux</h1>
          <div>
            <h3 className="text-xl font-bold tracking-tighter">Wireframing & Prototyping</h3>
            <p className="text-gray-600 mt-2 tracking-tight">
              Creating interactive prototypes that bring your ideas to life.
            </p>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="bg-[#FFF4E5] rounded-3xl p-8 flex flex-col justify-between">
          <Image
            src="/placeholder.svg"
            alt="Rotating arrows"
            width={80}
            height={80}
            className="text-[#FFB156]"
          />
          <div>
            <h3 className="text-xl font-bold tracking-tighter">UI/UX Design</h3>
            <p className="text-gray-600 mt-2 tracking-tight">
              Crafting beautiful interfaces with seamless user experiences.
            </p>
          </div>
        </div>

        {/* Web Development */}
        <div className="bg-[#F0E8FF] rounded-3xl p-8 flex flex-col justify-between">
          <Image
            src="/placeholder.svg"
            alt="Lock illustration"
            width={80}
            height={80}
            className="text-[#9B51E0]"
          />
          <div>
            <h3 className="text-xl font-bold tracking-tighter">Web Development</h3>
            <p className="text-gray-600 mt-2 tracking-tight">
              Custom web applications and e-commerce solutions.
            </p>
          </div>
        </div>

        {/* Branding */}
        <div className="bg-[#E8F9F1] rounded-3xl p-8 flex flex-col justify-between">
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Emoji celebration"
              width={120}
              height={120}
              className="absolute top-0 right-0"
            />
            <Image
              src="/placeholder.svg"
              alt="Emoji"
              width={48}
              height={48}
              className="relative z-10"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tighter">Branding</h3>
            <p className="text-gray-600 mt-2 tracking-tight">
              Creating compelling brand strategies that resonate.
            </p>
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="col-span-2 bg-white rounded-3xl p-8 border">
          <div className="flex flex-wrap gap-3 mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative">
                <Image
                  src="/placeholder.svg"
                  alt={`Team member ${i}`}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold tracking-tighter">Digital Marketing</h3>
          <p className="text-gray-600 mt-2 tracking-tight">
            Customized digital marketing strategies to grow your online presence.
          </p>
        </div>

        {/* Our Approach */}
        <div className="bg-gray-100 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 -z-0" />
          <div className="relative z-10">
            <Image
              src="/placeholder.svg"
              alt="Phone mockup"
              width={200}
              height={400}
              className="mb-6"
            />
            <h3 className="text-2xl font-bold tracking-tighter">Our Approach</h3>
            <p className="text-gray-600 tracking-tight">
              We focus on collaboration, creativity, and results.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#FFE8E8] rounded-3xl p-8">
          <div className="grid grid-cols-4 gap-3 mb-6">
            {['❤️', '📸', '🔔', '⭐️', '👍', '✈️', 'Aa', '⭐️'].map((icon, i) => (
              <div key={i} className="bg-white p-3 rounded-xl shadow-sm flex items-center justify-center">
                <span className="text-lg">{icon}</span>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold tracking-tighter">Why Choose Us</h3>
          <p className="text-gray-600 mt-2 tracking-tight">
            Expert team with proven track record of success.
          </p>
        </div>
      </div>
    </div>
  )
}

