import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-light text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              {/* Campaign Logo */}
              <div className="mb-6 md:mb-8">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Community-Focused Leadership
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                Bringing the values of Midway to the Utah State Legislature. Vote Celeste Johnson for House District 59.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                >
                  Join the Campaign <ArrowRight size={20} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-blue-300 flex items-center gap-3">
                <Heart size={20} className="text-secondary" />
                <p className="text-sm md:text-base text-blue-100">
                  Endorsed by community leaders and local organizations
                </p>
              </div>
            </div>

            {/* Right Side - Illustration Placeholder */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Heart size={64} className="text-secondary" />
                    </div>
                    <p className="text-white/80 font-semibold">
                      Community Leadership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
