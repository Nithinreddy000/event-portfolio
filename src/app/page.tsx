import dynamic from 'next/dynamic';
import Navigation from '@/components/server/Navigation';
import Footer from '@/components/server/Footer';

// Client components with dynamic imports for code splitting
const Hero = dynamic(() => import('@/components/client/Hero'), {
  loading: () => <div className="h-screen bg-slate-950" />,
});

const Services = dynamic(() => import('@/components/client/Services'), {
  loading: () => <div className="h-screen bg-slate-950" />,
});

const Portfolio = dynamic(() => import('@/components/client/Portfolio'), {
  loading: () => <div className="min-h-screen bg-slate-950" />,
});

const ContactForm = dynamic(() => import('@/components/client/ContactForm'), {
  loading: () => <div className="min-h-screen bg-slate-950" />,
});

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Contact Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
