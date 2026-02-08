import { Link } from 'react-router-dom';
import { freelancerCategories } from '@/data/siteData';
import { CheckCircle, Search, ArrowRight } from 'lucide-react';

const whatYouGetFreelancer = [
  'Discover quality talent',
  'Get what you pay for',
  'Dedicated account manager',
  'Customized solutions',
  'Security and safety',
  'Faster turnaround',
  'Dedicated support',
  'Higher retention rates',
];

export default function FindWorkPage() {
  return (
    <div data-testid="find-work-page">
      {/* Hero */}
      <section className="bg-okta-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">Find great work</h1>
              <p className="font-montserrat text-base text-white/80 leading-relaxed">
                We unite the world's trusted professionals. The tools you need, all in one place.
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-64 bg-okta-muted/20 rounded-2xl flex items-center justify-center border border-okta-muted/30">
                <Search size={80} className="text-okta-gold/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section data-testid="freelancer-categories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-3">The best colleagues you've never met</h2>
          <p className="font-montserrat text-sm text-okta-dark/60 mb-8">The tools you need, all in one place</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {freelancerCategories.map((cat) => (
              <div
                key={cat}
                data-testid={`freelancer-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-okta-lighter rounded-lg p-6 text-center hover:bg-okta-primary hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-okta-primary/10 group-hover:bg-okta-gold/20 rounded-lg flex items-center justify-center transition-colors">
                  <Search size={20} className="text-okta-primary group-hover:text-okta-gold transition-colors" />
                </div>
                <h3 className="font-montserrat font-bold text-sm">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section data-testid="what-you-get-freelancer" className="py-16 bg-okta-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-8">What you'll get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatYouGetFreelancer.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <CheckCircle size={18} className="text-okta-gold mt-0.5 flex-shrink-0" />
                <span className="font-montserrat text-sm text-okta-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-4">Share your next Talent</h2>
          <p className="font-montserrat text-sm text-okta-dark/60 mb-8">Book a 30-min consultation with us to activate your hiring needs</p>
          <Link
            to="/find-work-form"
            data-testid="findwork-talk-to-us-btn"
            className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
          >
            Talk to us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-okta-primary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-xl font-bold text-white mb-3">Have an expert project?</h2>
          <p className="font-montserrat text-sm text-white/70 mb-6">Share your profile and get matched with exciting opportunities</p>
          <Link
            to="/find-work-form"
            data-testid="findwork-bottom-cta-btn"
            className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
          >
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
