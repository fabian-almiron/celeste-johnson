import Hero from '@/components/Hero';
import PriorityCard from '@/components/PriorityCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import Link from 'next/link';
import { Trees, Home as HomeIcon, Navigation2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Introduction Section - Modern Layout */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8 mx-auto">
              <CheckCircle2 size={16} className="text-accent" />
              <span className="text-sm font-semibold text-accent">Meet Your Candidate</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 md:mb-12 text-center leading-tight">
              Leadership Rooted in Community
            </h2>

            <div className="text-lg text-neutral-700 space-y-6 leading-relaxed md:text-center">
              <p className="md:text-xl">
                As the former Mayor of Midway, Utah, Celeste Johnson has proven her commitment to 
                community-focused leadership and preserving the values that make our area special. 
                During her tenure, she championed open space preservation, managed responsible growth, 
                and strengthened partnerships between local government and residents.
              </p>
              <p className="md:text-xl">
                Now, Celeste is running for Utah House District 59 to bring that same dedication to 
                the state legislature. She believes in empowering local communities to make their own 
                decisions, protecting our beautiful landscapes and agricultural heritage, and ensuring 
                that every voice is heard in the halls of government.
              </p>
              <p className="md:text-xl font-semibold text-primary">
                Her agenda is simple: listen to the community, stand up for local control, and make 
                decisions that benefit everyone—not just special interests.
              </p>
            </div>
            
            <div className="text-center mt-12 md:mt-16">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-3px] group"
              >
                Learn More About Celeste 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Priorities Section - Modern Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-6 mx-auto">
                <CheckCircle2 size={16} className="text-secondary" />
                <span className="text-sm font-semibold text-secondary">Campaign Platform</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Key Priorities
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Celeste's campaign focuses on protecting what makes our community special while 
                ensuring responsible growth and accessible leadership.
              </p>
            </div>
            
            {/* Priority Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
              <PriorityCard
                icon={<Trees size={48} />}
                title="Open Space Preservation"
                description="Protect our farmland and open spaces from overdevelopment. Preserve the rural character that defines our community and maintains our quality of life."
              />
              <PriorityCard
                icon={<HomeIcon size={48} />}
                title="Local Control & Smart Growth"
                description="Empower local governments to make decisions about their own communities. Resist state overreach and ensure residents have a voice in development."
              />
              <PriorityCard
                icon={<Navigation2 size={48} />}
                title="Infrastructure & Housing"
                description="Support responsible infrastructure investment and diverse housing options that serve working families without sacrificing community character."
              />
            </div>

            {/* CTA Below Cards */}
            <div className="text-center mt-16 md:mt-20">
              <p className="text-neutral-600 mb-6 text-lg">
                Want to dive deeper into the issues?
              </p>
              <Link
                href="/issues"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary hover:bg-primary text-primary hover:text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              >
                Explore All Issues
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
}
