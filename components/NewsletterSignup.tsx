'use client';

import { useState, FormEvent } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';

const NewsletterSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="newsletter" className="bg-gradient-to-br from-primary via-[#2A4A7A] to-primary-light text-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-accent/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
              <Mail size={28} className="text-accent-light" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Stay in the Loop
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Get the latest updates on Celeste's campaign, upcoming events, and important news from District 59 delivered straight to your inbox.
            </p>
          </div>

          {/* Form or Success State */}
          {isSubmitted ? (
            <div className="animate-slideUp">
              <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-accent/50 rounded-2xl px-6 md:px-10 py-6 md:py-8 shadow-xl">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-light/20 flex items-center justify-center">
                  <CheckCircle size={28} className="text-accent-light" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Thanks for subscribing!</p>
                  <p className="text-white/80 text-sm">Check your email for a confirmation and our latest updates.</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-slideUp">
              <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 sm:p-2 focus-within:ring-2 focus-within:ring-accent/50 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/60 font-medium focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed hover:translate-y-[-2px] flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>Subscribing...</>
                  ) : (
                    <>
                      <Send size={18} />
                      <span className="hidden sm:inline">Subscribe</span>
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-sm text-white/70 mt-6 text-center">
                We respect your privacy. You can unsubscribe at any time. No spam, just important campaign updates.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
