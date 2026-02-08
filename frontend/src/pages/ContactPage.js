import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div data-testid="contact-page">
      {/* Hero */}
      <section className="bg-okta-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="font-montserrat text-base text-white/80 leading-relaxed mb-8">
                Schedule a 30-min call with our expert
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/find-talent-form"
                  data-testid="contact-find-talent-btn"
                  className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
                >
                  Find Talent <ArrowRight size={16} />
                </Link>
                <Link
                  to="/find-work-form"
                  data-testid="contact-find-work-btn"
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-montserrat font-bold text-sm px-8 py-3 rounded hover:bg-white/10 transition-all"
                >
                  Find Work <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-64 bg-okta-muted/20 rounded-2xl flex items-center justify-center border border-okta-muted/30">
                <Phone size={80} className="text-okta-gold/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OktaSkill CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-4">Why businesses trust OktaSkill</h2>
          <p className="font-montserrat text-sm text-okta-dark/60 mb-8 leading-relaxed max-w-xl mx-auto">
            OKT consulting over OktaSkill services. 100% Compliance check.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Attendance', 'Analytics', 'Efficiency'].map((item) => (
              <span key={item} className="bg-okta-lighter font-montserrat text-sm font-medium text-okta-dark px-6 py-2.5 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-okta-primary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-xl font-bold text-white mb-6">Still have questions?</h2>
          <Link
            to="/find-talent-form"
            data-testid="contact-bottom-cta-btn"
            className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
