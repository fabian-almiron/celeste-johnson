'use client';

import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Frontend only - simulate submission
    if (formData.name && formData.email && formData.message) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
          Name <span className="text-secondary">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
          Email <span className="text-secondary">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
          Phone (Optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="(123) 456-7890"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
          Message <span className="text-secondary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Tell us how you'd like to get involved or ask a question..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        Send Message
      </button>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Thank you for reaching out!</p>
          <p className="text-sm">We'll get back to you as soon as possible.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Please fill in all required fields.</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
