import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaCertificate } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="sobre-mi" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title={t.about.title}
                    subtitle={t.about.subtitle}
                />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                            {t.about.objectiveTitle}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            {t.about.objective}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '10+', label: t.about.stats.experience },
                                { value: '4+', label: t.about.stats.leadership },
                                { value: '4', label: t.about.stats.companies },
                                { value: '100%', label: t.about.stats.commitment }
                            ].map((stat, index) => (
                                <div key={index} className="stat-item glass-card tech-hover-effect p-4 border-l-4 border-l-amber-500">
                                    <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</div>
                                    <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaGraduationCap className="text-amber-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{t.about.education.title}</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold text-slate-800 dark:text-slate-200">{t.about.education.degree}</p>
                                    <p className="text-amber-600 text-sm font-medium">2009 – 2013 • {t.about.education.university}</p>
                                    <p className="text-slate-500 text-sm">{t.about.education.location}</p>
                                </div>
                                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                                    <p className="font-semibold text-slate-800 dark:text-slate-200">{t.about.education.englishProgram}</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">2020-2021 • {t.about.education.englishSchool}</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaCertificate className="text-amber-500 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{t.about.certifications.title}</h4>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{t.about.certifications.scrum}</p>
                                    <p className="text-slate-500 text-xs">2018 • SCRUMStudy</p>
                                </div>
                                <div className="pt-1 border-t border-slate-200 dark:border-slate-700">
                                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{t.about.certifications.msDev}</p>
                                    <p className="text-slate-500 text-xs">2013 • Microsoft – UAT</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaBriefcase className="text-amber-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{t.about.availability.title}</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                {t.about.availability.details}
                            </p>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-amber-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{t.about.location.title}</h4>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                                {t.about.location.details}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
