import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Shield, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-[#2A4A7A] to-primary-light text-white overflow-hidden">
      {/* Sharp Angular Background Geometry */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-right triangle slash - secondary */}
        <svg className="absolute top-0 right-0 w-96 h-96" viewBox="0 0 400 400" preserveAspectRatio="none">
          <polygon points="400,0 400,400 0,0" fill="currentColor" className="text-secondary/10" />
        </svg>

        {/* Accent triangle overlay */}
        <svg className="absolute top-20 right-32 w-64 h-64" viewBox="0 0 300 300" preserveAspectRatio="none">
          <polygon points="300,0 300,300 0,0" fill="currentColor" className="text-accent/10" />
        </svg>

        {/* Bottom-left primary-dark wedge */}
        <svg className="absolute bottom-0 left-0 w-80 h-80" viewBox="0 0 400 400" preserveAspectRatio="none">
          <polygon points="0,400 0,0 400,400" fill="currentColor" className="text-primary-dark/20" />
        </svg>

        {/* Orthogonal grid - 64px, 3.5% opacity */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 63px, rgba(255,255,255,.1) 63px, rgba(255,255,255,.1) 64px), linear-gradient(90deg, transparent 63px, rgba(255,255,255,.1) 63px, rgba(255,255,255,.1) 64px)',
            backgroundSize: '64px 64px'
          }}
        />

        {/* Vertical rule at 50% */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/5" />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Sharp Angular Design */}
            <div className="flex flex-col justify-center">
              {/* District Badge - Flat Rectangle */}
              <div className="inline-flex items-center border border-secondary px-4 py-2 mb-8 w-fit bg-transparent">
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">
                  District 59
                </span>
              </div>

              {/* Campaign Logo */}
              <div className="mb-8 md:mb-10">
                <Image
                  src="/campaign-logo.png"
                  alt="Celeste Johnson for House District 59"
                  width={300}
                  height={150}
                  className="w-full max-w-sm h-auto"
                  priority
                />
              </div>

              {/* Main Heading - 3 lines with secondary accent */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
                Leadership<br />
                Rooted in<br />
                <span className="text-secondary">Community</span>
              </h1>

              {/* Subtext with left accent border */}
              <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed font-light max-w-lg pl-4 border-l-[3px] border-accent">
                Bringing transparent, accessible leadership to Utah House District 59. Together, we'll protect what makes our communities special.
              </p>

              {/* CTA Buttons - Sharp, No Radius */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-y-[-3px] group"
                >
                  Join the Campaign 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 font-bold text-base md:text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                >
                  Learn More
                </Link>
              </div>

              {/* Endorsement Strip - Flat square icon */}
              <div className="pt-8 border-t border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 border border-accent/50 flex items-center justify-center">
                  <Users size={18} className="text-accent-light" />
                </div>
                <p className="text-sm md:text-base text-white/80 font-medium">
                  Endorsed by community leaders across District 59
                </p>
              </div>
            </div>

            {/* Right Panel - Sharp Angular Frame */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-lg">
                {/* Main frame with clipped notched corners */}
                <div 
                  className="absolute inset-0 bg-white/5 border border-white/20 flex flex-col items-center justify-center overflow-hidden"
                  style={{
                    clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                  }}
                >
                  {/* Inner secondary triangle overlay */}
                  <svg className="absolute top-0 right-0 w-48 h-48" viewBox="0 0 200 200" preserveAspectRatio="none">
                    <polygon points="200,0 200,200 0,0" fill="currentColor" className="text-secondary/15" />
                  </svg>

                  {/* Three Stat Cards - Flat rectangles */}
                  <div className="relative z-10 w-full px-8 py-8 space-y-6">
                    {/* Card 1 - Secondary accent */}
                    <div className="bg-white/8 border border-white/15 px-6 py-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/80 flex items-center justify-center flex-shrink-0">
                          <Shield size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white/90 font-bold text-sm">Local Control</p>
                          <p className="text-white/70 text-xs mt-1">Protecting community decisions</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 - Accent */}
                    <div className="bg-white/8 border border-white/15 px-6 py-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/80 flex items-center justify-center flex-shrink-0">
                          <Leaf size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white/90 font-bold text-sm">Open Spaces</p>
                          <p className="text-white/70 text-xs mt-1">Preserving our heritage</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 - Primary-light */}
                    <div className="bg-white/8 border border-white/15 px-6 py-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-light/80 flex items-center justify-center flex-shrink-0">
                          <Users size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white/90 font-bold text-sm">Community Voice</p>
                          <p className="text-white/70 text-xs mt-1">Listening to you</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner bracket marks - L-shaped in secondary/70 */}
                  <svg className="absolute top-0 left-0 w-8 h-8 pointer-events-none" viewBox="0 0 32 32">
                    <line x1="0" y1="0" x2="20" y2="0" stroke="currentColor" strokeWidth="2" className="text-secondary/70" />
                    <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="2" className="text-secondary/70" />
                  </svg>
                  <svg className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none" viewBox="0 0 32 32">
                    <line x1="32" y1="32" x2="12" y2="32" stroke="currentColor" strokeWidth="2" className="text-secondary/70" />
                    <line x1="32" y1="32" x2="32" y2="12" stroke="currentColor" strokeWidth="2" className="text-secondary/70" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hard Diagonal Divider - No curves */}
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <polygon points="0,56 1440,0 1440,120 0,120" fill="white" />
      </svg>
    </section>
  );
};

export default Hero;
