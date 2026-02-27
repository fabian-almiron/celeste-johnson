import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { Mail, MapPin, Facebook, Instagram, MessageSquare, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Celeste Johnson for Utah House District 59',
  description: 'Get in touch with the Celeste Johnson campaign. Volunteer, ask questions, or learn how you can help.',
};

export default function ContactPage() {
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
              <MessageSquare size={16} className="text-secondary" />
              <span className="text-sm font-semibold text-white/90">Get in Touch</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
              We'd love to hear from you. Let's work together to build a better future for District 59.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              
              {/* Contact Form */}
              <div className="animate-slideInLeft">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-6">
                  <CheckCircle2 size={16} className="text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Send a Message</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
                  Send Us a Message
                </h2>
                <p className="text-neutral-700 mb-10 text-lg leading-relaxed">
                  Whether you want to volunteer, have a question about our campaign, or just want to 
                  share your thoughts, we'd love to hear from you. Fill out the form below and we'll 
                  get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              {/* Campaign Information */}
              <div className="animate-slideInRight">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-semibold text-primary">Contact Details</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10 leading-tight">
                  Campaign Information
                </h2>
                
                <div className="space-y-6">
                  
                  {/* Email */}
                  <div className="group bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-8 border border-neutral-200 hover:border-secondary/50 hover:translate-y-[-6px]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Mail size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2 text-lg">Email</h3>
                        <a
                          href="mailto:contact@celestefordistrict59.com"
                          className="text-primary hover:text-primary-dark transition-colors font-medium text-base"
                        >
                          contact@celestefordistrict59.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mailing Address */}
                  <div className="group bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-8 border border-neutral-200 hover:border-secondary/50 hover:translate-y-[-6px]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2 text-lg">Mailing Address</h3>
                        <address className="text-neutral-700 not-italic text-sm leading-relaxed font-medium">
                          Celeste Johnson for House District 59<br />
                          P.O. Box 1234<br />
                          Midway, UT 84049
                        </address>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="group bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-8 border border-neutral-200 hover:border-neutral-300">
                    <h3 className="font-bold text-neutral-900 mb-4 text-lg flex items-center gap-2">
                      <Sparkles size={20} className="text-primary" />
                      Connect With Us
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white border-2 border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white text-neutral-700 px-6 py-3 rounded-lg transition-all duration-300 font-bold text-sm"
                        aria-label="Visit our Facebook page"
                      >
                        <Facebook size={20} />
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white border-2 border-neutral-300 hover:border-secondary hover:bg-secondary hover:text-white text-neutral-700 px-6 py-3 rounded-lg transition-all duration-300 font-bold text-sm"
                        aria-label="Visit our Instagram page"
                      >
                        <Instagram size={20} />
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>

                  {/* Volunteer CTA */}
                  <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl p-8 border border-primary-light shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex gap-4 items-start">
                      <MessageSquare size={28} className="flex-shrink-0 text-secondary" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Ready to Get Involved?
                        </h3>
                        <p className="text-white/90 mb-4 text-sm leading-relaxed font-medium">
                          Join our team of volunteers and help bring community-focused leadership to 
                          the state legislature. Whether you can knock on doors, make phone calls, or 
                          help spread the word, every contribution makes a difference.
                        </p>
                        <p className="text-white/80 text-xs font-medium">
                          👉 Use the contact form to let us know how you'd like to help!
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8">
              <CheckCircle2 size={16} className="text-accent" />
              <span className="text-sm font-semibold text-accent">District Info</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Serving Utah House District 59
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 mb-10 leading-relaxed max-w-2xl mx-auto">
              District 59 includes Midway, Heber City, Charleston, Daniel, and surrounding communities 
              in Wasatch County. Celeste is committed to representing every voice in our district.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-neutral-200 hover:shadow-xl transition-all duration-300">
              <p className="text-neutral-700 text-lg font-medium">
                For more information about District 59, visit the 
                <a 
                  href="https://le.utah.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-bold ml-2 inline-flex items-center gap-1"
                >
                  Utah State Legislature website
                  <span>→</span>
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
