import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Celeste Johnson | Utah House District 59',
  description: 'Learn about Celeste Johnson, former Mayor of Midway and candidate for Utah House District 59.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Celeste
            </h1>
            <p className="text-xl text-blue-100">
              A lifetime of service, leadership, and love for our community
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Pull Quote */}
            <div className="bg-neutral-50 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
              <blockquote className="text-2xl font-semibold text-neutral-800 italic">
                "My agenda is really about the community. I believe in listening first, 
                and making decisions that reflect the values and needs of the people I serve."
              </blockquote>
              <p className="text-right mt-4 text-neutral-600 font-medium">— Celeste Johnson</p>
            </div>

            {/* Background Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary mr-4 rounded"></span>
                Background
              </h2>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
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
            <div className="mb-12 bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary mr-4 rounded"></span>
                Leadership in Midway
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                As Mayor of Midway, Celeste demonstrated the kind of leadership that our district 
                needs in the state legislature. Her accomplishments include:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Preserved Open Spaces and Farmland
                    </h3>
                    <p className="text-neutral-700">
                      Led initiatives to protect agricultural land from overdevelopment, working 
                      with landowners, conservation groups, and residents to maintain Midway's 
                      rural character while respecting property rights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Managed Growth Responsibly
                    </h3>
                    <p className="text-neutral-700">
                      Navigated complex development decisions by prioritizing community input and 
                      ensuring that growth served residents rather than outside interests. Struck a 
                      balance between economic vitality and quality of life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Strengthened Local Partnerships
                    </h3>
                    <p className="text-neutral-700">
                      Built collaborative relationships with neighboring communities, county 
                      officials, and state agencies to address regional challenges like 
                      transportation, water resources, and infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Championed Transparent Leadership
                    </h3>
                    <p className="text-neutral-700">
                      Made government more accessible through regular town halls, open communication 
                      channels, and a commitment to explaining decisions clearly and honestly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Running for House District 59 Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary mr-4 rounded"></span>
                Running for House District 59
              </h2>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
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
            <div className="bg-primary-light text-white p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Personal
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
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
            <div className="text-center bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Support Celeste's Campaign
              </h2>
              <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
                Join us in bringing community-focused leadership to the Utah State Legislature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Volunteer
                </Link>
                <Link
                  href="/issues"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
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
