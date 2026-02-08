import { Link } from 'react-router-dom';
import { consultantCategories, whatYouGet } from '@/data/siteData';
import { CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';

export default function HireTalentPage() {
  return (
    <div data-testid="hire-talent-page">
      {/* Hero */}
      <section className="bg-okta-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">Find your perfect match</h1>
              <p className="font-montserrat text-base text-white/80 leading-relaxed">
                Explore our catalog of professional roles and even hire them right here.
              </p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-64 bg-okta-muted/20 rounded-2xl flex items-center justify-center border border-okta-muted/30">
                <Lightbulb size={80} className="text-okta-gold/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Consultants */}
      <section data-testid="explore-consultants" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-8">Explore Consultants</h2>
          <div className="flex flex-wrap gap-3">
            {consultantCategories.map((cat) => (
              <Link
                key={cat}
                to={`/service/${cat.toLowerCase().replace(/[\s/]+/g, '-')}`}
                data-testid={`consultant-cat-${cat.toLowerCase().replace(/[\s/]+/g, '-')}`}
                className="bg-okta-lighter text-okta-dark font-montserrat text-sm font-medium px-5 py-2.5 rounded-full hover:bg-okta-primary hover:text-white transition-all"
              >
                {cat}
              </Link>
            ))}
            <Link
              to="/consultants"
              className="bg-okta-gold text-okta-primary font-montserrat text-sm font-bold px-5 py-2.5 rounded-full hover:brightness-110 transition-all"
            >
              &amp; More
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section data-testid="what-you-get" className="py-16 bg-okta-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-8">What you'll get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatYouGet.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <CheckCircle size={18} className="text-okta-gold mt-0.5 flex-shrink-0" />
                <span className="font-montserrat text-sm text-okta-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find your next talent CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-4">Find your next talent</h2>
          <p className="font-montserrat text-sm text-okta-dark/60 mb-8">Book a 30-min consultation with us to activate your hiring needs</p>
          <Link
            to="/find-talent-form"
            data-testid="hire-talk-to-us-btn"
            className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
          >
            Talk to us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-okta-primary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-xl font-bold text-white mb-6">Take the first step towards smarter talent strategy</h2>
          <Link
            to="/find-talent-form"
            data-testid="hire-bottom-cta-btn"
            className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
          >
            Talk to us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
