import { Link } from 'react-router-dom';
import { freelancerCategories } from '@/data/siteData';
import { CheckCircle, Search, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations/Animate';

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
      <section className="bg-okta-primary text-white py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">Find great work</h1>
                <p className="font-montserrat text-base text-white/80 leading-relaxed">
                  Meet clients that you are excited to work with and take your career or business to new heights. Find opportunities for every stage of your freelance career.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="hidden md:flex justify-center">
                <div className="w-64 h-64 bg-okta-muted/20 rounded-2xl flex items-center justify-center border border-okta-muted/30 animate-float">
                  <Search size={80} className="text-okta-gold/60" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section data-testid="freelancer-categories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-3">The best colleagues you've never met</h2>
            <p className="font-montserrat text-sm text-okta-dark/60 mb-8">The work you want, all in one place</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {freelancerCategories.map((cat, i) => (
              <FadeIn key={cat} delay={i * 100}>
                <div data-testid={`freelancer-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-okta-lighter rounded-xl aspect-square flex flex-col items-center justify-center text-center hover:bg-okta-primary hover:text-white transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:shadow-lg p-6">
                  <div className="w-16 h-16 mb-4 bg-okta-primary/10 group-hover:bg-okta-gold/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Search size={24} className="text-okta-primary group-hover:text-okta-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-montserrat font-bold text-sm">{cat}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section data-testid="what-you-get-freelancer" className="py-16 bg-okta-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-8">What you'll get</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatYouGetFreelancer.map((item, i) => (
              <FadeIn key={item} delay={i * 50}>
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <CheckCircle size={18} className="text-okta-gold mt-0.5 flex-shrink-0" />
                  <span className="font-montserrat text-sm text-okta-dark">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-4">Share your next Talent</h2>
            <p className="font-montserrat text-sm text-okta-dark/60 mb-8">Book a 30-min consultation with us to activate your hiring needs</p>
            <Link to="/find-work-form" data-testid="findwork-talk-to-us-btn"
              className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 hover:scale-105 transition-all duration-300">
              Talk to us <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-okta-primary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-montserrat text-xl font-bold text-white mb-3">Have an expert project?</h2>
            <p className="font-montserrat text-sm text-white/70 mb-6">Share your profile and get matched with exciting opportunities</p>
            <Link to="/find-work-form" data-testid="findwork-bottom-cta-btn"
              className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 hover:scale-105 transition-all duration-300">
              Apply Now <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
