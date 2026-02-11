import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, CreditCard, Lock } from 'lucide-react';

const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState<'apple' | 'card'>('apple');

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubscribe = () => {
        alert("Subscription Successful! (Demo)");
    };

    return (
        <div className="w-full min-h-screen bg-[#f6f8f5] dark:bg-[#000000] font-['Manrope'] text-gray-900 dark:text-white antialiased">
            <div className="max-w-[430px] mx-auto flex flex-col px-6 py-8 min-h-screen">

                {/* Header */}
                <header className="flex items-center justify-between mb-10 pt-4">
                    <button
                        onClick={handleBack}
                        className="w-12 h-12 flex items-center justify-center bg-[#121212] rounded-full border border-white/5 hover:bg-white/10 transition-colors"
                    >
                        <ArrowLeft className="text-white w-5 h-5" />
                    </button>
                    <h1 className="text-lg font-bold tracking-tight">Secure Checkout</h1>
                    <div className="w-12"></div>
                </header>

                {/* Order Summary Card */}
                <section className="mb-8">
                    <div className="bg-[#121212] border border-white/5 p-6 rounded-[24px] shadow-2xl">
                        <h2 className="text-xs uppercase tracking-widest text-[#A1A1AA] font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-extrabold text-white">Opal Pro Yearly</h3>
                                <p className="text-mint font-medium mt-1">7-Day Free Trial included</p>
                            </div>
                            <div className="text-right">
                                <span className="text-xl font-bold text-white">$59.99</span>
                                <p className="text-[#A1A1AA] text-sm">/year</p>
                            </div>
                        </div>
                        <div className="h-px bg-white/10 mb-6"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-white font-semibold">Total due today</span>
                            <span className="text-2xl font-extrabold text-mint">$0.00</span>
                        </div>
                    </div>
                </section>

                {/* Payment Method Section */}
                <section className="mb-8">
                    <h2 className="text-xs uppercase tracking-widest text-[#A1A1AA] font-bold mb-4 px-2">Payment Method</h2>
                    <div className="space-y-4">
                        {/* Apple Pay Selected */}
                        <div
                            onClick={() => setPaymentMethod('apple')}
                            className="relative group cursor-pointer"
                        >
                            <div className={`absolute -inset-0.5 bg-mint/20 rounded-[24px] blur opacity-75 transition duration-1000 ${paymentMethod === 'apple' ? 'opacity-100' : 'opacity-0'}`}></div>
                            <div className={`relative flex items-center justify-between bg-[#121212] border-2 p-5 rounded-[24px] shadow-glow ${paymentMethod === 'apple' ? 'border-mint' : 'border-white/10'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-8 bg-black flex items-center justify-center rounded-md border border-white/10">
                                        {/* Fake Apple Pay Logo */}
                                        <span className="text-white font-bold text-[10px]">Pay</span>
                                    </div>
                                    <span className="font-bold text-white">Apple Pay</span>
                                </div>
                                {paymentMethod === 'apple' && (
                                    <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center">
                                        <Check className="text-black w-3.5 h-3.5 font-bold" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Credit Card Option */}
                        <div
                            onClick={() => setPaymentMethod('card')}
                            className={`flex items-center justify-between bg-[#121212]/50 border p-5 rounded-[24px] hover:bg-[#121212] transition-colors cursor-pointer ${paymentMethod === 'card' ? 'border-mint bg-[#121212]' : 'border-white/10'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-8 bg-white/5 flex items-center justify-center rounded-md border border-white/10">
                                    <CreditCard className="text-[#A1A1AA] w-5 h-5" />
                                </div>
                                <span className="font-bold text-[#A1A1AA]">Credit Card</span>
                            </div>
                            {paymentMethod === 'card' ? (
                                <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center">
                                    <Check className="text-black w-3.5 h-3.5 font-bold" />
                                </div>
                            ) : (
                                <div className="w-6 h-6 rounded-full border-2 border-white/10"></div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Trial Terms */}
                <section className="mt-auto px-4 mb-6">
                    <p className="text-[#A1A1AA] text-[11px] leading-relaxed text-center">
                        Your 7-day free trial will begin immediately. You can cancel at any time in the App Store settings. If not cancelled, the yearly subscription of $59.99 will be charged automatically at the end of the trial period.
                    </p>
                </section>

                {/* CTA Button */}
                <section className="mb-6">
                    <button
                        onClick={handleSubscribe}
                        className="w-full bg-mint hover:bg-mint/90 text-black font-extrabold text-lg py-5 rounded-full shadow-lg shadow-mint/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                    >
                        {/* Apple Logo placeholder */}
                        <span className="font-bold text-xl"></span>
                        Subscribe with Apple Pay
                    </button>
                </section>

                {/* Security Footer */}
                <footer className="flex items-center justify-center gap-2 mb-4 pb-4">
                    <Lock className="text-[#A1A1AA] w-3 h-3" />
                    <span className="text-[#A1A1AA] text-xs font-semibold tracking-wide uppercase">SSL Secure Connection</span>
                </footer>
            </div>
        </div>
    );
};

export default Checkout;
