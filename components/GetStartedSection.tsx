import React, { useState } from 'react';
import { Mail, Phone, MapPin, Zap, Users, ArrowRight } from 'lucide-react';

export const GetStartedSection = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        workEmail: '',
        companyWebsite: '',
        currentlyUsing: '',
        wantToAchieve: '',
        bookConsultation: '',
        budgetRange: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <section id="get-started" className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-background to-surface/20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cta/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to <span className="text-cta">Get Started?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-main max-w-3xl mx-auto leading-relaxed">
                        We'd love to help! Share your details in the form and we'll respond with the best solution for you.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left Column - AI-Powered Consultation */}
                    <div className="space-y-6">
                        {/* Main Consultation Card */}
                        <div className="group bg-surface/90 backdrop-blur-xl border border-border rounded-3xl p-8 hover:border-cta/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cta/10 hover:-translate-y-1">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-cta/10 border border-cta/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-7 h-7 text-cta" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Consultation</h3>
                                    <p className="text-text-main text-sm leading-relaxed">
                                        Our AI specialists analyze your business needs and design custom automation solutions that deliver measurable results.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                {/* Email */}
                                <div className="group/item flex items-center gap-4 p-4 rounded-xl bg-background/60 border border-border/50 hover:border-cta/30 transition-all duration-300 cursor-pointer hover:bg-background/80">
                                    <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                        <Mail className="w-5 h-5 text-cta" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Email</div>
                                        <div className="text-white font-medium">consulting@nomanu.ai</div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group/item flex items-center gap-4 p-4 rounded-xl bg-background/60 border border-border/50 hover:border-cta/30 transition-all duration-300 cursor-pointer hover:bg-background/80">
                                    <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                        <Phone className="w-5 h-5 text-cta" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Phone</div>
                                        <div className="text-white font-medium">+63 975 040 5698</div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="group/item flex items-center gap-4 p-4 rounded-xl bg-background/60 border border-border/50 hover:border-cta/30 transition-all duration-300 cursor-pointer hover:bg-background/80">
                                    <div className="w-12 h-12 rounded-xl bg-cta/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                        <MapPin className="w-5 h-5 text-cta" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-text-muted uppercase tracking-wider mb-1">Location</div>
                                        <div className="text-white font-medium">Sending Illinois Worldwide</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Cards Row */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Fast Response Card */}
                            <div className="group bg-surface/90 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-500 hover:shadow-xl hover:shadow-cta/10 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-cta/10 border border-cta/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-6 h-6 text-cta" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">Fast Response</h4>
                                <p className="text-sm text-text-muted">24-hour turnaround days</p>
                            </div>

                            {/* Expert Team Card */}
                            <div className="group bg-surface/90 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-cta/50 transition-all duration-500 hover:shadow-xl hover:shadow-cta/10 hover:-translate-y-1">
                                <div className="w-12 h-12 rounded-xl bg-cta/10 border border-cta/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-6 h-6 text-cta" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">Expert Team</h4>
                                <p className="text-sm text-text-muted">AI specialists & engineers</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Start Your Project Form */}
                    <div className="bg-surface/90 backdrop-blur-xl border border-border rounded-3xl p-8 hover:border-cta/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cta/10">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-cta/10 border border-cta/30 flex items-center justify-center flex-shrink-0">
                                <ArrowRight className="w-7 h-7 text-cta" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                                <p className="text-text-main text-sm">Tell us about your automation needs</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name & Work Email */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        Fullname <span className="text-cta">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        value={formData.fullname}
                                        onChange={handleInputChange}
                                        placeholder="Fullname"
                                        required
                                        className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-white placeholder-text-muted focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        Work Email <span className="text-cta">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="workEmail"
                                        value={formData.workEmail}
                                        onChange={handleInputChange}
                                        placeholder="Work Email"
                                        required
                                        className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-white placeholder-text-muted focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Company Website */}
                            <div>
                                <label className="block text-sm font-medium text-text-main mb-2">
                                    Company Website
                                </label>
                                <input
                                    type="url"
                                    name="companyWebsite"
                                    value={formData.companyWebsite}
                                    onChange={handleInputChange}
                                    placeholder="Website URL"
                                    className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-white placeholder-text-muted focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20 transition-all"
                                />
                            </div>

                            {/* Currently Using & Want to Achieve */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        Are you currently using automation? <span className="text-cta">*</span>
                                    </label>
                                    <select
                                        name="currentlyUsing"
                                        value={formData.currentlyUsing}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-white focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="planning">Planning to</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        What do you want to achieve with automation? <span className="text-cta">*</span>
                                    </label>
                                    <select
                                        name="wantToAchieve"
                                        value={formData.wantToAchieve}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-white focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select</option>
                                        <option value="save-time">Save Time</option>
                                        <option value="reduce-costs">Reduce Costs</option>
                                        <option value="scale-business">Scale Business</option>
                                        <option value="improve-accuracy">Improve Accuracy</option>
                                    </select>
                                </div>
                            </div>

                            {/* Book Consultation & Budget */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        Would you like to book a free consultation?
                                    </label>
                                    <select
                                        name="bookConsultation"
                                        value={formData.bookConsultation}
                                        onChange={handleInputChange}
                                        className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-white focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select</option>
                                        <option value="yes">Yes, please</option>
                                        <option value="no">Not now</option>
                                        <option value="later">Maybe later</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-main mb-2">
                                        What's your budget range? <span className="text-cta">*</span>
                                    </label>
                                    <select
                                        name="budgetRange"
                                        value={formData.budgetRange}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-background/80 border border-border rounded-xl px-4 py-3.5 text-white focus:border-cta focus:outline-none focus:ring-2 focus:ring-cta/20 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select</option>
                                        <option value="under-5k">Under $5,000</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-plus">$25,000+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-cta hover:bg-cta-hover text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cta/30 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Get Started
                            </button>

                            <p className="text-center text-xs text-text-muted mt-4">
                                By submitting this form, you agree to our Privacy Policy and Terms of Service
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Custom select arrow */
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FF6B35' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.2em;
          padding-right: 2.5rem;
        }
      `}</style>
        </section>
    );
};
