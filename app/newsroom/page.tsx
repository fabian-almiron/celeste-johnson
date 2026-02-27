import NewsItem from '@/components/NewsItem';
import { Metadata } from 'next';
import { Mail, Phone, Download, Newspaper, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsroom | Celeste Johnson for Utah House District 59',
  description: 'Latest news, media coverage, and press releases from the Celeste Johnson campaign.',
};

export default function NewsroomPage() {
  const newsItems = [
    {
      title: "Former Midway Mayor Announces Run for House District 59",
      publication: "Park Record",
      date: "January 15, 2026",
      description: "Celeste Johnson, who served as Mayor of Midway from 2018 to 2023, has announced her candidacy for Utah House District 59. In her announcement, Johnson emphasized her commitment to community-focused leadership and local control over development decisions.",
      link: "#"
    },
    {
      title: "Local Leader Emphasizes Community Values in Campaign Launch",
      publication: "Wasatch Wave",
      date: "January 18, 2026",
      description: "At a campaign kickoff event in Midway, Celeste Johnson outlined her platform focused on preserving open space, supporting affordable housing, and protecting local government authority. Community members from across District 59 attended the event.",
      link: "#"
    },
    {
      title: "Johnson Touts Record on Open Space Preservation",
      publication: "Heber Valley Journal",
      date: "January 22, 2026",
      description: "Highlighting her work as Mayor, candidate Celeste Johnson pointed to several successful conservation easements and land preservation initiatives completed during her tenure. Agricultural advocates in the district have praised her commitment to protecting farmland.",
      link: "#"
    },
    {
      title: "Candidate Forum: Meet the Candidates for District 59",
      publication: "Utah Policy",
      date: "January 28, 2026",
      description: "Celeste Johnson participated in a candidate forum alongside other contenders for House District 59. She discussed her positions on local control, infrastructure investment, and transparent government, receiving positive feedback from attendees.",
      link: "#"
    },
    {
      title: "Former Mayor Highlights Smart Growth Policies in District 59 Race",
      publication: "Park Record",
      date: "February 1, 2026",
      description: "In a recent interview, Celeste Johnson explained her vision for balancing growth with community character. She emphasized the importance of giving local governments the tools and authority to manage development in ways that reflect local values.",
      link: "#"
    },
    {
      title: "Community Leaders Praise Johnson's Collaborative Approach",
      publication: "Wasatch Wave",
      date: "February 3, 2026",
      description: "Several community leaders from across District 59 have spoken out in support of Celeste Johnson's candidacy, citing her track record of bringing diverse stakeholders together to solve complex problems and her commitment to listening to all voices.",
      link: "#"
    }
  ];

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
              <Newspaper size={16} className="text-secondary" />
              <span className="text-sm font-semibold text-white/90">News & Media</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Newsroom
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
              Latest news and media coverage from the campaign
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
              
              {/* News Items - Main Column */}
              <div className="lg:col-span-2 animate-slideInLeft">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-8">
                  <CheckCircle2 size={16} className="text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Recent Coverage</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
                  Latest From the Campaign
                </h2>
                <div className="space-y-8">
                  {newsItems.map((item, index) => (
                    <NewsItem
                      key={index}
                      title={item.title}
                      publication={item.publication}
                      date={item.date}
                      description={item.description}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 animate-slideInRight">
                <div className="sticky top-24">
                  {/* Media Contact */}
                  <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-lg p-8 border border-neutral-200 mb-8 hover:shadow-xl transition-all duration-300">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 w-full justify-center">
                      <Sparkles size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-primary">For Press</span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      Media Contact
                    </h3>
                    <p className="text-neutral-700 mb-6 leading-relaxed text-sm font-medium">
                      For press inquiries, interview requests, or more information about the campaign:
                    </p>
                    
                    <div className="space-y-5 mb-8">
                      <div className="flex items-start gap-3">
                        <Mail size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-neutral-600 font-bold mb-1">Email</p>
                          <a
                            href="mailto:press@celestefordistrict59.com"
                            className="text-primary hover:text-primary-dark font-bold break-all text-sm"
                          >
                            press@celestefordistrict59.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-neutral-600 font-bold mb-1">Phone</p>
                          <a
                            href="tel:+14355551234"
                            className="text-primary hover:text-primary-dark font-bold text-sm"
                          >
                            (435) 555-1234
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-neutral-200 pt-8">
                      <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2 text-lg">
                        <Download size={20} className="text-secondary" />
                        Press Kit
                      </h4>
                      <p className="text-sm text-neutral-700 mb-6 leading-relaxed">
                        High-resolution photos, biography, and campaign materials.
                      </p>
                      <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]">
                        Download
                      </button>
                    </div>
                  </div>

                  {/* Newsletter signup CTA */}
                  <div className="bg-gradient-to-br from-accent/10 to-secondary/5 rounded-2xl p-6 border border-accent/30 text-center">
                    <h4 className="font-bold text-neutral-900 mb-3">Stay in the Loop</h4>
                    <p className="text-sm text-neutral-700 mb-4">
                      Get the latest campaign updates and news delivered to your inbox.
                    </p>
                    <Link 
                      href="/#newsletter"
                      className="inline-block bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Stay Updated
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 mb-10 leading-relaxed">
              Follow the campaign and receive the latest news and updates directly to your inbox.
            </p>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-3px] group"
            >
              Sign Up for Updates
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
