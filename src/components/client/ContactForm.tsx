'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
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
      <div className="container-custom mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient-blue">Let's work together.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400">
            Or reach us via: <a href="mailto:hello@bluemoontales.com" className="text-gold-accent-400 hover:text-gold-accent-300 transition-colors">hello@bluemoontales.com</a>
          </p>
        </div>

        {/* Form and Image Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Form Section - Left Side */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="sr-only">
                First name
              </label>
              <div className="relative">
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  className="w-full px-4 py-4 rounded-xl glass-card bg-slate-900/50 text-white placeholder-slate-400 border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all"
                  placeholder="First name"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <div className="relative">
                <input
                  {...register('phone')}
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-4 rounded-xl glass-card bg-slate-900/50 text-white placeholder-slate-400 border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all"
                  placeholder="Phone number"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  className="w-full px-4 py-4 rounded-xl glass-card bg-slate-900/50 text-white placeholder-slate-400 border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all"
                  placeholder="Email"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Event Type Dropdown */}
            <div className="form-group">
              <label htmlFor="eventType" className="sr-only">
                Event Type
              </label>
              <div className="relative">
                <select
                  {...register('eventType')}
                  id="eventType"
                  className="w-full px-4 py-4 rounded-xl glass-card bg-slate-900/50 text-white border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="concert">Live Concert</option>
                  <option value="social">Social Event</option>
                  <option value="mice">MICE Event</option>
                  <option value="other">Other</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              {errors.eventType && (
                <p className="mt-2 text-sm text-red-400">{errors.eventType.message}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <div className="relative">
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl glass-card bg-slate-900/50 text-white placeholder-slate-400 border border-white/10 focus:border-blue-moon-400 focus:ring-2 focus:ring-blue-moon-400/20 outline-none transition-all resize-none"
                  placeholder="Message"
                />
                <span className="absolute right-4 top-4 text-slate-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            {/* Attachment Button and Submit */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span className="text-sm">Add attachment</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto px-8 py-4 rounded-xl bg-blue-moon-600 hover:bg-blue-moon-700 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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
                  'Send message'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300 text-center">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 text-center">
                ✗ Something went wrong. Please try again.
              </div>
            )}
          </form>

          {/* Image Section - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/images/contactform.png"
                alt="Contact us"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
