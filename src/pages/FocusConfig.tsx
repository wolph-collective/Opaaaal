import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bolt, X, Mail, ChevronRight } from 'lucide-react';
// Note: Lucide doesn't have a specific "Slack" icon by default, using a placeholder or generic icon.
// For the purpose of this demo, I'll use a colored box to represent Slack as in the design.

const FocusConfig: React.FC = () => {
    const navigate = useNavigate();
    const [intensity, setIntensity] = useState<'normal' | 'deep'>('normal');

    const handleStartFocus = () => {
        // Navigate to checkout as requested by user logic (Plan -> Focus -> Checkout)
        // or arguably "Start Focus" implies starting the session. 
        // Given the user flow request: Plan -> Focus -> Checkout, I will route to Checkout.
        navigate('/checkout');
    };

    return (
        <div className="w-full min-h-screen bg-[#f6f8f5] dark:bg-[#040404] font-['Space_Grotesk'] text-slate-900 dark:text-white flex items-center justify-center p-4">
            {/* Phone Container (Simulating iOS) */}
            <div className="relative w-full max-w-[400px] h-[844px] bg-[#f6f8f5] dark:bg-[#040404] rounded-[3rem] overflow-hidden border-[8px] border-slate-200 dark:border-[#1a1a1a] shadow-2xl flex flex-col">

                {/* Status Bar Space */}
                <div className="h-12 flex justify-between items-center px-8 pt-4">
                    <span className="text-xs font-semibold">9:41</span>
                    <div className="flex gap-1.5">
                        {/* Minimal status icons simulation */}
                        <div className="w-4 h-2.5 border border-current rounded-sm"></div>
                        <div className="w-3 h-3 bg-current rounded-full"></div>
                    </div>
                </div>

                {/* Header */}
                <header className="flex items-center justify-between px-6 pt-6 pb-4">
                    <div className="w-8"></div>
                    <h1 className="text-lg font-semibold tracking-tight">Start a Session</h1>
                    <button className="w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-zinc-800/50 rounded-full transition-colors hover:bg-zinc-700">
                        <X className="w-4 h-4" />
                    </button>
                </header>

                {/* Main Content */}
                <main className="flex-1 flex flex-col px-6 gap-8">

                    {/* Timer Section */}
                    <section className="flex-1 flex flex-col items-center justify-center py-4">
                        <div className="relative">
                            <span className="text-7xl font-bold tracking-tighter timer-glow">01:00:00</span>
                            <div className="mt-4 flex justify-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse"></div>
                                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Ready to focus</span>
                            </div>
                        </div>
                    </section>

                    {/* Settings Cards */}
                    <div className="space-y-4 mb-10">
                        {/* Intensity Selector */}
                        <div className="bg-white dark:bg-zinc-900/80 rounded-lg p-5 border border-slate-100 dark:border-zinc-800/50">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-zinc-400">Intensity</span>
                                <Bolt className="text-mint w-5 h-5 fill-mint" />
                            </div>
                            <div className="bg-slate-100 dark:bg-black/40 p-1 rounded-full flex gap-1 relative">
                                <button
                                    onClick={() => setIntensity('normal')}
                                    className={`flex-1 py-2.5 text-xs font-bold rounded-full transition-all ${intensity === 'normal' ? 'bg-mint text-black shadow-sm' : 'text-zinc-500'}`}
                                >
                                    Normal
                                </button>
                                <button
                                    onClick={() => setIntensity('deep')}
                                    className={`flex-1 py-2.5 text-xs font-bold rounded-full transition-all ${intensity === 'deep' ? 'bg-mint text-black shadow-sm' : 'text-zinc-500'}`}
                                >
                                    Deep Focus
                                </button>
                            </div>
                        </div>

                        {/* Apps Block Card */}
                        <div className="bg-white dark:bg-zinc-900/80 rounded-lg p-5 border border-slate-100 dark:border-zinc-800/50 flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-transform">
                            <div className="space-y-3">
                                <span className="text-sm font-medium text-zinc-400 block">Apps to Block</span>
                                <div className="flex -space-x-2">
                                    <div className="w-9 h-9 rounded-xl bg-[#4A154B] border-2 border-white dark:border-zinc-900 flex items-center justify-center overflow-hidden">
                                        {/* Slack placeholder */}
                                        <span className="text-white font-bold text-xs">Sl</span>
                                    </div>
                                    <div className="w-9 h-9 rounded-xl bg-blue-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center overflow-hidden">
                                        <Mail className="text-white w-4 h-4" />
                                    </div>
                                    <div className="w-9 h-9 rounded-xl bg-zinc-800 border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                                        <span className="text-[10px] font-bold">+12</span>
                                    </div>
                                </div>
                            </div>
                            <ChevronRight className="text-zinc-600 w-5 h-5" />
                        </div>
                    </div>
                </main>

                {/* Footer / Action Area */}
                <footer className="px-6 pb-12 pt-4 flex flex-col items-center gap-6">
                    <button
                        onClick={handleStartFocus}
                        className="w-full bg-mint text-black font-bold py-5 rounded-full text-lg shadow-[0_10px_30px_-5px_rgba(176,255,168,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        Start Focus
                    </button>
                    <p className="text-zinc-500 dark:text-[#A1A1AA] text-xs text-center leading-relaxed max-w-[280px] italic">
                        "The successful warrior is the average man, with laser-like focus."
                    </p>
                </footer>

                {/* iPhone Notch/Home Bar */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[2rem] z-50"></div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-zinc-800 rounded-full"></div>
            </div>
        </div>
    );
};

export default FocusConfig;
