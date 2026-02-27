import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-[#2A4A7A] to-primary-light text-white overflow-hidden">
      {/* Decorative Background Elements - Modern Style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content - Bold and Animated */}
            <div className="flex flex-col justify-center animate-slideInLeft">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 w-fit">
                <Sparkles size={16} className="text-accent-light" />
                <span className="text-sm font-semibold text-white/90">Community-Focused Leadership</span>
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

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
                Leadership Rooted in Community Values
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed font-light max-w-lg">
                Bringing transparent, accessible leadership to Utah House District 59. Together, we'll protect what makes our communities special.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-y-[-3px] group"
                >
                  Join the Campaign 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Indicator */}
              <div className="pt-8 border-t border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center">
                  <Sparkles size={18} className="text-accent-light" />
                </div>
                <p className="text-sm md:text-base text-white/80 font-medium">
                  Endorsed by community leaders across District 59
                </p>
              </div>
            </div>

            {/* Right Side - Modern Visual Element */}
            <div className="hidden md:flex items-center justify-center animate-slideInRight">
              <div className="relative w-full aspect-square max-w-lg">
                {/* Animated card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                  {/* Inner animated gradient */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 animate-pulse"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="mb-8">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent shadow-lg">
                        <Sparkles size={56} className="text-white" />
                      </div>
                    </div>
                    <p className="text-white/90 font-bold text-lg md:text-xl">
                      Ready to Make a Difference?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 64C240 96 480 96 720 64C960 32 1200 32 1440 64V120H0Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
