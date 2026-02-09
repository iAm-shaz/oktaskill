import { useParams, Link } from 'react-router-dom';
import { services } from '@/data/siteData';
import { ArrowRight, CheckCircle, TrendingUp, Cloud, Bot, GraduationCap, BarChart3, Layers, Brain, FileText, Users, Award, Sparkles, Megaphone } from 'lucide-react';
import { FadeIn } from '@/components/animations/Animate';

const iconMap = {
  TrendingUp, Cloud, Bot, GraduationCap, BarChart3, Layers, Brain, FileText, Users, Award, Sparkles, Megaphone
};

const slugAliases = {
  'generative-ai-trainer': 'generative-ai',
  'ai-ml-trainer': 'ai-trainer',
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const resolvedSlug = slugAliases[slug] || slug;
  const service = services.find((s) => s.slug === resolvedSlug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-montserrat text-2xl font-bold text-okta-primary mb-4">Service Not Found</h1>
          <Link to="/consultants" className="text-okta-gold font-montserrat text-sm font-semibold hover:underline">Browse all services</Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon];

  return (
    <div data-testid={`service-page-${slug}`}>
      <section className="bg-okta-primary text-white py-12 md:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="left">
            <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
            <p className="font-montserrat text-sm md:text-base text-white/80 leading-relaxed">{service.description}</p>
          </FadeIn>
        </div>
      </section>

      <section data-testid="why-hire-section" className="py-12 md:py-16 bg-okta-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-montserrat text-xl md:text-2xl font-bold text-okta-dark mb-8">Why hire this role?</h2>
          </FadeIn>
          <div className="space-y-6">
            {service.whyHire.map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div data-testid={`why-hire-item-${i}`} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-okta-primary mt-0.5 flex-shrink-0" />
                  <p className="font-montserrat text-sm md:text-base text-okta-dark leading-relaxed">
                    <span className="font-bold">{item.title}</span> &ndash; {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-okta-primary py-10 md:py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-montserrat text-xl font-bold text-white mb-2">Get in Touch</h2>
            <p className="font-montserrat text-sm text-white/70 mb-6">Schedule a 30 mins call with our expert</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/find-talent-form" data-testid="service-find-talent-btn"
                className="bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 hover:scale-105 transition-all duration-300">
                Find Talent
              </Link>
              <Link to="/find-work-form" data-testid="service-find-work-btn"
                className="border-2 border-white text-white font-montserrat font-bold text-sm px-8 py-3 rounded hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Find Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
