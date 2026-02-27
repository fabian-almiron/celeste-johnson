import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';

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
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Endorsements
            </h1>
            <p className="text-xl text-blue-100">
              Support from across District 59
            </p>
          </div>
        </div>
      </section>

      {/* Formal Endorsements Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Sparkles size={40} className="text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Official Endorsements
            </h2>
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-neutral-200">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                What People Are Saying
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Hear from community members who know Celeste and her commitment to 
                accessible, transparent leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Want to Endorse Celeste?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the growing list of community members supporting community-focused 
              leadership for District 59.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
