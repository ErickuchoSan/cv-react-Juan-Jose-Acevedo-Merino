import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaBuilding, FaCalendarAlt, FaCode, FaProjectDiagram, FaServer, FaCogs } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Experience: React.FC = () => {
    const { t } = useLanguage();

    const experienceData = [
        {
            role: t.experience.roles[0].title,
            company: t.experience.roles[0].company,
            period: t.experience.roles[0].period,
            duration: t.experience.roles[0].duration,
            location: t.experience.roles[0].location,
            description: t.experience.roles[0].description,
            responsibilities: t.experience.roles[0].responsibilities,
            functions: t.experience.roles[0].functions,
            icon: FaProjectDiagram
        },
        {
            role: t.experience.roles[1].title,
            company: t.experience.roles[1].company,
            period: t.experience.roles[1].period,
            duration: t.experience.roles[1].duration,
            location: t.experience.roles[1].location,
            description: t.experience.roles[1].description,
            responsibilities: t.experience.roles[1].responsibilities,
            functions: t.experience.roles[1].functions,
            icon: FaCode
        },
        {
            role: t.experience.roles[2].title,
            company: t.experience.roles[2].company,
            period: t.experience.roles[2].period,
            duration: t.experience.roles[2].duration,
            location: t.experience.roles[2].location,
            description: t.experience.roles[2].description,
            responsibilities: t.experience.roles[2].responsibilities,
            functions: t.experience.roles[2].functions,
            icon: FaServer
        },
        {
            role: t.experience.roles[3].title,
            company: t.experience.roles[3].company,
            period: t.experience.roles[3].period,
            duration: t.experience.roles[3].duration,
            location: t.experience.roles[3].location,
            description: t.experience.roles[3].description,
            responsibilities: t.experience.roles[3].responsibilities,
            functions: t.experience.roles[3].functions,
            icon: FaCogs
        }
    ];

    return (
        <section id="experiencia" className="enhanced-section section-tech-bg py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title={t.experience.title}
                    subtitle={t.experience.subtitle}
                />

                <div className="space-y-8">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="experience-card glass-card tech-hover-effect p-8 border-l-4 border-l-amber-500/0 hover:border-l-amber-500 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-amber-600 rounded-xl flex items-center justify-center shadow-lg border border-amber-500/20">
                                        <exp.icon className="text-white text-2xl" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center text-amber-600 font-medium mt-1">
                                                <FaBuilding className="mr-2" />
                                                {exp.company}
                                            </div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                                {exp.location}
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2 md:mt-0">
                                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-sm">
                                                <FaCalendarAlt className="mr-2 text-amber-500" />
                                                {exp.period} • {exp.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">{exp.responsibilities}</h4>
                                        <ul className="grid md:grid-cols-2 gap-2">
                                            {exp.functions.map((func: string, i: number) => (
                                                <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                                    {func}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
