import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { Check, ArrowRight, BarChart3, Users, Workflow, DollarSign, Share2, Cpu, Lightbulb } from 'lucide-react';

// Import generated illustrations (static images)
import projectManagement from '../assets/project_management_illustration.png';
import billingPayment from '../assets/billing_payment_illustration.png';
import socialMedia from '../assets/social_media_illustration.png';
import automationDiscovery from '../assets/automation_discovery_illustration.png';
import aiIntegration from '../assets/ai_integration_illustration.png';

// Import animation clips (videos)
import animatedClipGeneration from '../assets/Animated_Clip_Generation.mp4';
import animatedShotClip from '../assets/Animated_Shot_Clip_Generated.mp4';

interface AutomationService {
    id: string;
    title: string;
    description: string;
    features: string[];
    mediaPath: string;
    mediaType: 'image' | 'video'; // Support both image and video
    iconName: string;
    learnMoreLink?: string;
}

const iconMap = {
    BarChart3,
    Users,
    Workflow,
    DollarSign,
    Share2,
    Cpu,
    Lightbulb,
};

const ServiceCard = ({ service }: { service: AutomationService }) => {
    // @ts-ignore
    const Icon = iconMap[service.iconName as keyof typeof iconMap] || Workflow;

    return (
        <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            {/* Decorative gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Badge */}
            <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-cta to-cta-hover rounded-full flex items-center justify-center text-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7" />
            </div>

            {/* Animated Illustration Container */}
            <div className="mb-6 mt-12 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 relative">
                {service.mediaType === 'video' ? (
                    <video
                        src={service.mediaPath}
                        className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : (
                    <img
                        src={service.mediaPath}
                        alt={service.title}
                        className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                    />
                )}
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cta transition-colors duration-300">
                    {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                        <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-700 group/item hover:text-gray-900 transition-colors"
                        >
                            <div className="mt-0.5 flex-shrink-0">
                                <Check className="w-5 h-5 text-cta" />
                            </div>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Learn More Link */}
                <a
                    href={service.learnMoreLink || '#contact'}
                    className="inline-flex items-center gap-2 text-cta font-bold text-sm uppercase tracking-wide hover:gap-4 transition-all duration-300 group/link"
                >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
            </div>

            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cta to-cta-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
    );
};

export const AutomationSolutionsSection = () => {
    const { language } = useLanguage();
    const c = CONTENT[language].services;

    // Map services to include media paths (videos or images)
    const servicesWithImages: AutomationService[] = [
        {
            ...c.items[0], // Sales CRM Management
            mediaPath: animatedClipGeneration, // Using video animation
            mediaType: 'video',
            iconName: 'BarChart3',
        },
        {
            ...c.items[1], // Client Intake & Onboarding
            mediaPath: animatedShotClip, // Using video animation
            mediaType: 'video',
            iconName: 'Users',
        },
        {
            ...c.items[2], // Project Management
            mediaPath: projectManagement,
            mediaType: 'image',
            iconName: 'Workflow',
        },
        {
            ...c.items[3], // Billing & Payment
            mediaPath: billingPayment,
            mediaType: 'image',
            iconName: 'DollarSign',
        },
        {
            ...c.items[4], // Social Media Content
            mediaPath: socialMedia,
            mediaType: 'image',
            iconName: 'Share2',
        },
        {
            ...c.items[5], // Custom AI Solutions / Not Sure What to Automate?
            mediaPath: automationDiscovery,
            mediaType: 'image',
            iconName: 'Lightbulb',
        },
        // Additional service: Plug AI into your existing data
        {
            id: 'ai-integration',
            title: language === 'en' ? 'Plug AI into your existing data' : 'ربط الذكاء الاصطناعي ببياناتك',
            description:
                language === 'en'
                    ? 'We connect AI to your existing systems — from CRMs to project management tools — to automate repetitive work, streamline communication, and turn your data into actionable insights.'
                    : 'نربط الذكاء الاصطناعي بأنظمتك الحالية لأتمتة العمل المتكرر وتبسيط التواصل.',
            features:
                language === 'en'
                    ? ['CRM integration', 'Data analysis', 'Smart automation', 'Real-time insights']
                    : ['تكامل CRM', 'تحليل البيانات', 'أتمتة ذكية', 'رؤى فورية'],
            mediaPath: aiIntegration,
            mediaType: 'image',
            iconName: 'Cpu',
            priceStart: language === 'en' ? 'Contact for Pricing' : 'اتصل للتسعير',
        },
    ];

    return (
        <section id="automation-solutions" className="py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cta/5 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Complete{' '}
                        <span className="bg-gradient-to-r from-cta to-cta-hover bg-clip-text text-transparent">
                            Automation Solutions
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-text-main font-light max-w-3xl mx-auto leading-relaxed">
                        {c.sectionSubtitle}
                    </p>
                    <p className="text-lg text-cta font-semibold mt-4">
                        We will automate your manual processes or you don't pay.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesWithImages.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cta to-cta-hover text-white font-bold text-lg hover:shadow-2xl hover:shadow-cta/30 transition-all duration-300 hover:scale-105"
                    >
                        <span>Book Your Free Discovery Call</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <p className="mt-4 text-sm text-text-muted">
                        Free consultation • No pressure • Honest advice
                    </p>
                </div>
            </div>
        </section>
    );
};
