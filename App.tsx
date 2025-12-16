import React from 'react';
import { Layout } from './components/Layout';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import AIChatWidget from './components/AIChatWidget';
import Background3D from './components/Background3D';
import { MissionVisionSection } from './components/MissionVisionSection';
import { BenefitsSection } from './components/BenefitsSection';
import { IntegrationEcosystem } from './components/IntegrationEcosystem';
import { AutomationSolutionsSection } from './components/AutomationSolutionsSection';
import { GetStartedSection } from './components/GetStartedSection';
import { FaqSection } from './components/FaqSection';
import { CONTENT } from './constants';
import { ArrowRight, Check, Workflow, Zap, Sparkles, BarChart3, Users, Trophy, Quote, ShieldCheck, Rocket, BrainCircuit } from 'lucide-react';

// --- Components ---

const SectionHeader = ({ title, subtitle, align = 'center' }: { title: string, subtitle: string, align?: 'center' | 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-6 tracking-tight leading-tight">{title}</h2>
    <p className="text-text-main text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">{subtitle}</p>
  </div>
);

const TrustStrip = ({ title }: { title: string }) => (
  <div className="py-12 border-y border-border/30 bg-surface/60 backdrop-blur-md">
    <div className="max-w-[1400px] mx-auto px-6 text-center">
      <p className="text-xs font-bold tracking-[0.2em] text-text-muted mb-8 uppercase">{title}</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Logo Placeholders - In production replace with SVGs */}
        <span className="text-xl font-bold font-sans tracking-tight text-white">STC</span>
        <span className="text-xl font-bold font-sans tracking-tight text-white">ARAMCO</span>
        <span className="text-xl font-bold font-sans tracking-tight text-white">NOON</span>
        <span className="text-xl font-bold font-sans tracking-tight text-white">TALABAT</span>
        <span className="text-xl font-bold font-sans tracking-tight text-white">EMAAR</span>
      </div>
    </div>
  </div>
);

// --- Sections ---

const HeroSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].hero;
  const isRTL = language === 'ar';

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cta/30 bg-cta/10 text-cta text-[11px] md:text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-cta/20 transition-colors">
            <Sparkles className="w-3 h-3" />
            {c.badge}
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1] max-w-5xl mx-auto drop-shadow-xl">
            {c.headline}
          </h1>

          <p className="text-lg md:text-2xl text-text-main mb-4 max-w-3xl mx-auto leading-relaxed font-light">
            {c.subheadline}
          </p>

          {/* Description */}
          {c.description && (
            <p className="text-base md:text-lg text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              {c.description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 rounded-full bg-cta text-white font-bold tracking-wide hover:bg-cta-hover transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-cta/25">
              {c.ctaPrimary}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
            <a href="#projects" className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              {c.ctaSecondary}
            </a>
          </div>

          {/* Microcopy */}
          <p className="mt-6 text-xs text-text-muted opacity-60">
            Free Discovery Call • No Pressure • Honest Advice
          </p>
        </div>
      </div>
    </section>
  );
};

