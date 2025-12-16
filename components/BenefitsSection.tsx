import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { Clock, TrendingUp, Rocket } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
    const { language } = useLanguage();
    const c = CONTENT[language].benefits;

    if (!c) return null;

    const icons = { Clock, TrendingUp, Rocket };

    return (
        <section id="benefits" className="py-32 bg-background relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-6 tracking-tight leading-tight">
                        {c.sectionTitle}
                    </h2>
                    <p className="text-text-main text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">
                        {c.sectionSubtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {c.items.map((item, idx) => {
                        // @ts-ignore
                        const Icon = icons[item.icon as keyof typeof icons] || Clock;

                        return (
                            <div
                                key={idx}
                                className="group p-10 rounded-[2rem] bg-surface/80 backdrop-blur-md border border-border hover:border-cta/50 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
                            >
                                {/* Decorative gradient */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-cta/5 blur-[80px] rounded-full"></div>

                                <div className="relative z-10 w-full">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-cta/10 rounded-2xl flex items-center justify-center mb-6 text-cta mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    {/* Stat */}
                                    <div className="mb-6">
                                        <div className="text-5xl font-bold text-cta mb-2">{item.stat}</div>
                                        <div className="text-sm text-text-muted uppercase tracking-wider">{item.statLabel}</div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>

                                    {/* Description */}
                                    <p className="text-text-main leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
