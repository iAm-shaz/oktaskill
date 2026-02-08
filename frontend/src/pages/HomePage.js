import { Link } from 'react-router-dom';
import { services } from '@/data/siteData';
import { ArrowRight, TrendingUp, Cloud, Bot, GraduationCap, BarChart3, Layers, Brain, FileText, Users, Award, Sparkles, Megaphone } from 'lucide-react';
import { FadeIn, ScaleIn } from '@/components/animations/Animate';
import BrandCarousel from '@/components/BrandCarousel';

const iconMap = {
  TrendingUp, Cloud, Bot, GraduationCap, BarChart3, Layers, Brain, FileText, Users, Award, Sparkles, Megaphone
};

const trustedBrands = [
  { name: 'Simplilearn', logo: '/logos/simplilearn.png' },
  { name: 'Emeritus', logo: '/logos/emeritus.png' },
  { name: 'Knolskape', logo: '/logos/knolskape.png' },
  { name: 'Great Learning', logo: '/logos/great-learning.png' },
];

const topConsultants = [
  { name: 'Nikhil Yadav', role: 'AI/ML Expert', exp: '12+ years' },
  { name: 'Rithik Raj', role: 'Cloud Architect', exp: '10+ years' },
  { name: 'Nikhil Garg', role: 'Finance Consultant', exp: '15+ years' },
  { name: 'Rushikesh', role: 'SME AIML/BFSI', exp: '8+ years' },
];

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section data-testid="hero-section" className="bg-okta-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={0} direction="left">
                <p className="font-montserrat text-sm font-semibold text-okta-gold tracking-wider uppercase mb-3">Experts On-Demand</p>
              </FadeIn>
              <FadeIn delay={100} direction="left">
                <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Find Top Consultants &amp; Freelancers
                </h1>
              </FadeIn>
              <FadeIn delay={200} direction="left">
                <p className="font-montserrat text-base md:text-lg text-white/80 mb-8 leading-relaxed">
                  OktaSkill connects businesses with handpicked experts — 10x consultants and trainers trusted by Fortune 500 companies. Get the right talent, right when you need it.
                </p>
              </FadeIn>
              <FadeIn delay={300} direction="left">
                <div className="flex flex-wrap gap-4">
                  <Link to="/hire-talent" data-testid="hero-hire-talent-btn"
                    className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-6 py-3 rounded hover:brightness-110 hover:scale-105 transition-all duration-300">
                    Hire Talent <ArrowRight size={16} />
                  </Link>
                  <Link to="/find-work" data-testid="hero-find-work-btn"
                    className="inline-flex items-center gap-2 border-2 border-white text-white font-montserrat font-bold text-sm px-6 py-3 rounded hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    Find Work <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={200} direction="right">
              <div className="hidden md:flex justify-center">
                <div className="w-80 h-80 bg-okta-muted/20 rounded-2xl flex items-center justify-center border border-okta-muted/30 animate-float">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-okta-gold/20 rounded-full flex items-center justify-center">
                      <Users size={48} className="text-okta-gold" />
                    </div>
                    <p className="font-montserrat font-semibold text-lg">Expert Network</p>
                    <p className="font-montserrat text-sm text-white/60 mt-1">500+ Verified Consultants</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industry We Serve */}
      <section data-testid="services-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-okta-primary text-center mb-3">Industry we serve</h2>
            <p className="font-montserrat text-sm text-okta-dark/60 text-center mb-12 max-w-2xl mx-auto">
              From AI and cloud computing to finance and leadership — we provide expert consultants across all domains.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <FadeIn key={service.slug} delay={i * 60}>
                  <Link to={`/service/${service.slug}`} data-testid={`service-card-${service.slug}`}
                    className="group bg-okta-lighter rounded-lg p-5 hover:bg-okta-primary hover:text-white transition-all duration-300 block hover:-translate-y-1 hover:shadow-lg">
                    <div className="w-10 h-10 bg-okta-primary/10 group-hover:bg-okta-gold/20 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300">
                      {Icon && <Icon size={20} className="text-okta-primary group-hover:text-okta-gold transition-colors duration-300" />}
                    </div>
                    <h3 className="font-montserrat font-bold text-sm mb-1">{service.title}</h3>
                    <p className="font-montserrat text-xs text-okta-dark/50 group-hover:text-white/70 transition-colors duration-300 leading-relaxed">{service.tagline}</p>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section data-testid="trusted-section" className="py-12 bg-okta-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-montserrat text-2xl font-bold text-okta-primary text-center mb-8">Trusted by leading brands &amp; startups</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedBrands.map((brand, i) => (
              <ScaleIn key={brand.name} delay={i * 100}>
                <div data-testid={`trusted-brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-lg w-[180px] h-[80px] shadow-sm flex items-center justify-center p-3 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300">
                  <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Top Consultants */}
      <section data-testid="consultants-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-okta-primary text-center mb-3">Our Top Consultants</h2>
            <p className="font-montserrat text-sm text-okta-dark/60 text-center mb-12">Meet our handpicked experts ready to solve your toughest challenges.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topConsultants.map((consultant, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div data-testid={`consultant-card-${i}`}
                  className="bg-okta-lighter rounded-lg overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="h-48 bg-okta-primary/10 flex items-center justify-center">
                    <div className="w-20 h-20 bg-okta-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users size={32} className="text-okta-primary/50" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-montserrat font-bold text-sm text-okta-dark">{consultant.name}</h3>
                    <p className="font-montserrat text-xs text-okta-primary mt-1">{consultant.role}</p>
                    <p className="font-montserrat text-xs text-okta-dark/50 mt-1">{consultant.exp} experience</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch CTA */}
      <section data-testid="cta-section" className="bg-okta-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="font-montserrat text-sm text-white/70 mb-8">Schedule a 30-min call with our expert</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/find-talent-form" data-testid="cta-find-talent-btn"
                className="bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 hover:scale-105 transition-all duration-300">
                Find Talent
              </Link>
              <Link to="/find-work-form" data-testid="cta-find-work-btn"
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
