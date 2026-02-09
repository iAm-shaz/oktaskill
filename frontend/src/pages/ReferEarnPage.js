import { Link } from 'react-router-dom';
import { Gift, ArrowRight } from 'lucide-react';
import { FadeIn, ScaleIn } from '@/components/animations/Animate';

export default function ReferEarnPage() {
  return (
    <div data-testid="refer-earn-page">
      <section className="bg-okta-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <p className="font-montserrat text-sm font-semibold text-okta-gold tracking-wider uppercase mb-3">Refer &amp; Earn</p>
                <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Know someone who might be interested?
                </h1>
                <p className="font-montserrat text-base text-white/80 leading-relaxed mb-8">
                  Refer them and get rewarded. Know someone who might be interested in working with us? Refer them and get rewarded. Plus, get your first payment made.
                </p>
                <Link to="/contact" data-testid="refer-btn"
                  className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 hover:scale-105 transition-all duration-300">
                  Refer Now <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="hidden md:flex justify-center">
                <div className="w-72 h-72 bg-okta-muted/20 rounded-2xl flex items-center justify-center border border-okta-muted/30 animate-float">
                  <Gift size={100} className="text-okta-gold/50" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-montserrat text-2xl font-bold text-okta-primary text-center mb-12">How it works</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Share the opportunity', desc: 'Refer a friend or colleague who would be a great fit.' },
              { step: '02', title: 'They get matched', desc: 'We connect them with the right opportunities based on their skills.' },
              { step: '03', title: 'You get rewarded', desc: 'Once they start working, you earn your referral bonus.' },
            ].map((item, i) => (
              <ScaleIn key={item.step} delay={i * 150}>
                <div data-testid={`step-${item.step}`} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-okta-gold/10 rounded-full flex items-center justify-center animate-pulse-glow">
                    <span className="font-montserrat font-bold text-xl text-okta-gold">{item.step}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-okta-dark mb-2">{item.title}</h3>
                  <p className="font-montserrat text-sm text-okta-dark/60">{item.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-okta-primary py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-montserrat text-xl font-bold text-white mb-3">Refer &  Earn</h2>
            <p className="font-montserrat text-sm text-white/70 mb-6">Share your referral and earn rewards today</p>
            <Link to="/contact" data-testid="refer-bottom-cta-btn"
              className="inline-flex items-center gap-2 bg-okta-gold text-okta-primary font-montserrat font-bold text-sm px-8 py-3 rounded hover:brightness-110 hover:scale-105 transition-all duration-300">
              Refer Now <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
