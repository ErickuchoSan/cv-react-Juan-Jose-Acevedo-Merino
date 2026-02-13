import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="inicio" className="hero-tech-bg min-h-[60vh] flex items-center relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="circuit-nodes">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="circuit-node" />
                ))}
            </div>
            <div className="tech-particles">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="tech-particle" />
                ))}
            </div>
            <div className="scan-line" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
                <div className="text-left">
                    <h1 className="text-4xl md:text-7xl font-bold text-slate-50 mb-6 animate-fade-in tracking-tight">
                        Juan José Acevedo
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-amber-500 mb-6 animate-fade-in-delay font-medium border-l-4 border-amber-500 pl-4">
                        {t.hero.role}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl animate-fade-in-delay-2 leading-relaxed">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4 animate-fade-in-delay-3">
                        <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
                            {t.hero.chips.architecture}
                        </div>
                        <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
                            {t.hero.chips.leadership}
                        </div>
                        <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
                            {t.hero.chips.cloud}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
