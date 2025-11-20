'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContactFormData } from '@/types';

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10,15}$/, 'Phone number must be 10-15 digits'),
  eventType: z.string().min(1, 'Please select an event type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In production, replace with actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-slate-950 to-blue-moon-950" id="contact">
      <div className="container-custom mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient-blue">Get In Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400">
            Let's create something unforgettable together
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass-card-strong p-8 md:p-12 space-y-6"
        >
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
              Full Name *
            </label>
            <input
              {...register('name')}
              id="name"
              type="text"
              className="w-full px-4 py-3 rounded-lg glass-card bg-slate-900/50 text-white placeholder-slate-500 border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                Email Address *
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg glass-card bg-slate-900/50 text-white placeholder-slate-500 border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-300">
                Phone Number *
              </label>
              <input
                {...register('phone')}
                id="phone"
                type="tel"
                className="w-full px-4 py-3 rounded-lg glass-card bg-slate-900/50 text-white placeholder-slate-500 border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all"
                placeholder="1234567890"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Event Type Dropdown */}
          <div className="form-group">
            <label htmlFor="eventType" className="block text-sm font-medium mb-2 text-slate-300">
              Event Type *
            </label>
            <select
              {...register('eventType')}
              id="eventType"
              className="w-full px-4 py-3 rounded-lg glass-card bg-slate-900/50 text-white border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all"
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="concert">Live Concert</option>
              <option value="social">Social Event</option>
              <option value="mice">MICE Event</option>
              <option value="other">Other</option>
            </select>
            {errors.eventType && (
              <p className="mt-1 text-sm text-red-400">{errors.eventType.message}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
              Message *
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg glass-card bg-slate-900/50 text-white placeholder-slate-500 border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all resize-none"
              placeholder="Tell us about your event..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-center">
              ✓ Thank you! We'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-center">
              ✗ Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
