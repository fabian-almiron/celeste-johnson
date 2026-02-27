import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, Heart, Award, Users, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Celeste Johnson | Utah House District 59',
  description: 'Learn about Celeste Johnson, former Mayor of Midway and candidate for Utah House District 59.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About Celeste
            </h1>
            <p className="text-xl text-blue-100">
              A lifetime of service, leadership, and love for our community
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Pull Quote */}
            <div className="bg-neutral-50 border-l-4 border-secondary p-8 mb-12 md:mb-16 rounded-r-xl">
              <blockquote className="text-2xl md:text-3xl font-semibold text-neutral-800 italic">
                "My agenda is really about the community. I believe in listening first, 
                and making decisions that reflect the values and needs of the people I serve."
              </blockquote>
              <p className="text-right mt-6 text-neutral-600 font-medium">— Celeste Johnson</p>
            </div>

            {/* Background Section */}
            <div className="mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 flex items-center">
                <span className="w-1 h-10 bg-primary mr-4 rounded"></span>
                Background
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Celeste Johnson has deep roots in Utah, with a lifelong commitment to building 
                  and strengthening communities. Her background in public service, local government, 
                  and community organizing has given her a unique perspective on the challenges 
                  facing families in our region.
                </p>
                <p>
                  Growing up with a love for the outdoors and a deep appreciation for Utah's natural 
                  beauty, Celeste has always been drawn to work that protects and preserves what 
                  makes our state special. Her education and career have focused on sustainable 
                  development, community planning, and collaborative leadership—skills she has put 
                  to work throughout her time in public service.
                </p>
                <p>
                  Celeste and her family call Midway home, where they enjoy the tight-knit community, 
                  stunning landscapes, and access to outdoor recreation. She understands firsthand 
                  what it means to balance growth with preservation, and why local voices must be 
                  heard in decisions that affect our daily lives.
                </p>
              </div>
            </div>

            {/* Leadership in Midway Section */}
            <div className="mb-16 md:mb-20 bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10 flex items-center">
                <span className="w-1 h-10 bg-primary mr-4 rounded"></span>
                Leadership in Midway
              </h2>
              <p className="text-lg text-neutral-700 mb-10 leading-relaxed">
                As Mayor of Midway, Celeste demonstrated the kind of leadership that our district 
                needs in the state legislature. Her accomplishments include:
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                      Preserved Open Spaces and Farmland
                    </h3>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Led initiatives to protect agricultural land from overdevelopment, working 
                      with landowners, conservation groups, and residents to maintain Midway's 
                      rural character while respecting property rights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                      Managed Growth Responsibly
                    </h3>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Navigated complex development decisions by prioritizing community input and 
                      ensuring that growth served residents rather than outside interests. Struck a 
                      balance between economic vitality and quality of life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                      Strengthened Local Partnerships
                    </h3>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Built collaborative relationships with neighboring communities, county 
                      officials, and state agencies to address regional challenges like 
                      transportation, water resources, and infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                      Championed Transparent Leadership
                    </h3>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Made government more accessible through regular town halls, open communication 
                      channels, and a commitment to explaining decisions clearly and honestly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Running for House District 59 Section */}
            <div className="mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 flex items-center">
                <span className="w-1 h-10 bg-primary mr-4 rounded"></span>
                Running for House District 59
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Celeste is running for the Utah House of Representatives because she believes that 
                  the state legislature needs leaders who understand local communities and will fight 
                  to preserve local control. Too often, decisions that deeply affect cities and 
                  counties are made in Salt Lake City without adequate input from the people who live 
                  with the consequences.
                </p>
                <p>
                  Her vision for House District 59 includes standing up for smart growth policies 
                  that respect community character, protecting open space and agricultural land from 
                  unnecessary development, ensuring that affordable housing solutions are developed 
                  locally rather than imposed from above, and investing in infrastructure that 
                  supports safe, accessible transportation.
                </p>
                <p>
                  Most importantly, Celeste is committed to representing all residents of District 59 
                  with transparency, accessibility, and integrity. She will be a legislator who 
                  listens, who is available, and who makes decisions based on what's best for the 
                  community—not what's best for special interests.
                </p>
              </div>
            </div>

            {/* Personal Section */}
            <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 md:p-12 rounded-2xl mb-16 md:mb-20 border border-primary-light">
              <div className="flex gap-4 items-start mb-6">
                <Heart size={32} className="flex-shrink-0 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Personal
                </h2>
              </div>
              <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                <p>
                  When she's not working on community issues, Celeste enjoys hiking, skiing, and 
                  exploring Utah's incredible public lands with her family. She's an active member 
                  of local organizations dedicated to conservation, education, and community building.
                </p>
                <p>
                  Her connection to this place runs deep—from the peaks of the Wasatch to the valleys 
                  where families have farmed for generations. That connection drives everything she 
                  does in public service.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Support Celeste's Campaign
              </h2>
              <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
                Join us in bringing community-focused leadership to the Utah State Legislature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <CheckCircle size={20} className="mr-2" />
                  Volunteer
                </Link>
                <Link
                  href="/issues"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <CheckCircle size={20} className="mr-2" />
                  View Issues
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
