import { useState, useEffect, useRef } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';

export const FaqSection = () => {
    const { language } = useLanguage();
    const c = CONTENT[language].faq;
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleItems((prev) => new Set(prev).add(index));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px',
            }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="py-32 bg-gradient-to-b from-surface/20 via-background to-surface/20 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-cta/5 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-cta/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cta/30 bg-cta/10 text-cta text-xs font-bold uppercase tracking-widest mb-6">
                        <HelpCircle className="w-4 h-4" />
                        Common Questions
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-cta">Questions</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-main max-w-3xl mx-auto leading-relaxed">
                        {c.sectionSubtitle}
                    </p>
                </div>

                {/* FAQ Grid - Two Columns */}
                <div className="grid lg:grid-cols-2 gap-6 mb-16">
                    {c.items.map((item, idx) => {
                        const isLeft = idx % 2 === 0;
                        const isVisible = visibleItems.has(idx);

                        return (
                            <div
                                key={idx}
                                ref={(el) => (itemRefs.current[idx] = el)}
                                data-index={idx}
                                className={`faq-item ${isVisible ? 'visible' : ''} ${isLeft ? 'slide-from-left' : 'slide-from-right'}`}
                                style={{
                                    animationDelay: `${(idx % 2) * 0.15}s`,
                                    opacity: isVisible ? 1 : 0,
                                }}
                            >
                                <div className="group bg-surface/80 backdrop-blur-xl border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-cta/50 hover:shadow-2xl hover:shadow-cta/10 hover:-translate-y-1 h-full">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-6 text-left flex justify-between items-start gap-4 focus:outline-none"
                                    >
                                        <div className="flex items-start gap-4 flex-1">
                                            {/* Icon */}
                                            <div className="w-10 h-10 rounded-xl bg-cta/10 border border-cta/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                <HelpCircle className="w-5 h-5 text-cta" />
                                            </div>
                                            {/* Question */}
                                            <span className="text-base md:text-lg font-semibold text-white group-hover:text-cta transition-colors duration-300 pt-1">
                                                {item.question}
                                            </span>
                                        </div>
                                        {/* Toggle Icon */}
                                        <span
                                            className={`p-2 rounded-full bg-background/50 text-cta transition-all duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180 bg-cta/20' : 'group-hover:bg-cta/10'
                                                }`}
                                        >
                                            {openIndex === idx ? (
                                                <Minus className="w-5 h-5" />
                                            ) : (
                                                <Plus className="w-5 h-5" />
                                            )}
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-6 pb-6 pt-0">
                                            <div className="pl-14 pr-4 text-text-main leading-relaxed border-t border-border/30 pt-4">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .faq-item {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .faq-item.slide-from-left.visible {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .faq-item.slide-from-right.visible {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Smooth max-height transition for answers */
        .faq-item [class*="max-h-"] {
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      padding 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
        </section>
    );
};
