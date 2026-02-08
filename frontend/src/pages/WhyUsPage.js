import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Zap, Users, Target, Award, Clock } from 'lucide-react';

const reasons = [
  { icon: Shield, title: 'Vetted Experts', desc: 'Every consultant is rigorously screened for expertise, communication, and reliability.' },
  { icon: Zap, title: 'Fast Matching', desc: 'Get matched with the right talent within 48 hours of your request.' },
  { icon: Users, title: 'Dedicated Support', desc: 'A dedicated account manager ensures smooth collaboration from start to finish.' },
  { icon: Target, title: 'Customized Solutions', desc: 'We tailor our approach to fit your specific business needs and goals.' },
  { icon: Award, title: 'Proven Track Record', desc: 'Trusted by leading brands and startups across industries worldwide.' },
  { icon: Clock, title: 'Flexible Engagement', desc: 'Hire full-time, part-time, or on a project basis — the choice is yours.' },
];

const stats = [
  { value: '500+', label: 'Verified Consultants' },
  { value: '100+', label: 'Happy Clients' },
  { value: '50+', label: 'Industries Served' },
  { value: '95%', label: 'Client Retention' },
];

export default function WhyUsPage() {
  return (
    <div data-testid="why-us-page">
      {/* Hero */}
      <section className="bg-okta-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">Why businesses trust OktaSkill</h1>
          <p className="font-montserrat text-base text-white/80 max-w-2xl mx-auto">
            OktaSkill connects you with handpicked, industry-leading consultants. We are building a smarter way to find and hire talent.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-okta-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`} className="text-center">
                <p className="font-montserrat text-3xl font-bold text-okta-primary">{stat.value}</p>
                <p className="font-montserrat text-sm font-medium text-okta-primary/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary text-center mb-12">What sets us apart</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} data-testid={`reason-${reason.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-okta-lighter rounded-lg p-6">
                  <div className="w-12 h-12 bg-okta-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-okta-primary" />
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-okta-dark mb-2">{reason.title}</h3>
                  <p className="font-montserrat text-sm text-okta-dark/60 leading-relaxed">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-okta-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary text-center mb-12">Trusted by leading brands &amp; startups</h2>
          <p className="font-montserrat text-sm text-okta-dark/60 text-center max-w-xl mx-auto mb-8">
            From Fortune 500 companies to fast-growing startups, OktaSkill has been the go-to platform for finding top-tier consultants and trainers.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['SimplyLearn', 'DigitalVidya', 'Coursera', 'Emeritus'].map((b) => (
              <div key={b} className="bg-white px-8 py-4 rounded-lg shadow-sm font-montserrat font-semibold text-sm text-okta-dark/60">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-okta-primary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-xl font-bold text-white mb-6">Ready to get started?</h2>
          <Link
            to="/contact"
            data-testid="whyus-cta-btn"
            className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
