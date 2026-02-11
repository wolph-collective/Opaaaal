import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Stars } from 'lucide-react';

const PlanSelection: React.FC = () => {
    const navigate = useNavigate();
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

    // Interactive flow: Plan -> Checkout
    const handleStartTrial = () => {
        navigate('/checkout');
    };

    return (
        <div className="w-full min-h-screen bg-[#f6f8f5] dark:bg-[#0a0c0a] font-sans text-slate-900 dark:text-white flex flex-col items-center relative overflow-hidden">
            {/* Background Gradient Glow */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-64 h-64 bg-mint/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Main Container */}
            <div className="w-full max-w-[430px] flex flex-col px-6 pt-12 pb-8 flex-1 z-10">

                {/* Header */}
                <header className="mt-8 text-center space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        Unlock your full potential
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Reclaim your time and focus.
                    </p>
                </header>

                {/* Billing Toggle */}
                <div className="mt-10 flex justify-center">
                    <div className="bg-[#121212] p-1.5 rounded-full flex items-center w-full max-w-[320px]">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-full transition-all ${billingCycle === 'monthly' ? 'text-black bg-mint font-semibold shadow-lg' : 'text-slate-400'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-full transition-all relative ${billingCycle === 'yearly' ? 'text-black bg-mint font-semibold shadow-lg' : 'text-slate-400'}`}
                        >
                            Yearly
                            {billingCycle === 'yearly' && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full text-black whitespace-nowrap border-2 border-[#0a0c0a]">
                                    Save 50%
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Plans Section */}
                <div className="mt-8 flex flex-col gap-4">
                    {/* Opal Pro (Hero Card) */}
                    <div className="glass-morphism glow-shadow p-6 rounded-3xl flex flex-col relative overflow-hidden group cursor-pointer transition-transform active:scale-[0.99]" onClick={handleStartTrial}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Opal Pro</h2>
                                <p className="text-mint text-sm font-medium">Most Popular</p>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-bold text-white">{billingCycle === 'yearly' ? '$59.99' : '$9.99'}</span>
                                <span className="text-slate-400 text-sm block">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                            </div>
                        </div>
                        <ul className="space-y-4 my-4">
                            {[
                                "Unlimited Focus Sessions",
                                "Deep Work Mode",
                                "Custom Whitelisting",
                                "Detailed Insights & Analytics"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-mint w-5 h-5" />
                                    <span className="text-slate-200">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opal Basic (Secondary Card) */}
                    <div className="bg-[#121212] p-5 rounded-3xl flex justify-between items-center opacity-70 border border-white/5">
                        <div>
                            <h2 className="text-lg font-bold text-white">Opal Basic</h2>
                            <p className="text-slate-400 text-xs">Limit to 1 block session/day</p>
                        </div>
                        <div className="text-right">
                            <span className="text-lg font-semibold text-white">Free</span>
                        </div>
                    </div>
                </div>

                {/* CTA & Social Proof */}
                <div className="mt-auto pt-8 flex flex-col items-center gap-6">
                    <button
                        onClick={handleStartTrial}
                        className="w-full bg-mint text-[#0a0c0a] font-bold text-lg py-5 rounded-full shadow-[0_8px_30px_rgb(176,255,168,0.2)] active:scale-[0.98] transition-transform hover:scale-[1.02]"
                    >
                        Start 7-Day Free Trial
                    </button>

                    <div className="flex flex-col items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                            <Stars className="text-mint w-4 h-4 fill-mint" />
                            <span className="text-slate-500 text-sm font-medium">Trusted by 1M+ focusers</span>
                        </div>
                        <div className="flex gap-4">
                            <button className="text-[11px] text-slate-600 uppercase tracking-widest hover:text-slate-400">Restore Purchase</button>
                            <button className="text-[11px] text-slate-600 uppercase tracking-widest hover:text-slate-400">Terms of Service</button>
                        </div>
                    </div>
                </div>

                {/* iOS Home Indicator Spacing */}
                <div className="h-2"></div>
            </div>
        </div>
    );
};

export default PlanSelection;
