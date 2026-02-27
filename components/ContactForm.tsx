'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted && (
        <div className="bg-gradient-to-r from-accent/10 to-green-50 border border-accent/30 text-accent-dark px-6 py-4 rounded-xl flex items-start gap-4 animate-slideUp shadow-sm">
          <CheckCircle size={24} className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Thank you for reaching out!</p>
            <p className="text-sm text-neutral-600">We'll get back to you as soon as possible.</p>
          </div>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-neutral-900 mb-3">
          Full Name <span className="text-secondary">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-5 py-3.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-neutral-50 focus:bg-white font-medium"
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-neutral-900 mb-3">
          Email Address <span className="text-secondary">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-5 py-3.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-neutral-50 focus:bg-white font-medium"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-bold text-neutral-900 mb-3">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-5 py-3.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-neutral-50 focus:bg-white font-medium"
          placeholder="(123) 456-7890"
        />
      </div>

      {/* Interest Field */}
      <div>
        <label htmlFor="interest" className="block text-sm font-bold text-neutral-900 mb-3">
          How can we help? <span className="text-secondary">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          required
          className="w-full px-5 py-3.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-neutral-50 focus:bg-white font-medium appearance-none cursor-pointer"
        >
          <option value="">Select an option</option>
          <option value="volunteer">I want to volunteer</option>
          <option value="question">I have a question</option>
          <option value="endorsement">I want to endorse Celeste</option>
          <option value="event">I want to host an event</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-neutral-900 mb-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-5 py-3.5 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-neutral-50 focus:bg-white font-medium resize-none"
          placeholder="Tell us more about how you'd like to help..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group disabled:hover:shadow-lg"
      >
        {isSubmitting ? (
          <>
            <span className="inline-block animate-spin">⌛</span> Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </>
        )}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        <span className="text-secondary">*</span> Required fields • We respect your privacy
      </p>
    </form>
  );
};

export default ContactForm;
