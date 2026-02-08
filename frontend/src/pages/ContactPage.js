import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div data-testid="contact-page">
      {/* Hero - Get in Touch */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-okta-primary mb-4">Get in Touch</h1>
              <p className="font-montserrat text-base text-okta-dark/70 leading-relaxed mb-8">
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
                  className="inline-flex items-center gap-2 border-2 border-okta-primary text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:bg-okta-primary/5 transition-all"
                >
                  Find Work <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-64 bg-okta-primary/10 rounded-2xl flex items-center justify-center border border-okta-primary/20">
                <Phone size={80} className="text-okta-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
