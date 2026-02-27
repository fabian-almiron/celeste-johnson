import IssueCard from '@/components/IssueCard';
import { Metadata } from 'next';
import { Trees, Scale, Home as HomeIcon, Navigation2, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Issues & Priorities | Celeste Johnson for Utah House District 59',
  description: 'Learn about Celeste Johnson\'s positions on open space preservation, local control, affordable housing, infrastructure, and transparent leadership.',
};

export default function IssuesPage() {
  return (
    <div className="bg-white">
      {/* Modern Page Hero */}
      <section className="relative bg-gradient-to-br from-primary via-[#2A4A7A] to-primary-light text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-md">
              <CheckCircle2 size={16} className="text-secondary" />
              <span className="text-sm font-semibold text-white/90">Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Issues & Priorities
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
              Community-focused solutions for the challenges facing District 59
            </p>
          </div>
        </div>
      </section>

      {/* Issue 1: Open Space & Farmland Preservation */}
      <IssueCard
        icon={<Trees size={64} />}
        title="Open Space & Farmland Preservation"
        quote="Our open spaces define who we are as a community"
        points={[
          'Protect agricultural land from overdevelopment by supporting conservation easements and land trusts',
          'Balance growth with preservation of rural character and natural landscapes',
          'Ensure development decisions respect the values and heritage of farming communities',
          'Fight for policies that recognize the economic and cultural importance of agriculture',
        ]}
        imagePosition="left"
        backgroundColor="bg-white"
      />

      {/* Issue 2: Local Control & Smart Growth */}
      <IssueCard
        icon={<Scale size={64} />}
        title="Local Control & Smart Growth"
        quote="My agenda is really about the community"
        points={[
          'Empower local governments to make decisions about their own communities',
          'Resist state overreach on zoning, land use, and development policies',
          'Ensure resident voices are heard in decisions that affect their neighborhoods',
          'Support smart growth that serves communities, not outside developers',
        ]}
        imagePosition="right"
        backgroundColor="bg-neutral-50"
      />

      {/* Issue 3: Affordable Housing */}
      <IssueCard
        icon={<HomeIcon size={64} />}
        title="Affordable Housing"
        quote="Everyone deserves a place to call home in the community they love"
        points={[
          'Support diverse housing options for working families, teachers, nurses, and first responders',
          'Encourage responsible development that fits community needs and character',
          'Address housing affordability without sacrificing quality of life or community input',
          'Resist one-size-fits-all mandates from the state that ignore local conditions',
        ]}
        imagePosition="left"
        backgroundColor="bg-white"
      />

      {/* Issue 4: Transportation & Infrastructure */}
      <IssueCard
        icon={<Navigation2 size={64} />}
        title="Transportation & Infrastructure"
        quote="Safe, accessible roads and transit benefit everyone"
        points={[
          'Invest in infrastructure that supports growth while maintaining safety and accessibility',
          'Improve road safety and traffic management in rapidly growing areas',
          'Explore alternative transit options that reduce congestion and improve connectivity',
          'Ensure state funding supports local infrastructure priorities',
        ]}
        imagePosition="right"
        backgroundColor="bg-neutral-50"
      />

      {/* Issue 5: Transparent, Inclusive Leadership */}
      <IssueCard
        icon={<Users size={64} />}
        title="Transparent, Inclusive Leadership"
        quote="Leadership means listening"
        points={[
          'Ensure open, accessible government where constituents can participate in decisions',
          'Regular communication through town halls, newsletters, and social media',
          'Collaborative approach to problem-solving that brings diverse voices to the table',
          'Accountability and transparency in how decisions are made and resources are allocated',
        ]}
        imagePosition="left"
        backgroundColor="bg-white"
      />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build a Better Future Together
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              These priorities reflect the values of our community. Join us in bringing 
              community-focused leadership to the state legislature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-3px] group"
              >
                Get Involved
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-primary px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                About Celeste
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
