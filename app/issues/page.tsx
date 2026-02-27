import IssueCard from '@/components/IssueCard';
import { Metadata } from 'next';
import { Trees, Scale, Home as HomeIcon, Navigation2, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Issues & Priorities | Celeste Johnson for Utah House District 59',
  description: 'Learn about Celeste Johnson\'s positions on open space preservation, local control, affordable housing, infrastructure, and transparent leadership.',
};

export default function IssuesPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Issues & Priorities
            </h1>
            <p className="text-xl text-blue-100">
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
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Build a Better Future Together
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              These priorities reflect the values of our community. Join us in bringing 
              community-focused leadership to the state legislature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
              >
                Get Involved
              </a>
              <a
                href="/about"
                className="bg-white hover:bg-neutral-100 text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                About Celeste
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
