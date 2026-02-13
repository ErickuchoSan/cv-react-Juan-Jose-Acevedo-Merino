import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaCode } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Juan José Acevedo
                        </h3>
                        <p className="text-gray-400 mb-4">
                            {t.footer.role}
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="mailto:juanjooscalb@outlook.com"
                                className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-xl"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">{t.footer.navigation}</h4>
                        <ul className="space-y-2">
                            {[
                                { name: t.nav.home, href: '#inicio' },
                                { name: t.nav.about, href: '#sobre-mi' },
                                { name: t.nav.experience, href: '#experiencia' },
                                { name: t.nav.skills, href: '#habilidades' },
                                { name: t.nav.contact, href: '#contacto' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">{t.nav.contact}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-3 text-amber-500" />
                                <a href="mailto:juanjooscalb@outlook.com" className="hover:text-white transition-colors">
                                    juanjooscalb@outlook.com
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaPhone className="mr-3 text-amber-500" />
                                <span>55 3310 8924</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaMapMarkerAlt className="mr-3 text-amber-500" />
                                <span>Cuauhtémoc, CDMX</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {currentYear} Juan José Acevedo Merino. {t.footer.rights}
                        </p>
                        <p className="text-gray-500 text-sm flex items-center">
                            {t.footer.madeWith} <FaHeart className="text-red-500 mx-1" /> & <FaCode className="text-amber-500 mx-1" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
