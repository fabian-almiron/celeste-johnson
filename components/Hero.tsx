import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-light text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Campaign Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/campaign-logo.png"
              alt="Celeste Johnson for House District 59"
              width={400}
              height={200}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Celeste Johnson for House District 59
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Community-Focused Leadership
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join the Campaign
            </Link>
            <Link
              href="/about"
              className="bg-white hover:bg-neutral-100 text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
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
