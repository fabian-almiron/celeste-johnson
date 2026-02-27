import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { Mail, MapPin, Facebook, Instagram, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Celeste Johnson for Utah House District 59',
  description: 'Get in touch with the Celeste Johnson campaign. Volunteer, ask questions, or learn how you can help.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              We'd love to hear from you. Let's work together to build a better future for District 59.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
                  Whether you want to volunteer, have a question about our campaign, or just want to 
                  share your thoughts, we'd love to hear from you. Fill out the form below and we'll 
                  get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              {/* Campaign Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
                  Campaign Information
                </h2>
                
                <div className="space-y-6">
                  
                  {/* Email */}
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-secondary flex-shrink-0">
                        <Mail size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2 text-lg">Email</h3>
                        <a
                          href="mailto:contact@celestefordistrict59.com"
                          className="text-primary hover:text-primary-dark transition-colors font-medium"
                        >
                          contact@celestefordistrict59.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mailing Address */}
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-secondary flex-shrink-0">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2 text-lg">Mailing Address</h3>
                        <address className="text-neutral-700 not-italic text-sm leading-relaxed">
                          Celeste Johnson for House District 59<br />
                          P.O. Box 1234<br />
                          Midway, UT 84049
                        </address>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                    <h3 className="font-bold text-neutral-900 mb-4 text-lg">Connect With Us</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white border border-neutral-300 hover:border-secondary text-neutral-700 hover:text-secondary px-6 py-3 rounded-lg transition-all duration-200 font-medium text-sm"
                        aria-label="Visit our Facebook page"
                      >
                        <Facebook size={20} />
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white border border-neutral-300 hover:border-secondary text-neutral-700 hover:text-secondary px-6 py-3 rounded-lg transition-all duration-200 font-medium text-sm"
                        aria-label="Visit our Instagram page"
                      >
                        <Instagram size={20} />
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>

                  {/* Volunteer CTA */}
                  <div className="bg-gradient-to-br from-primary to-primary-light text-white p-6 rounded-xl border border-primary-light">
                    <div className="flex gap-4 items-start">
                      <MessageSquare size={28} className="flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Ready to Get Involved?
                        </h3>
                        <p className="text-blue-100 mb-3 text-sm leading-relaxed">
                          Join our team of volunteers and help bring community-focused leadership to 
                          the state legislature. Whether you can knock on doors, make phone calls, or 
                          help spread the word, every contribution makes a difference.
                        </p>
                        <p className="text-blue-100 text-xs">
                          Use the contact form to let us know how you'd like to help!
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* District Information Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Serving Utah House District 59
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              District 59 includes Midway, Heber City, Charleston, Daniel, and surrounding communities 
              in Wasatch County. Celeste is committed to representing every voice in our district.
            </p>
            <div className="bg-white rounded-xl shadow-md p-8 border border-neutral-200">
              <p className="text-neutral-600">
                For more information about District 59, visit the 
                <a 
                  href="https://le.utah.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-semibold ml-2"
                >
                  Utah State Legislature website
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
