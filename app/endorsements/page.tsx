import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';
import { Metadata } from 'next';
import { Sparkles, CheckCircle2, Heart, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Endorsements | Celeste Johnson for Utah House District 59',
  description: 'Read endorsements and testimonials for Celeste Johnson from community members across District 59.',
};

export default function EndorsementsPage() {
  const testimonials = [
    {
      quote: "Celeste's leadership as Mayor was remarkable. She always put the community first and made sure every voice was heard. I'm confident she'll bring that same dedication to the state legislature.",
      name: "Sarah M.",
      location: "Midway, UT"
    },
    {
      quote: "As a farmer, I appreciate Celeste's commitment to preserving agricultural land. She understands that our farmland isn't just property—it's our heritage and our future.",
      name: "Robert K.",
      location: "Heber City, UT"
    },
    {
      quote: "Celeste is accessible, honest, and genuinely cares about the people she represents. She's the kind of leader we need fighting for local control at the state level.",
      name: "Jennifer L.",
      location: "Charleston, UT"
    },
    {
      quote: "I've seen Celeste navigate tough decisions with grace and wisdom. She listens to all sides, considers the facts, and makes decisions based on what's best for the community.",
      name: "Michael T.",
      location: "Midway, UT"
    },
    {
      quote: "Our family has lived in District 59 for three generations. Celeste understands what makes this place special and will work tirelessly to protect it.",
      name: "Patricia H.",
      location: "Daniel, UT"
    },
    {
      quote: "Celeste's vision for smart growth and affordable housing shows she understands the challenges facing working families. She's pragmatic and solutions-oriented.",
      name: "David R.",
      location: "Heber City, UT"
    },
    {
      quote: "As a teacher in the district, I appreciate Celeste's commitment to education and community investment. She knows that strong communities need strong schools.",
      name: "Amanda S.",
      location: "Midway, UT"
    },
    {
      quote: "Celeste has proven she can bring people together to solve problems. Her collaborative leadership style is exactly what we need in these divided times.",
      name: "James B.",
      location: "Charleston, UT"
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
              <Heart size={16} className="text-secondary" />
              <span className="text-sm font-semibold text-white/90">Community Voices</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Endorsements
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
              Support and testimonials from across District 59
            </p>
          </div>
        </div>
      </section>

      {/* Formal Endorsements Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full border border-secondary/30 mx-auto mb-6">
              <Sparkles size={32} className="text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Official Endorsements
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-10 md:p-14 border border-neutral-200 hover:shadow-xl transition-all duration-300">
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                Endorsements coming soon. Check back as we build support across District 59 from 
                community leaders, organizations, and elected officials who share our vision for 
                community-focused leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8">
                <Heart size={16} className="text-accent" />
                <span className="text-sm font-semibold text-accent">Testimonials</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                What People Are Saying
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                Hear from community members who know Celeste and her commitment to 
                accessible, transparent leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  location={testimonial.location}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-primary-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Want to Endorse Celeste?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Join the growing list of community members supporting community-focused 
              leadership for District 59.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-3px] group"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
