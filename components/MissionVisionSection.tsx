import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { Target, Lightbulb } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
    const { language } = useLanguage();
    const c = CONTENT[language].missionVision;

    if (!c) return null;

    return (
        <section id="mission-vision" className="py-32 bg-surface/40 backdrop-blur-sm border-y border-border/50">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-6 tracking-tight leading-tight">
                        {c.sectionTitle}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Vision */}
                    <div className="group p-10 rounded-[2rem] bg-surface/90 backdrop-blur-md border border-border hover:border-cta/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-32 h-32 text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-cta/10 rounded-xl flex items-center justify-center mb-8 text-cta">
                                <Target className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{c.vision.title}</h3>
                            <p className="text-text-main leading-relaxed text-lg">
                                {c.vision.description}
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="group p-10 rounded-[2rem] bg-surface/90 backdrop-blur-md border border-border hover:border-cta/50 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Lightbulb className="w-32 h-32 text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 text-primary">
                                <Lightbulb className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{c.mission.title}</h3>
                            <p className="text-text-main leading-relaxed text-lg">
                                {c.mission.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
