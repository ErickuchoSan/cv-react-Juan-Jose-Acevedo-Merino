import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaLanguage } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Languages: React.FC = () => {
    const { t } = useLanguage();

    const languages = [
        {
            name: t.languages.items[0].name,
            level: t.languages.items[0].level,
            percentage: t.languages.items[0].percentage,
            details: t.languages.items[0].details,
            color: 'from-green-500 to-green-600'
        },
        {
            name: t.languages.items[1].name,
            level: t.languages.items[1].level,
            percentage: t.languages.items[1].percentage,
            details: t.languages.items[1].details,
            color: 'from-slate-500 to-slate-600'
        }
    ];

    return (
        <section id="idiomas" className="enhanced-section section-tech-bg py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title={t.languages.title}
                    subtitle={t.languages.subtitle}
                />

                <div className="flex justify-center">
                    <div className="w-full max-w-2xl grid md:grid-cols-2 gap-6">
                        {languages.map((lang, index) => (
                            <div key={index} className="glass-card tech-hover-effect p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <FaLanguage className="text-amber-600 text-2xl mr-3" />
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">{lang.name}</h3>
                                            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                                                {lang.level}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-slate-700 dark:text-slate-300">
                                        {lang.percentage}%
                                    </div>
                                </div>

                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-4 overflow-hidden">
                                    <div
                                        className={`h-3 rounded-full transition-all duration-500 bg-gradient-to-r ${lang.color}`}
                                        style={{ width: `${lang.percentage}%` }}
                                    />
                                </div>

                                <ul className="space-y-1">
                                    {lang.details.map((detail: string, i: number) => (
                                        <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
