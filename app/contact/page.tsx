import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact | Celeste Johnson for Utah House District 59',
  description: 'Get in touch with the Celeste Johnson campaign. Volunteer, ask questions, or learn how you can help.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100">
              We'd love to hear from you. Let's work together to build a better future for District 59.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-neutral-700 mb-8">
                  Whether you want to volunteer, have a question about our campaign, or just want to 
                  share your thoughts, we'd love to hear from you. Fill out the form below and we'll 
                  get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              {/* Campaign Information */}
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Campaign Information
                </h2>
                
                <div className="space-y-6">
                  
                  {/* Email */}
                  <div className="bg-neutral-50 p-6 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">
                        <FaEnvelope size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2">Email</h3>
                        <a
                          href="mailto:contact@celestefordistrict59.com"
                          className="text-primary hover:text-primary-dark transition-colors"
                        >
                          contact@celestefordistrict59.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mailing Address */}
                  <div className="bg-neutral-50 p-6 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">
                        <FaMapMarkerAlt size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-900 mb-2">Mailing Address</h3>
                        <address className="text-neutral-700 not-italic">
                          Celeste Johnson for House District 59<br />
                          P.O. Box 1234<br />
                          Midway, UT 84049
                        </address>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-neutral-50 p-6 rounded-xl">
                    <h3 className="font-bold text-neutral-900 mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white hover:bg-neutral-100 text-neutral-700 hover:text-primary px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                        aria-label="Visit our Facebook page"
                      >
                        <FaFacebook size={24} className="text-primary" />
                        <span className="font-medium">Facebook</span>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white hover:bg-neutral-100 text-neutral-700 hover:text-primary px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                        aria-label="Visit our Instagram page"
                      >
                        <FaInstagram size={24} className="text-primary" />
                        <span className="font-medium">Instagram</span>
                      </a>
                    </div>
                  </div>

                  {/* Volunteer CTA */}
                  <div className="bg-primary text-white p-6 rounded-xl">
                    <h3 className="font-bold text-xl mb-3">
                      Ready to Get Involved?
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Join our team of volunteers and help bring community-focused leadership to 
                      the state legislature. Whether you can knock on doors, make phone calls, or 
                      help spread the word, every contribution makes a difference.
                    </p>
                    <p className="text-blue-100 text-sm">
                      Use the contact form to let us know how you'd like to help!
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be enhanced later) */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Serving Utah House District 59
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              District 59 includes Midway, Heber City, Charleston, Daniel, and surrounding communities 
              in Wasatch County. Celeste is committed to representing every voice in our district.
            </p>
            <div className="bg-white rounded-xl shadow-md p-8 border border-neutral-200">
              <p className="text-neutral-600">
                Interactive map coming soon. For now, learn more about District 59 at the 
                <a 
                  href="https://le.utah.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-semibold ml-1"
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
