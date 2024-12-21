import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function BetaBanner() {
  return (
    <section className="relative h-[420px] overflow-hidden rounded-3xl bg-[#012513] m-5 md:mx-10 md:h-[360px] ">
     

      {/* Background Pattern */}
      <div className="absolute right-[200px] md:right-[-200px] bottom-[-40px] md:bottom-0 w-full h-[70%] md:top-0 md:w-[65%] md:h-full">
        <div className="relative w-full h-full">
          <Image
            src="/Component 1.png"
            alt="Background Pattern"
            fill
            className="object-cover object-right-top md:object-left"
            priority
          />

        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full max-w-[1440px] mx-auto px-6 pt-24 md:flex-row md:items-center md:justify-between md:px-10 md:pt-0"> 
        {/* Logo */}
        <div className="absolute top-10 left-6 md:top-[70] md:left-10">
          <Image
            src="/icon.png"
            alt="Company Logo"
            width={50}
            height={50}
            className="w-10 md:w-15 h-10 md:h-15"
          />
        </div>
        <div className="md:max-w-[60%]">
          <h1 className="text-white text-[32px] leading-[1.2] tracking-[-0.02em] font-semibold mb-3 md:text-[40px] md:leading-[1.1] md:tracking-[-0.03em] md:mb-4">
            Turn your brand into a great one.
          </h1>
          <p className="text-white/90 text-[16px] leading-[1.5] font-regular mb-6 md:text-[18px] md:leading-[1.4] md:mb-0">
            Transform your vision into engaging interactive,
            <br className="hidden md:inline" />
            and visually stunning digital experience.
          </p>
        </div>
        <div>
          <a href="https://wa.me/message/HZ7KP2RUZNY2G1" target="_blank" rel="noopener noreferrer">
            <Button 
              className="h-10 px-8 bg-white text-[#012513] tracking-[-0.02em] md:tracking-[-0.03em] hover:bg-white/90 rounded-full text-[16px] font-bold md:h-[52px] md:px-20"
            >
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

