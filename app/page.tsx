import Hero from '@/components/Hero';
import PriorityCard from '@/components/PriorityCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import Link from 'next/link';
import { Trees, Home, Road, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 md:mb-12 text-center">
              Leadership Rooted in Community
            </h2>
            <div className="text-lg text-neutral-700 space-y-6 leading-relaxed">
              <p>
                As the former Mayor of Midway, Utah, Celeste Johnson has proven her commitment to 
                community-focused leadership and preserving the values that make our area special. 
                During her tenure, she championed open space preservation, managed responsible growth, 
                and strengthened partnerships between local government and residents.
              </p>
              <p>
                Now, Celeste is running for Utah House District 59 to bring that same dedication to 
                the state legislature. She believes in empowering local communities to make their own 
                decisions, protecting our beautiful landscapes and agricultural heritage, and ensuring 
                that every voice is heard in the halls of government.
              </p>
              <p>
                Her agenda is simple: listen to the community, stand up for local control, and make 
                decisions that benefit everyone—not just special interests.
              </p>
            </div>
            <div className="text-center mt-10 md:mt-12">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
              >
                Learn More About Celeste <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Priorities Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                Key Priorities
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Celeste's campaign focuses on protecting what makes our community special while 
                ensuring responsible growth and accessible leadership.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <PriorityCard
                icon={<Trees size={48} />}
                title="Open Space Preservation"
                description="Protect our farmland and open spaces from overdevelopment. Preserve the rural character that defines our community and maintains our quality of life."
              />
              <PriorityCard
                icon={<Home size={48} />}
                title="Local Control & Smart Growth"
                description="Empower local governments to make decisions about their own communities. Resist state overreach and ensure residents have a voice in development."
              />
              <PriorityCard
                icon={<Road size={48} />}
                title="Infrastructure & Housing"
                description="Support responsible infrastructure investment and diverse housing options that serve working families without sacrificing community character."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
}
