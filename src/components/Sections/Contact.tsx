import React, { useState } from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert(t.contact.send); // Using button text as alert for now, or could add a specific success message to translations later
    };

    return (
        <section id="contacto" className="enhanced-section section-tech-bg py-20 bg-white dark:bg-gray-800 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    title={t.contact.title}
                    subtitle={t.contact.subtitle}
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">{t.contact.infoTitle}</h3>
                        <div className="space-y-6">
                            <div className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4 border-l-4 border-l-amber-500/0 hover:border-l-amber-500 transition-all">
                                <div className="contact-icon w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-500">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Email</h4>
                                    <a href="mailto:juanjooscalb@outlook.com" className="text-amber-600 hover:text-amber-700 transition-colors">
                                        juanjooscalb@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4 border-l-4 border-l-amber-500/0 hover:border-l-amber-500 transition-all">
                                <div className="contact-icon w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-500">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">{t.contact.phone}</h4>
                                    <a href="tel:+525533108924" className="text-amber-600 hover:text-amber-700 transition-colors">
                                        55 3310 8924
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item glass-card tech-hover-effect p-4 flex items-start space-x-4 border-l-4 border-l-amber-500/0 hover:border-l-amber-500 transition-all">
                                <div className="contact-icon w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-500">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">{t.contact.location}</h4>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Cuauhtémoc, Ciudad de México
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">{t.contact.formTitle}</h3>
                        <form className="form-container" onSubmit={handleSubmit} noValidate>
                            <div className="form-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div className="form-field">
                                    <label htmlFor="name" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.name} *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        required
                                        placeholder={t.contact.name}
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.email} *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        required
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="form-field mb-6">
                                <label htmlFor="subject" className="form-label mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.subject}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder={t.contact.subject}
                                />
                            </div>

                            <div className="form-field mb-6">
                                <label htmlFor="message" className="form-label mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.message} *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input form-textarea w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all h-32 resize-none"
                                    required
                                    placeholder={t.contact.message}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-tech-primary w-full justify-center">
                                {t.contact.send}
                                <FaEnvelope className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
