import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle2, Heart, Award, Users, Mountain, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Celeste Johnson | Utah House District 59',
  description: 'Learn about Celeste Johnson, former Mayor of Midway and candidate for Utah House District 59.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Modern Page Hero */}
      <section className="relative bg-gradient-to-br from-primary via-[#2A4A7A] to-primary-light text-white py-20 md:py-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 backdrop-blur-md">
              <Heart size={16} className="text-secondary" />
              <span className="text-sm font-semibold text-white/90">Leadership Profile</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              About Celeste
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              A lifetime of service, leadership, and deep love for our community
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Pull Quote - Modern Style */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-secondary/30 rounded-3xl p-10 md:p-12 mb-16 md:mb-24 relative overflow-hidden">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <Sparkles size={32} className="text-secondary mb-4" />
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 italic leading-relaxed mb-6">
                  "My agenda is really about the community. I believe in listening first, 
                  and making decisions that reflect the values and needs of the people I serve."
                </blockquote>
                <p className="text-right text-neutral-700 font-bold text-lg">— Celeste Johnson</p>
              </div>
            </div>

            {/* Background Section */}
            <div className="mb-16 md:mb-24">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
                <CheckCircle2 size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Background</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
                Roots in Community Service
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed md:text-xl">
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
            <div className="mb-16 md:mb-24">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-8">
                <Award size={16} className="text-secondary" />
                <span className="text-sm font-semibold text-secondary">Leadership Record</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
                Leadership in Midway
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 mb-12 leading-relaxed">
                As Mayor of Midway, Celeste demonstrated the kind of leadership that our district 
                needs in the state legislature. Her accomplishments include:
              </p>
              
              {/* Achievement Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {[
                  {
                    icon: Mountain,
                    title: "Preserved Open Spaces and Farmland",
                    description: "Led initiatives to protect agricultural land from overdevelopment, working with landowners, conservation groups, and residents to maintain Midway's rural character while respecting property rights."
                  },
                  {
                    icon: Users,
                    title: "Managed Growth Responsibly",
                    description: "Navigated complex development decisions by prioritizing community input and ensuring that growth served residents rather than outside interests. Struck a balance between economic vitality and quality of life."
                  },
                  {
                    icon: CheckCircle2,
                    title: "Strengthened Local Partnerships",
                    description: "Built collaborative relationships with neighboring communities, county officials, and state agencies to address regional challenges like transportation, water resources, and infrastructure."
                  },
                  {
                    icon: Heart,
                    title: "Championed Transparent Leadership",
                    description: "Made government more accessible through regular town halls, open communication channels, and a commitment to explaining decisions clearly and honestly."
                  }
                ].map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="group bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 border border-neutral-200 hover:border-secondary/50 hover:translate-y-[-6px]">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={24} className="text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            {achievement.title}
                          </h3>
                          <p className="text-neutral-700 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Running for House District 59 Section */}
            <div className="mb-16 md:mb-24">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-semibold text-accent">Next Chapter</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
                Running for House District 59
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed md:text-xl">
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
            <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-10 md:p-14 border border-primary/20 mb-16 md:mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Heart size={28} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  Personal
                </h2>
              </div>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed md:text-xl">
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
            <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-10 md:p-14 border border-neutral-200">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Support Celeste's Campaign
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 mb-10 max-w-2xl mx-auto">
                Join us in bringing community-focused leadership to the Utah State Legislature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-3px] group"
                >
                  <CheckCircle2 size={20} />
                  Volunteer
                </Link>
                <Link
                  href="/issues"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary hover:bg-primary text-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 group"
                >
                  <Sparkles size={20} />
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
