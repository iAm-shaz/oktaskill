import { Link } from 'react-router-dom';
import { services } from '@/data/siteData';
import { TrendingUp, Cloud, Bot, GraduationCap, BarChart3, Layers, Brain, FileText, Users, Award, Sparkles, Megaphone, ArrowRight } from 'lucide-react';

const iconMap = {
  TrendingUp, Cloud, Bot, GraduationCap, BarChart3, Layers, Brain, FileText, Users, Award, Sparkles, Megaphone
};

export default function ConsultantsPage() {
  return (
    <div data-testid="consultants-page">
      {/* Hero */}
      <section className="bg-okta-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">Discover Insights</h1>
          <p className="font-montserrat text-base text-white/80 max-w-2xl mx-auto">
            Explore our full range of expert consultants and find the right talent for your business needs.
          </p>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  to={`/service/${service.slug}`}
                  data-testid={`consultants-card-${service.slug}`}
                  className="group bg-okta-lighter rounded-lg p-6 hover:bg-okta-primary hover:text-white transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-okta-primary/10 group-hover:bg-okta-gold/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    {Icon && <Icon size={24} className="text-okta-primary group-hover:text-okta-gold transition-colors" />}
                  </div>
                  <h3 className="font-montserrat font-bold text-base mb-2">{service.title}</h3>
                  <p className="font-montserrat text-sm text-okta-dark/60 group-hover:text-white/70 transition-colors leading-relaxed">{service.tagline}</p>
                  <div className="mt-4 flex items-center gap-1 text-okta-gold font-montserrat text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-okta-primary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-xl font-bold text-white mb-3">Can't find what you're looking for?</h2>
          <p className="font-montserrat text-sm text-white/70 mb-6">Get in touch and let us find the right expert for you</p>
          <Link
            to="/contact"
            data-testid="consultants-cta-btn"
            className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
