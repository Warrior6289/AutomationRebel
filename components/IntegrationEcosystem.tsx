import { useLanguage } from './LanguageContext';

export const IntegrationEcosystem: React.FC = () => {
    const { language } = useLanguage();

    // Go High Level FIRST, then voice AI platforms, then automation tools, then CRMs
    const integrations = [
        // PRIORITY 1: Go High Level (CORE PLATFORM)
        { name: 'Go High Level', logo: 'https://cdn.simpleicons.org/gohighlevel/6B46C1', color: '#6B46C1', featured: true },

        // PRIORITY 2: Voice & Chat AI Platforms
        { name: 'OpenAI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg', color: '#412991' },
        { name: 'Telegram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg', color: '#26A5E4' },
        { name: 'WhatsApp', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg', color: '#25D366' },

        // PRIORITY 3: Automation Platforms
        { name: 'Make', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/make.svg', color: '#6D00CC' },
        { name: 'Zapier', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg', color: '#FF4A00' },
        { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71', color: '#EA4B71' },

        // PRIORITY 4: CRM & Business Tools
        { name: 'HubSpot', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg', color: '#FF7A59' },
        { name: 'Salesforce', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg', color: '#00A1E0' },
        { name: 'Stripe', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg', color: '#008CDD' },
        { name: 'Twilio', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twilio.svg', color: '#F22F46' },

        // PRIORITY 5: Productivity & Collaboration
        { name: 'Google', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg', color: '#4285F4' },
        { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg', color: '#5E5E5E' },
        { name: 'Slack', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg', color: '#4A154B' },
        { name: 'Notion', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg', color: '#000000' },
        { name: 'Airtable', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airtable.svg', color: '#18BFFF' },
        { name: 'Asana', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/asana.svg', color: '#F06A6A' },
        { name: 'Monday', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/monday.svg', color: '#FF3D57' },
        { name: 'ClickUp', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/clickup.svg', color: '#7B68EE' },
        { name: 'Trello', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/trello.svg', color: '#0052CC' },

        // PRIORITY 6: Additional Tools
        { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg', color: '#7AB55C' },
        { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wordpress.svg', color: '#21759B' },
        { name: 'Mailchimp', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailchimp.svg', color: '#FFE01B' },
        { name: 'Jira', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jira.svg', color: '#0052CC' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg', color: '#181717' },
        { name: 'Zendesk', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zendesk.svg', color: '#03363D' },
        { name: 'Outlook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftoutlook.svg', color: '#0078D4' },
        { name: 'PowerBI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/powerbi.svg', color: '#F2C811' },
    ];

    const title = language === 'ar'
        ? 'قم بتوصيل Go High Level بأنظمتك'
        : 'Connect Go High Level to Your Entire Tech Stack';

    const description = language === 'ar'
        ? 'نربط Go High Level بجميع أدواتك — من CRMs إلى أدوات إدارة المشاريع — لأتمتة العمل المتكرر وتبسيط الاتصالات.'
        : 'We connect Go High Level to all your tools — from CRMs to project management platforms — using Make, Zapier, and n8n to automate repetitive work and streamline communication.';

    return (
        <section id="integrations" className="py-32 bg-[#1a1a1a] relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                        </svg>
                        Go High Level Ecosystem
                    </div>
                </div>

                {/* Title & Description */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-6 tracking-tight leading-tight">
                        Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B46C1] to-cta">Go High Level</span> to Your Entire Tech Stack
                    </h2>
                    <p className="text-text-main text-lg md:text-xl font-light leading-relaxed opacity-90">
                        {description}
                    </p>
                </div>

                {/* Scrolling Logo Grid - Row 1 */}
                <div className="relative mb-6 overflow-hidden">
                    <div className="flex animate-scroll-left">
                        {/* Duplicate for seamless loop */}
                        {[...integrations, ...integrations].map((integration, idx) => (
                            <div
                                key={`row1-${idx}`}
                                className="flex-shrink-0 mx-4 group"
                            >
                                <div className={`w-16 h-16 bg-white/95 backdrop-blur-md border ${integration.featured ? 'border-[#6B46C1]/70 ring-2 ring-[#6B46C1]/30' : 'border-border/30'} rounded-2xl flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 hover:bg-white`}>
                                    <div className="w-10 h-10 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                                        <img
                                            src={integration.logo}
                                            alt={integration.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                {integration.featured && (
                                    <div className="text-center mt-2">
                                        <span className="text-[10px] font-bold text-[#6B46C1] uppercase tracking-wider">Core Platform</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scrolling Logo Grid - Row 2 (Reverse) */}
                <div className="relative mb-12 overflow-hidden">
                    <div className="flex animate-scroll-right">
                        {/* Duplicate for seamless loop */}
                        {[...integrations.slice().reverse(), ...integrations.slice().reverse()].map((integration, idx) => (
                            <div
                                key={`row2-${idx}`}
                                className="flex-shrink-0 mx-4 group"
                            >
                                <div className={`w-16 h-16 bg-white/95 backdrop-blur-md border ${integration.featured ? 'border-[#6B46C1]/70 ring-2 ring-[#6B46C1]/30' : 'border-border/30'} rounded-2xl flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/30 hover:bg-white`}>
                                    <div className="w-10 h-10 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                                        <img
                                            src={integration.logo}
                                            alt={integration.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Links */}
                <div className="text-center space-y-4">
                    <div className="text-sm text-text-muted uppercase tracking-wider mb-4">
                        Explore Integration Platforms
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://www.gohighlevel.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#6B46C1] bg-[#6B46C1]/10 hover:bg-[#6B46C1]/20 hover:border-[#6B46C1] transition-all text-white text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            Go High Level
                        </a>
                        <a
                            href="https://www.make.com/en/integrations?community=1&verified=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/60 hover:bg-surface hover:border-cta/50 transition-all text-white text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            Make Integrations
                        </a>
                        <a
                            href="https://zapier.com/apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/60 hover:bg-surface hover:border-cta/50 transition-all text-white text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            Zapier Integrations
                        </a>
                        <a
                            href="https://n8n.io/integrations/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-surface/60 hover:bg-surface hover:border-cta/50 transition-all text-white text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            n8n Integrations
                        </a>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};
