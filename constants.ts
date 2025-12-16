import { Translation } from './types';

export const COMPANY_INFO = {
  name: "Automation Rebel",
  email: "hello@automationrebel.com",
  phone: "+971 4 123 4567",
  hq: "Dubai, UAE",
  markets: "UAE, KSA, Kuwait, Qatar",
  calendarLink: "https://calendar.app.google/hTHhAJ1rCRTQMgheA"
};

export const CONTENT: Record<'en' | 'ar', Translation> = {
  en: {
    nav: [
      { id: 'services', label: 'Services', href: '#services' },
      { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
      { id: 'projects', label: 'Projects', href: '#projects' },
      { id: 'pricing', label: 'Pricing', href: '#pricing' },
      { id: 'faq', label: 'FAQ', href: '#faq' },
      { id: 'contact', label: 'Contact', href: '#contact' },
    ],
    hero: {
      badge: "GO HIGH LEVEL EXPERTS • VOICE AI • CHAT BOTS",
      headline: "Scale Your Agency with Go High Level",
      subheadline: "Expert GHL Setup, Voice AI Agents & Custom Automation",
      description: "Certified Go High Level experts specializing in complete GHL ecosystems, AI voice agents, intelligent chatbots, and advanced automation. We build, customize, and optimize your entire Go High Level system with Make, Zapier, and n8n integrations.",
      ctaPrimary: "Book GHL Consultation",
      ctaSecondary: "View GHL Projects",
      trustText: "Trusted by agencies, coaches, and consultants",
      trustTitle: "CERTIFIED GO HIGH LEVEL EXPERTS"
    },
    featuresStrip: {
      title: "Why Choose Us for Go High Level?",
      items: [
        {
          icon: "ShieldCheck",
          title: "Certified GHL Experts",
          desc: "Official Go High Level certification with 50+ successful implementations across agencies, coaches, and consultants. We know GHL inside and out."
        },
        {
          icon: "BrainCircuit",
          title: "Voice & Chat AI Specialists",
          desc: "Advanced AI voice agents (Vapi, Bland, ElevenLabs) and intelligent chatbots integrated seamlessly with your GHL account for 24/7 automation."
        },
        {
          icon: "Workflow",
          title: "Snapshot Marketplace Creators",
          desc: "We build industry-specific GHL snapshots that you can deploy in minutes, not months. Pre-built funnels, workflows, and automations ready to go."
        },
        {
          icon: "Zap",
          title: "Full-Stack Automation",
          desc: "Expert integration of GHL with Make.com, Zapier, and n8n. We connect your entire tech stack for seamless automation across all platforms."
        },
        {
          icon: "Users",
          title: "White-Label SaaS Mode Setup",
          desc: "Complete agency SaaS mode configuration. Manage unlimited clients, custom branding, and automated billing - all under your agency name."
        },
        {
          icon: "Rocket",
          title: "Custom API Development",
          desc: "Advanced GHL API integrations and custom webhook automations. We build what GHL can't do out of the box."
        },
        {
          icon: "Heart",
          title: "Dedicated GHL Support Team",
          desc: "Your dedicated DevMate and ClientMate ensure your GHL system runs flawlessly. Fast response times, proactive monitoring, ongoing optimization."
        },
        {
          icon: "Eye",
          title: "Industry-Specific Solutions",
          desc: "Pre-built GHL solutions for real estate, coaching, agencies, e-commerce, and professional services. Proven templates that convert."
        }
      ]
    },
    services: {
      sectionTitle: "Go High Level & Automation Services",
      sectionSubtitle: "From GHL setup to AI voice agents - we build automation that scales your business.",
      items: [
        {
          id: 'ghl-setup',
          iconName: 'Settings',
          title: "Go High Level Setup & Migration",
          description: "Complete GHL account setup, migration from other CRMs, custom domain configuration, white-label branding, and multi-location setup. Get your GHL system running perfectly from day one.",
          features: ["Complete account setup", "CRM migration (HubSpot, Salesforce)", "Custom domain & branding", "Multi-location configuration"],
          priceStart: "From $2,500"
        },
        {
          id: 'ghl-snapshots',
          iconName: 'Layers',
          title: "GHL Snapshots & Templates",
          description: "Industry-specific GHL snapshots for real estate, coaching, agencies, and more. Pre-built funnels, email sequences, SMS campaigns, and workflows ready to deploy in minutes.",
          features: ["Industry-specific snapshots", "Custom funnel templates", "Email/SMS campaigns", "Workflow automation templates"],
          priceStart: "From $1,500"
        },
        {
          id: 'voice-ai',
          iconName: 'Phone',
          title: "AI Voice Agents (GHL + Vapi/Bland)",
          description: "24/7 AI voice agents for inbound calls, outbound campaigns, appointment setting, and lead qualification. Integrated with GHL for seamless CRM updates and follow-ups.",
          features: ["Inbound call handling", "Outbound calling campaigns", "Appointment booking", "Lead qualification & scoring"],
          priceStart: "From $3,000"
        },
        {
          id: 'chat-bots',
          iconName: 'MessageSquare',
          title: "AI Chat Bots & Conversational AI",
          description: "Intelligent chatbots for your website, SMS, Facebook Messenger, Instagram DMs, and WhatsApp. Powered by GPT-4 and integrated with your GHL CRM for instant lead capture.",
          features: ["Website chat widgets", "SMS conversation bots", "Social media automation", "WhatsApp business bots"],
          priceStart: "From $2,000"
        },
        {
          id: 'ghl-workflows',
          iconName: 'Workflow',
          title: "GHL Workflow Automation",
          description: "Custom workflow automation in Go High Level. Lead capture, nurture sequences, appointment reminders, pipeline automation, and task management - all running on autopilot.",
          features: ["Lead capture workflows", "Automated follow-ups", "Pipeline automation", "Task & reminder automation"],
          priceStart: "From $1,000"
        },
        {
          id: 'integrations',
          iconName: 'Cpu',
          title: "Advanced Integrations (Make, Zapier, n8n)",
          description: "Connect GHL to any tool using Make.com, Zapier, or n8n. Custom API integrations, webhook automations, and complex data transformations that extend GHL's capabilities.",
          features: ["Make.com workflows", "Zapier automation", "n8n self-hosted", "Custom API development"],
          priceStart: "From $500"
        }
      ]
    },
    missionVision: {
      sectionTitle: "Our Mission & Vision",
      vision: {
        title: "Vision",
        description: "To lead the future of intelligent business systems—where automation and AI drive operational excellence, and individuals are free to contribute their most valuable and meaningful work."
      },
      mission: {
        title: "Mission",
        description: "To empower organizations to automate and integrate their business processes—so their people can spend less time on manual tasks and more time on strategic, creative, and high-impact work."
      }
    },
    howItWorks: {
      sectionTitle: "Ready to Transform Your Business? Here's How We Start",
      sectionSubtitle: "From discovery to deployment, we make automation simple and effective.",
      steps: [
        {
          number: "01",
          title: "Book Your Free Discovery Call",
          timeline: "30 Minutes",
          description: "We start with a simple, no-pressure conversation. We learn about your business goals and challenges, then show you where automation can help you win faster.",
          deliverables: "Automation Roadmap",
          microCta: "Book A Call"
        },
        {
          number: "02",
          title: "Build Your Custom Automation System",
          timeline: "2-4 Weeks",
          description: "We create workflows that fit your business perfectly. We connect your tools and build custom solutions that work with your team and grow with your business.",
          deliverables: "Live Automation",
          microCta: "View Process"
        },
        {
          number: "03",
          title: "Grow Faster & Lead Better",
          timeline: "Ongoing",
          description: "With automation working for you, you spend less time on routine tasks and more time on strategy, innovation, and growing your business. We stay with you to ensure long-term success.",
          deliverables: "Continuous Optimization",
          microCta: "Get Started"
        }
      ]
    },
    benefits: {
      sectionTitle: "Here's What Happens When You Automate Your Workflow",
      sectionSubtitle: "Real results from businesses just like yours.",
      items: [
        {
          icon: "Clock",
          title: "Get Your Time Back",
          stat: "40-70%",
          statLabel: "Time Saved",
          description: "Most clients save 40-70% of their time on automated tasks. That's 15-20 hours per week back in your schedule to focus on what matters."
        },
        {
          icon: "TrendingUp",
          title: "Cut Costs, Boost Profits",
          stat: "3-6 months",
          statLabel: "ROI Timeline",
          description: "Get your investment back within 3-6 months. Then watch your profit margins grow as automation scales without adding headcount."
        },
        {
          icon: "Rocket",
          title: "Scale Without the Headache",
          stat: "10x",
          statLabel: "Growth Capacity",
          description: "Handle 10x more work without hiring 10x more people. Your automation grows with your business, maintaining quality at scale."
        }
      ]
    },
    industries: {
      sectionTitle: "Industries We Serve",
      sectionSubtitle: "Automation solutions tailored to your industry's unique challenges.",
      items: [
        {
          id: 'realestate',
          title: "Real Estate",
          description: "Automate lead qualification, property inquiries, and client communications.",
          problem: "Problem: Slow response to property portals.",
          solution: "Solution: Instant 24/7 lead qualification.",
          kpi: "24/7 Lead Response",
          kpis: ["24/7 Response"]
        },
        {
          id: 'construction',
          title: "Construction",
          description: "Streamline contractor coordination, project tracking, and documentation.",
          problem: "Problem: Manual contractor database management.",
          solution: "Solution: Automated contractor scraping and CRM sync.",
          kpi: "Hands-Free Operation",
          kpis: ["Hands-Free Operation"]
        },
        {
          id: 'marketing',
          title: "Marketing Agencies",
          description: "Automate client reporting, campaign management, and data migration.",
          problem: "Problem: Manual data entry and reporting.",
          solution: "Solution: Automated bulk imports and field mapping.",
          kpi: "Zero Manual Entry",
          kpis: ["Zero Manual Entry"]
        },
        {
          id: 'finance',
          title: "Financial Services",
          description: "Automate lead processing, client onboarding, and financial analysis.",
          problem: "Problem: Delayed email responses.",
          solution: "Solution: AI-powered instant responses.",
          kpi: "24/7 Email Processing",
          kpis: ["24/7 Processing"]
        },
        {
          id: 'healthcare',
          title: "Healthcare",
          description: "Streamline patient intake, appointment booking, and follow-ups.",
          problem: "Problem: High no-show rates.",
          solution: "Solution: Automated reminders and confirmations.",
          kpi: "-40% No-Shows",
          kpis: ["-40% No-Shows"]
        },
        {
          id: 'professional',
          title: "Professional Services",
          description: "Automate proposal creation, client management, and billing workflows.",
          problem: "Problem: Time-consuming proposal creation.",
          solution: "Solution: Automated proposal generation.",
          kpi: "+35% Win Rate",
          kpis: ["+35% Win Rate"]
        }
      ]
    },
    pricing: {
      sectionTitle: "Flexible Engagement Models",
      sectionSubtitle: "Choose the partnership that fits your business needs. All plans include training, documentation, and support.",
      plans: [
        {
          name: "Discovery Project",
          tagline: "Start Small, Prove Value",
          description: "Perfect for businesses new to automation. We tackle one specific workflow to demonstrate ROI and build trust.",
          features: [
            "Single workflow automation",
            "2-week implementation",
            "Training & documentation",
            "30-day support included",
            "Process analysis & recommendations"
          ],
          roi: "Typical ROI: 3-6 months",
          cta: "Book Discovery Call"
        },
        {
          name: "Growth Partnership",
          tagline: "Scale Your Operations",
          description: "Comprehensive automation across multiple departments. Ongoing optimization and dedicated support for growing businesses.",
          features: [
            "3-5 workflow automations",
            "Priority support & maintenance",
            "Monthly optimization reviews",
            "Quarterly strategy sessions",
            "Dedicated ClientMate & DevMate"
          ],
          roi: "Typical ROI: 2-4 months",
          cta: "Schedule Consultation",
          isPopular: true
        },
        {
          name: "Enterprise Transformation",
          tagline: "Full Business Automation",
          description: "Complete automation ecosystem with dedicated team, custom AI development, and strategic partnership for enterprise-scale operations.",
          features: [
            "Unlimited workflow automations",
            "Custom AI model development",
            "24/7 support & monitoring",
            "Dedicated success team",
            "SLA guarantees & compliance"
          ],
          roi: "Strategic Partnership",
          cta: "Contact Sales"
        }
      ]
    },
    portfolio: {
      sectionTitle: "Our Latest Projects",
      sectionSubtitle: "Real automation solutions delivering measurable results.",
      cta: "Ready to Build Something Amazing?",
      items: [
        {
          id: '1',
          client: "Property Investment Firm",
          industry: "Real Estate",
          title: "Lead Flow Messenger Automation",
          stats: [
            { label: "Lead Qualification", value: "Automated" },
            { label: "CRM Integration", value: "Real-time" }
          ],
          content: "AI-powered Facebook Messenger bot that captures property investment leads, extracts data, and integrates with CRM systems automatically.",
          quote: "Automation Rebel transformed our lead capture process. We now respond instantly to every inquiry.",
          technologies: ["Facebook Messenger API", "OpenAI", "HubSpot", "n8n"],
          results: [
            "Automated lead qualification",
            "Real-time CRM integration",
            "AI data extraction"
          ]
        },
        {
          id: '2',
          client: "Construction Company",
          industry: "Construction",
          title: "Contractor Automation",
          stats: [
            { label: "Input Processing", value: "Multi-modal" },
            { label: "Database Scraping", value: "Automated" }
          ],
          content: "Multi-modal AI automation that processes voice, image, and text inputs via Telegram to automatically scrape contractor databases and populate CRM systems.",
          quote: "The voice-operated system saves our team 25+ hours per week on data entry.",
          technologies: ["Telegram Bot API", "OpenAI Whisper", "Vision AI", "Make.com"],
          results: [
            "Multi-modal input processing",
            "Automated contractor database scraping",
            "Hands-free voice operation"
          ]
        },
        {
          id: '3',
          client: "Marketing Agency",
          industry: "Marketing",
          title: "CSV to HubSpot Uploader Automation",
          stats: [
            { label: "Data Imports", value: "Automated" },
            { label: "Manual Entry", value: "Zero" }
          ],
          content: "Intelligent data migration automation that streamlines CSV imports into HubSpot CRM with dynamic field mapping, validation, and seamless API integration.",
          quote: "What used to take days now happens in minutes. Game-changing efficiency.",
          technologies: ["HubSpot API", "Python", "Zapier", "Data Validation"],
          results: [
            "Automated bulk data imports",
            "Intelligent field mapping",
            "Zero manual data entry"
          ]
        },
        {
          id: '4',
          client: "Financial Services",
          industry: "Finance",
          title: "Lead Flow Gmail Automation",
          stats: [
            { label: "Email Processing", value: "24/7" },
            { label: "Response Time", value: "Instant" }
          ],
          content: "AI-powered Gmail automation that monitors property investment inquiries, extracts financial data, validates leads, and provides instant personalized responses with dual CRM integration.",
          quote: "Our response time went from hours to seconds. Lead conversion increased by 45%.",
          technologies: ["Gmail API", "OpenAI", "Dual CRM Sync", "n8n"],
          results: [
            "24/7 email lead processing",
            "Instant AI-powered responses",
            "Dual CRM synchronization"
          ]
        },
        {
          id: '5',
          client: "Real Estate Advisory",
          industry: "Real Estate",
          title: "Property Insights Automation",
          stats: [
            { label: "Financial Analysis", value: "Automated" },
            { label: "Report Delivery", value: "Instant" }
          ],
          content: "Comprehensive financial planning automation that captures client data, generates dynamic charts, calculates retirement projections, and delivers personalized PDF reports automatically.",
          quote: "We've scaled our advisory services 10x without adding staff. Incredible ROI.",
          technologies: ["Chart.js", "PDF Generation", "Financial APIs", "Make.com"],
          results: [
            "Automated financial analysis",
            "Dynamic chart generation",
            "Instant report delivery"
          ]
        }
      ]
    },
    faq: {
      sectionTitle: "Frequently Asked Questions",
      sectionSubtitle: "Everything you need to know about working with Automation Rebel.",
      items: [
        {
          question: "Do you build software or just give advice?",
          answer: "We do both! We build the actual automation tools that work for your business, and we also give you advice on how to use them best. We create the software, connect your existing tools, and help you keep improving as your business grows."
        },
        {
          question: "What can automation actually fix for my business?",
          answer: "Automation can fix the boring stuff that wastes your time: typing the same information over and over, sending follow-up emails, checking leads, and keeping track of customers. We focus on the biggest time-wasters like managing sales, bringing in new clients, and doing the same admin tasks day after day."
        },
        {
          question: "Can you handle complicated work processes?",
          answer: "Yes! We're experts at building complex workflows that connect multiple systems and make smart decisions. Whether it's scoring leads across different criteria, sending messages through multiple channels, or following strict rules, we build strong solutions that handle all the details and grow with your business."
        },
        {
          question: "Do you have examples of work you've done?",
          answer: "Yes! We have lots of real examples from different industries. We helped a real estate team automate their lead checking (saving 25 hours per week), a healthcare office streamline patient intake (making it 80% faster), and a consulting firm automate their proposal creation (increasing their success rate by 35%). Check out our Projects section for detailed case studies."
        },
        {
          question: "Is this a one-time job or ongoing work?",
          answer: "We offer both options. Many clients start with one specific automation project, then expand to ongoing improvements as they see results. We provide maintenance, updates, and continuous improvements. Some clients prefer our ongoing partnership where we keep finding new ways to automate as their business changes."
        },
        {
          question: "Will this work for my type of business?",
          answer: "Yes! We've helped all kinds of businesses - real estate, healthcare, law firms, construction, marketing agencies, and professional services. The key is finding the boring, repetitive tasks that take up 20+ hours each week. We'll look at your specific work and show you exactly where automation will help the most."
        },
        {
          question: "How much time and money will this save me?",
          answer: "Most of our clients save 40-70% of their time on the tasks we automate, and they get their money back within 3-6 months. For example, automated lead checking saves 15-20 hours per week, and automated client setup goes from taking days to just hours. We'll show you exactly how much you'll save before we start."
        },
        {
          question: "Are you trained and certified in the tools you use?",
          answer: "Yes, our team has official training and certifications in all the major platforms we use like Zapier, Make, n8n, Microsoft Power Automate, and AI tools. We're also experienced with major CRM platforms like HubSpot, Salesforce, and other business systems. This means we know the best ways to use these tools and can avoid common pitfalls."
        },
        {
          question: "What makes you different from other automation companies?",
          answer: "We understand your business goals first, then build automation that helps you reach them. Unlike pure tech companies, we focus on making sure your team actually uses and benefits from the automation we build. You get dedicated DevMate and ClientMate support, ensuring both technical excellence and smooth ongoing operations."
        },
        {
          question: "Do I need tech experts on my team?",
          answer: "No! We build easy-to-use interfaces and provide full training. Our automations are designed for regular business people to monitor and adjust. We also provide ongoing support and maintenance, so you can focus on running your business while we make sure your automation keeps working smoothly."
        },
        {
          question: "Still have questions?",
          answer: "Let's discuss how automation can transform your business processes. Schedule a free consultation and we'll answer all your questions, show you relevant examples, and create a custom automation roadmap for your business."
        }
      ]
    },
    contact: {
      title: "Ready to Get Started?",
      subtitle: "Book your free discovery call and see how automation can transform your business.",
      nameLabel: "Full Name",
      emailLabel: "Work Email",
      phoneLabel: "Phone Number",
      messageLabel: "Tell us about your automation needs",
      submitBtn: "Book Free Consultation",
      disclaimer: "We respond within 24 hours. No pressure, just honest advice about what automation can do for your business.",
      form: {
        name: "Full Name",
        email: "Work Email",
        phone: "Phone Number",
        company: "Company Name",
        message: "Tell us about your automation needs",
        submit: "Book Free Consultation"
      }
    },
    aiChat: {
      trigger: "Chat with AI",
      placeholder: "Ask about automation...",
      welcome: "Hi! I'm your Automation Rebel assistant. How can I help automate your business today?"
    }
  },
  ar: {
    // Arabic translations - keeping minimal for now as requested
    nav: [
      { id: 'services', label: 'الخدمات', href: '#services' },
      { id: 'how-it-works', label: 'كيف نعمل', href: '#how-it-works' },
      { id: 'projects', label: 'المشاريع', href: '#projects' },
      { id: 'pricing', label: 'الأسعار', href: '#pricing' },
      { id: 'faq', label: 'الأسئلة', href: '#faq' },
      { id: 'contact', label: 'اتصل بنا', href: '#contact' },
    ],
    hero: {
      badge: "أتمتة مدعومة بالذكاء الاصطناعي",
      headline: "أتمتة العمل اليدوي",
      subheadline: "نصف العمل، سرعة كاملة",
      description: "نصمم ونبني ونشغل سير عمل الأتمتة التي تزيل النقرات المتكررة والتحديثات اليدوية.",
      ctaPrimary: "احجز استشارة مجانية",
      ctaSecondary: "شاهد مشاريعنا",
      trustText: "موثوق به",
      trustTitle: "موثوق به من قبل الشركات الرائدة"
    },
    featuresStrip: {
      title: "لماذا Automation Rebel؟",
      items: [
        { icon: "Users", title: "دعم مخصص", desc: "فريق مخصص لبناء وإدارة الأتمتة الخاصة بك." },
        { icon: "ShieldCheck", title: "خدمة عملاء قوية", desc: "نجيب على مكالماتك ونحل مشاكلك بسرعة." },
        { icon: "BrainCircuit", title: "خبرة الذكاء الاصطناعي", desc: "نعرف كيف نجعل الذكاء الاصطناعي يعمل لصالح عملك." },
        { icon: "Workflow", title: "مستقل عن الأدوات", desc: "نركز على ما تريد تحقيقه، وليس على الأدوات." },
        { icon: "Rocket", title: "قابل للتطوير", desc: "تنمو الأتمتة مع نمو عملك." },
        { icon: "Zap", title: "تنفيذ سريع", desc: "نتائج أسرع وتكاليف أقل." },
        { icon: "Heart", title: "الناس أولاً", desc: "لا نستبدل فريقك - نجعله أفضل." },
        { icon: "Eye", title: "تعاون شفاف", desc: "ترى كل ما نفعله." }
      ]
    },
    services: {
      sectionTitle: "حلول الأتمتة الكاملة",
      sectionSubtitle: "نقوم بأتمتة سير العمل الذي يضيع وقتك.",
      items: [
        {
          id: 'crm',
          iconName: 'BarChart3',
          title: "إدارة CRM للمبيعات",
          description: "احتفظ بالعملاء المحتملين والمحادثات منظمة.",
          features: ["تتبع العملاء", "متابعة تلقائية", "أتمتة خط الأنابيب", "مزامنة CRM"],
          priceStart: "اتصل للتسعير"
        },
        {
          id: 'onboarding',
          iconName: 'Users',
          title: "استقبال العملاء",
          description: "رحب بالعملاء الجدد بعملية سلسة.",
          features: ["حجز تلقائي", "جمع المستندات", "تسلسلات الترحيب", "تتبع التقدم"],
          priceStart: "اتصل للتسعير"
        },
        {
          id: 'project',
          iconName: 'LayoutGrid',
          title: "إدارة المشاريع",
          description: "تتبع المهام والمواعيد النهائية تلقائياً.",
          features: ["أتمتة المهام", "تتبع المواعيد", "تنسيق الفريق", "تحديثات الحالة"],
          priceStart: "اتصل للتسعير"
        },
        {
          id: 'billing',
          iconName: 'DollarSign',
          title: "الفواتير والدفع",
          description: "أرسل الفواتير وتابع المدفوعات تلقائياً.",
          features: ["فواتير تلقائية", "تذكيرات الدفع", "تتبع الإيصالات", "تقارير مالية"],
          priceStart: "اتصل للتسعير"
        },
        {
          id: 'social',
          iconName: 'Share2',
          title: "محتوى وسائل التواصل",
          description: "خطط للمحتوى مرة واحدة ودعه ينشر تلقائياً.",
          features: ["جدولة المحتوى", "نشر متعدد المنصات", "تتبع التحليلات", "أتمتة التفاعل"],
          priceStart: "اتصل للتسعير"
        },
        {
          id: 'custom',
          iconName: 'Cpu',
          title: "حلول ذكاء اصطناعي مخصصة",
          description: "سنحلل أنظمتك لتحديد فرص الأتمتة.",
          features: ["تحليل العمليات", "تكامل الذكاء الاصطناعي", "رؤى البيانات", "سير عمل مخصص"],
          priceStart: "اتصل للتسعير"
        }
      ]
    },
    missionVision: {
      sectionTitle: "مهمتنا ورؤيتنا",
      vision: {
        title: "الرؤية",
        description: "قيادة مستقبل أنظمة الأعمال الذكية."
      },
      mission: {
        title: "المهمة",
        description: "تمكين المؤسسات من أتمتة عملياتها التجارية."
      }
    },
    howItWorks: {
      sectionTitle: "كيف نبدأ",
      sectionSubtitle: "من الاكتشاف إلى النشر.",
      steps: [
        { number: "01", title: "احجز مكالمة مجانية", timeline: "30 دقيقة", description: "نبدأ بمحادثة بسيطة.", deliverables: "خارطة طريق", microCta: "احجز مكالمة" },
        { number: "02", title: "بناء النظام", timeline: "2-4 أسابيع", description: "ننشئ سير عمل مخصص.", deliverables: "أتمتة حية", microCta: "شاهد العملية" },
        { number: "03", title: "النمو والتحسين", timeline: "مستمر", description: "تحسين مستمر ونجاح طويل الأمد.", deliverables: "تحسين مستمر", microCta: "ابدأ الآن" }
      ]
    },
    benefits: {
      sectionTitle: "ماذا يحدث عند الأتمتة",
      sectionSubtitle: "نتائج حقيقية من شركات مثل شركتك.",
      items: [
        { icon: "Clock", title: "استعد وقتك", stat: "40-70%", statLabel: "وقت موفر", description: "معظم العملاء يوفرون 40-70٪ من وقتهم." },
        { icon: "TrendingUp", title: "خفض التكاليف", stat: "3-6 أشهر", statLabel: "عائد الاستثمار", description: "استرد استثمارك خلال 3-6 أشهر." },
        { icon: "Rocket", title: "توسع بدون صداع", stat: "10x", statLabel: "سعة النمو", description: "تعامل مع 10 أضعاف العمل دون توظيف 10 أضعاف الأشخاص." }
      ]
    },
    industries: {
      sectionTitle: "الصناعات التي نخدمها",
      sectionSubtitle: "حلول أتمتة مصممة خصيصاً.",
      items: [
        { id: 'realestate', title: "العقارات", description: "أتمتة تأهيل العملاء المحتملين.", problem: "المشكلة: استجابة بطيئة.", solution: "الحل: تأهيل فوري 24/7.", kpi: "استجابة فورية", kpis: ["استجابة فورية"] },
        { id: 'construction', title: "البناء", description: "تبسيط تنسيق المقاولين.", problem: "المشكلة: إدارة يدوية.", solution: "الحل: أتمتة كاملة.", kpi: "تشغيل بدون تدخل", kpis: ["تشغيل بدون تدخل"] },
        { id: 'marketing', title: "التسويق", description: "أتمتة التقارير وإدارة الحملات.", problem: "المشكلة: إدخال يدوي.", solution: "الحل: استيراد تلقائي.", kpi: "صفر إدخال يدوي", kpis: ["صفر إدخال يدوي"] },
        { id: 'finance', title: "الخدمات المالية", description: "أتمتة معالجة العملاء المحتملين.", problem: "المشكلة: تأخر الردود.", solution: "الحل: ردود فورية.", kpi: "معالجة 24/7", kpis: ["معالجة 24/7"] },
        { id: 'healthcare', title: "الرعاية الصحية", description: "تبسيط استقبال المرضى.", problem: "المشكلة: نسبة تغيب عالية.", solution: "الحل: تذكيرات تلقائية.", kpi: "-40٪ تغيب", kpis: ["-40٪ تغيب"] },
        { id: 'professional', title: "الخدمات المهنية", description: "أتمتة إنشاء المقترحات.", problem: "المشكلة: وقت طويل.", solution: "الحل: إنشاء تلقائي.", kpi: "+35٪ نجاح", kpis: ["+35٪ نجاح"] }
      ]
    },
    pricing: {
      sectionTitle: "نماذج المشاركة المرنة",
      sectionSubtitle: "اختر الشراكة التي تناسب احتياجات عملك.",
      plans: [
        {
          name: "مشروع الاكتشاف",
          tagline: "ابدأ صغيراً",
          description: "مثالي للشركات الجديدة في الأتمتة.",
          features: ["أتمتة سير عمل واحد", "تنفيذ أسبوعين", "تدريب ووثائق", "دعم 30 يوم", "تحليل العمليات"],
          roi: "عائد استثمار: 3-6 أشهر",
          cta: "احجز مكالمة"
        },
        {
          name: "شراكة النمو",
          tagline: "توسيع العمليات",
          description: "أتمتة شاملة عبر أقسام متعددة.",
          features: ["3-5 أتمتة", "دعم ذو أولوية", "مراجعات شهرية", "جلسات استراتيجية", "فريق مخصص"],
          roi: "عائد استثمار: 2-4 أشهر",
          cta: "جدولة استشارة",
          isPopular: true
        },
        {
          name: "تحول المؤسسات",
          tagline: "أتمتة كاملة",
          description: "نظام أتمتة كامل مع فريق مخصص.",
          features: ["أتمتة غير محدودة", "تطوير ذكاء اصطناعي مخصص", "دعم 24/7", "فريق نجاح مخصص", "ضمانات SLA"],
          roi: "شراكة استراتيجية",
          cta: "اتصل بالمبيعات"
        }
      ]
    },
    portfolio: {
      sectionTitle: "أحدث مشاريعنا",
      sectionSubtitle: "حلول أتمتة حقيقية تحقق نتائج قابلة للقياس.",
      cta: "هل أنت مستعد لبناء شيء مذهل؟",
      items: [
        {
          id: '1',
          client: "شركة استثمار عقاري",
          industry: "عقارات",
          title: "أتمتة ماسنجر للعملاء المحتملين",
          stats: [{ label: "تأهيل العملاء", value: "تلقائي" }, { label: "تكامل CRM", value: "فوري" }],
          content: "بوت ماسنجر مدعوم بالذكاء الاصطناعي يلتقط العملاء المحتملين.",
          quote: "Automation Rebel حول عملية التقاط العملاء المحتملين لدينا.",
          technologies: ["Facebook Messenger API", "OpenAI", "HubSpot", "n8n"],
          results: ["تأهيل تلقائي", "تكامل فوري", "استخراج بيانات"]
        },
        {
          id: '2',
          client: "شركة بناء",
          industry: "بناء",
          title: "أتمتة المقاولين",
          stats: [{ label: "معالجة المدخلات", value: "متعدد" }, { label: "جمع البيانات", value: "تلقائي" }],
          content: "أتمتة ذكاء اصطناعي متعددة الوسائط تعالج الصوت والصورة والنص.",
          quote: "النظام الصوتي يوفر لفريقنا أكثر من 25 ساعة أسبوعياً.",
          technologies: ["Telegram Bot API", "OpenAI Whisper", "Vision AI", "Make.com"],
          results: ["معالجة متعددة الوسائط", "جمع تلقائي", "تشغيل صوتي"]
        },
        {
          id: '3',
          client: "وكالة تسويق",
          industry: "تسويق",
          title: "أتمتة رفع CSV إلى HubSpot",
          stats: [{ label: "استيراد البيانات", value: "تلقائي" }, { label: "إدخال يدوي", value: "صفر" }],
          content: "أتمتة ترحيل البيانات الذكية.",
          quote: "ما كان يستغرق أياماً يحدث الآن في دقائق.",
          technologies: ["HubSpot API", "Python", "Zapier", "Data Validation"],
          results: ["استيراد تلقائي", "تعيين ذكي", "صفر إدخال يدوي"]
        },
        {
          id: '4',
          client: "خدمات مالية",
          industry: "مالية",
          title: "أتمتة Gmail للعملاء المحتملين",
          stats: [{ label: "معالجة البريد", value: "24/7" }, { label: "وقت الاستجابة", value: "فوري" }],
          content: "أتمتة Gmail مدعومة بالذكاء الاصطناعي.",
          quote: "وقت الاستجابة تحول من ساعات إلى ثوانٍ.",
          technologies: ["Gmail API", "OpenAI", "Dual CRM Sync", "n8n"],
          results: ["معالجة 24/7", "ردود فورية", "مزامنة مزدوجة"]
        },
        {
          id: '5',
          client: "استشارات عقارية",
          industry: "عقارات",
          title: "أتمتة رؤى العقارات",
          stats: [{ label: "التحليل المالي", value: "تلقائي" }, { label: "تسليم التقرير", value: "فوري" }],
          content: "أتمتة التخطيط المالي الشامل.",
          quote: "وسعنا خدماتنا الاستشارية 10 أضعاف.",
          technologies: ["Chart.js", "PDF Generation", "Financial APIs", "Make.com"],
          results: ["تحليل تلقائي", "إنشاء رسوم بيانية", "تسليم فوري"]
        }
      ]
    },
    faq: {
      sectionTitle: "الأسئلة الشائعة",
      sectionSubtitle: "كل ما تحتاج لمعرفته عن العمل مع Automation Rebel.",
      items: [
        { question: "هل تبنون البرامج أم تقدمون النصائح فقط؟", answer: "نفعل الاثنين! نبني أدوات الأتمتة الفعلية ونقدم النصائح." },
        { question: "ما الذي يمكن للأتمتة إصلاحه؟", answer: "يمكن للأتمتة إصلاح الأشياء المملة التي تضيع وقتك." },
        { question: "هل يمكنكم التعامل مع العمليات المعقدة؟", answer: "نعم! نحن خبراء في بناء سير عمل معقد." },
        { question: "هل لديكم أمثلة على أعمالكم؟", answer: "نعم! لدينا الكثير من الأمثلة الحقيقية." },
        { question: "هل هذا عمل لمرة واحدة أم مستمر؟", answer: "نقدم كلا الخيارين." },
        { question: "هل سيعمل هذا لنوع عملي؟", answer: "نعم! ساعدنا جميع أنواع الأعمال." },
        { question: "كم من الوقت والمال سيوفر هذا؟", answer: "معظم العملاء يوفرون 40-70٪ من وقتهم." },
        { question: "هل أنتم مدربون ومعتمدون؟", answer: "نعم، فريقنا لديه تدريب رسمي." },
        { question: "ما الذي يميزكم؟", answer: "نفهم أهداف عملك أولاً." },
        { question: "هل أحتاج خبراء تقنيين؟", answer: "لا! نبني واجهات سهلة الاستخدام." },
        { question: "لا تزال لديك أسئلة؟", answer: "دعنا نناقش كيف يمكن للأتمتة تحويل عملك." }
      ]
    },
    contact: {
      title: "هل أنت مستعد للبدء؟",
      subtitle: "احجز مكالمة الاكتشاف المجانية.",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "رقم الهاتف",
      messageLabel: "أخبرنا عن احتياجاتك",
      submitBtn: "احجز استشارة مجانية",
      disclaimer: "نرد خلال 24 ساعة.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        company: "اسم الشركة",
        message: "أخبرنا عن احتياجاتك",
        submit: "احجز استشارة مجانية"
      }
    },
    aiChat: {
      trigger: "دردش معنا",
      placeholder: "اسأل عن الأتمتة...",
      welcome: "مرحباً! كيف يمكنني مساعدتك في أتمتة عملك اليوم؟"
    }
  }
};