import NewsItem from '@/components/NewsItem';
import { Metadata } from 'next';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

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
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Newsroom
            </h1>
            <p className="text-xl text-blue-100">
              Latest news and media coverage
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* News Items - Main Column */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
                  Recent Coverage
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
              <div className="lg:col-span-1">
                <div className="bg-neutral-50 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Media Contact
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    For press inquiries, interview requests, or more information about the campaign:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-neutral-600 mb-1">Email</p>
                        <a
                          href="mailto:press@celestefordistrict59.com"
                          className="text-primary hover:text-primary-dark font-medium break-all"
                        >
                          press@celestefordistrict59.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <FaPhone className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-neutral-600 mb-1">Phone</p>
                        <a
                          href="tel:+14355551234"
                          className="text-primary hover:text-primary-dark font-medium"
                        >
                          (435) 555-1234
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <h4 className="font-bold text-neutral-900 mb-3">
                      Download Press Kit
                    </h4>
                    <p className="text-sm text-neutral-600 mb-4">
                      High-resolution photos, biography, and campaign materials.
                    </p>
                    <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                      Download Kit
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-neutral-700 mb-8">
              Follow the campaign and receive the latest news and updates directly to your inbox.
            </p>
            <a
              href="/#newsletter"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
            >
              Sign Up for Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
