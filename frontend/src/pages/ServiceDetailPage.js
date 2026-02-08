import { useParams, Link } from 'react-router-dom';
import { services } from '@/data/siteData';
import { ArrowRight, TrendingUp, Cloud, Bot, GraduationCap, BarChart3, Layers, Brain, FileText, Users, Award, Sparkles, Megaphone } from 'lucide-react';

const iconMap = {
  TrendingUp, Cloud, Bot, GraduationCap, BarChart3, Layers, Brain, FileText, Users, Award, Sparkles, Megaphone
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-montserrat text-2xl font-bold text-okta-primary mb-4">Service Not Found</h1>
          <Link to="/consultants" className="text-okta-gold font-montserrat text-sm font-semibold hover:underline">
            Browse all services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon];

  return (
    <div data-testid={`service-page-${slug}`}>
      {/* Hero */}
      <section className="bg-okta-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
              <p className="font-montserrat text-base text-white/80 leading-relaxed mb-6">{service.tagline}</p>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-64 h-64 bg-okta-muted/20 rounded-2xl flex items-center justify-center border border-okta-muted/30">
                {Icon && <Icon size={80} className="text-okta-gold/60" />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why hire this role - placeholder */}
      <section data-testid="why-hire-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-2xl font-bold text-okta-primary mb-6">Why hire this role?</h2>
          <p className="font-montserrat text-sm text-okta-dark/60 italic">
            Detailed content for this role will be updated soon. Contact us to learn more about our {service.title} experts.
          </p>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="bg-okta-primary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat text-xl font-bold text-white mb-3">Get in Touch</h2>
          <p className="font-montserrat text-sm text-white/70 mb-6">Schedule a 30-min call with our expert</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/find-talent-form"
              data-testid="service-find-talent-btn"
              className="bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 transition-all"
            >
              Find Talent
            </Link>
            <Link
              to="/find-work-form"
              data-testid="service-find-work-btn"
              className="border-2 border-white text-white font-montserrat font-bold text-sm px-8 py-3 rounded hover:bg-white/10 transition-all"
            >
              Find Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
