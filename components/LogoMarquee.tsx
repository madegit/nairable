'use client';

import Image from 'next/image';

const LOGOS = [
  {
    src: '/logos/splice.svg',
    alt: 'OpenAI',
    width: 160,
    height: 60
  },
  {
    src: '/logos/splice.svg',
    alt: 'Tesla',
    width: 160,
    height: 60
  },
  {
    src: '/logos/splice.svg',
    alt: 'Spotify',
    width: 160,
    height: 60
  },
  {
    src: '/logos/splice.svg',
    alt: 'Amazon',
    width: 160,
    height: 60
  },
  {
    src: '/logos/splice.svg',
    alt: 'Todoist',
    width: 160,
    height: 60
  }
] as const;

export default function LogoMarquee() {
  return (
    <section className="w-full py-12 bg-white overflow-hidden tracking-tight">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-md md:text-xl text-gray-600 mb-2 md:mb-12">
          We use the best technology
        </h2>
        <div className="relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 w-16 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
          {/* Marquee container */}
          <div className="logo-marquee-container">
            <div className="logo-marquee">
              {/* First set of logos */}
              {LOGOS.map((logo, idx) => (
                <div 
                  key={`${logo.alt}-${idx}`} 
                  className="logo-item"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="w-auto h-12 md:h-16 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    priority={idx < 2}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {LOGOS.map((logo, idx) => (
                <div 
                  key={`${logo.alt}-duplicate-${idx}`} 
                  className="logo-item"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="w-auto h-12 md:h-16 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}