const FeaturesStrip = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].featuresStrip;
  const icons = { BrainCircuit, Zap, ShieldCheck, Users, Workflow, Rocket, Heart: Users, Eye: ShieldCheck };

  return (
    <div className="py-24 bg-surface/40 backdrop-blur-md border-t border-border/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.items.map((item, idx) => {
            // @ts-ignore
            const Icon = icons[item.icon as keyof typeof icons] || Zap;
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mb-6 text-cta group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm max-w-xs">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


const IndustrySection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].industries;

  return (
    <section id="industries" className="py-32 bg-surface/40 backdrop-blur-sm border-y border-border/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((item, idx) => (
            <div key={item.id} className="group p-8 rounded-2xl bg-surface/90 backdrop-blur-md border border-border hover:border-cta/50 transition-all cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-cta bg-cta/10 px-2 py-1 rounded">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <ArrowRight className="w-5 h-5 text-border group-hover:text-cta transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-text-main mb-6 leading-relaxed">{item.description}</p>

              <div className="space-y-3 bg-background/60 p-4 rounded-xl border border-border/50">
                <div className="text-xs text-red-300 font-medium opacity-90">{item.problem}</div>
                <div className="text-xs text-green-400 font-bold">{item.solution}</div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-cta" />
                {/* Handle potentially undefined kpi/kpis */}
                <span className="text-xs font-bold text-white">{item.kpi || (item.kpis && item.kpis[0]) || ''}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].pricing;

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {c.plans.map((plan, idx) => (
            <div key={idx} className={`rounded-[2rem] p-10 relative flex flex-col transition-transform hover:-translate-y-2 duration-300 ${plan.isPopular
              ? 'bg-surface border-2 border-cta shadow-2xl shadow-cta/10'
              : 'bg-surface/80 backdrop-blur-md border border-border'
              }`}>
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cta text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-2">{plan.name}</h3>
                {/* Replaced specific price with Tagline */}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">{plan.tagline}</span>
                </div>
                <p className="text-sm text-text-muted mt-4">{plan.description}</p>
              </div>

              {plan.roi && (
                <div className="p-4 bg-background/50 rounded-xl mb-8 border border-border/50">
                  <div className="text-xs text-text-muted uppercase mb-1">Impact</div>
                  <div className="text-sm font-bold text-green-400 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    {plan.roi}
                  </div>
                </div>
              )}

              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-text-main">
                      <Check className="w-4 h-4 text-cta flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 rounded-full font-bold text-sm tracking-wide transition-all ${plan.isPopular
                ? 'bg-cta text-white hover:bg-cta-hover shadow-lg'
                : 'bg-white text-background hover:bg-gray-200'
                }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].howItWorks;

  return (
    <section id="how-it-works" className="py-32 bg-surface/40 backdrop-blur-sm border-y border-border/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {c.steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line */}
              {idx < c.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cta/50 to-transparent -translate-x-1/2 z-0"></div>
              )}

              <div className="relative z-10 p-8 rounded-[2rem] bg-surface/90 backdrop-blur-md border border-border hover:border-cta/50 transition-all duration-300 h-full flex flex-col">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-cta/10 border-2 border-cta flex items-center justify-center mb-6 text-cta font-bold text-xl mx-auto group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Timeline Badge */}
                <div className="text-xs text-text-muted uppercase tracking-wider text-center mb-4 bg-background/50 px-3 py-1 rounded-full w-fit mx-auto">
                  {step.timeline}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{step.title}</h3>

                {/* Description */}
                <p className="text-text-main leading-relaxed mb-6 text-center flex-grow">
                  {step.description}
                </p>

                {/* Deliverable */}
                <div className="border-t border-border/50 pt-4 mt-auto">
                  <div className="text-xs text-text-muted uppercase mb-1 text-center">Deliverable</div>
                  <div className="text-sm font-bold text-cta text-center">{step.deliverables}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cta text-white font-bold hover:bg-cta-hover transition-all hover:scale-105 shadow-lg shadow-cta/25"
          >
            {c.steps[0].microCta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].portfolio;

  return (
    <section id="projects" className="py-32 bg-surface/20">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeader title={c.sectionTitle} subtitle={c.sectionSubtitle} align="center" />

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {c.items.map((item) => (
            <div key={item.id} className="bg-surface/90 backdrop-blur-md border border-border p-10 rounded-[2rem] hover:border-cta/30 transition-all shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-cta text-xs font-bold uppercase tracking-wider mb-2">{item.industry}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="text-text-muted text-sm">{item.client}</div>
                </div>
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-cta shadow-inner flex-shrink-0">
                  <Quote className="w-5 h-5" />
                </div>
              </div>

              {/* Description */}
              <p className="text-text-main leading-relaxed mb-6">{item.content}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {item.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="bg-background/60 p-4 rounded-xl border border-border/50">
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="mb-6">
                  <div className="text-xs text-text-muted uppercase mb-3">Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-background/60 border border-border/50 rounded-full text-xs text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {item.results && item.results.length > 0 && (
                <div className="mb-6 bg-background/40 p-4 rounded-xl border border-border/50">
                  <div className="text-xs text-text-muted uppercase mb-3">Key Results</div>
                  <ul className="space-y-2">
                    {item.results.map((result, rIdx) => (
                      <li key={rIdx} className="flex items-center gap-2 text-sm text-text-main">
                        <Check className="w-4 h-4 text-cta flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quote */}
              <p className="text-sm text-text-muted italic border-l-2 border-cta pl-4">{item.quote}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cta text-white font-bold hover:bg-cta-hover transition-all hover:scale-105 shadow-lg shadow-cta/25"
          >
            {c.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};



// --- Sub-Component for Main Content (Fixes Context Error) ---

const MainContent = () => {
  const { language } = useLanguage();
  const c = CONTENT[language].hero;

  return (
    <Layout>
      <Background3D />
      <HeroSection />
      <TrustStrip title={c.trustTitle} />
      <FeaturesStrip />
      <AutomationSolutionsSection />
      <MissionVisionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <IndustrySection />
      <PortfolioSection />
      <PricingSection />
      <IntegrationEcosystem />
      <FaqSection />
      <GetStartedSection />
      <AIChatWidget />
    </Layout>
  );
};

// --- Main App ---

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;