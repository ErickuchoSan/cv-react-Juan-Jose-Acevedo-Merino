import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../context/LanguageContext';
import {
    FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaLanguage, FaEnvelope,
    FaDownload, FaMoon, FaSun, FaBars, FaTimes, FaMapMarkerAlt, FaPhone
} from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';
import { CVDocumentEN } from '../PDF/CVDocumentEN';
import { CVDocumentDE } from '../PDF/CVDocumentDE';

export const Sidebar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [showLangModal, setShowLangModal] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);

    const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

    const NAV_LINKS = [
        { href: '#inicio', label: t.nav.home, icon: FaUser },
        { href: '#sobre-mi', label: t.nav.about, icon: FaUser },
        { href: '#experiencia', label: t.nav.experience, icon: FaBriefcase },
        { href: '#habilidades', label: t.nav.skills, icon: FaCode },
        { href: '#proyectos', label: t.nav.projects, icon: FaProjectDiagram },
        { href: '#idiomas', label: t.nav.languages, icon: FaLanguage },
        { href: '#contacto', label: t.nav.contact, icon: FaEnvelope },
    ];

    const flags = {
        es: '🇲🇽',
        en: '🇺🇸',
        de: '🇩🇪'
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleMobileMenu}
                className="md:hidden fixed top-4 right-4 z-50 p-3 bg-slate-900 text-amber-500 rounded-full shadow-lg border border-amber-500/30"
            >
                {isMobileOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar Container */}
            <aside className={`
                fixed inset-y-0 left-0 z-40 w-80 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out border-r border-slate-800
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0
            `}>
                <div className="h-full flex flex-col overflow-y-auto custom-scrollbar">

                    {/* Profile Header */}
                    <div className="p-8 text-center border-b border-slate-800 bg-slate-950/50">
                        <div className="relative inline-block mb-4">
                            <div className="absolute inset-0 rounded-full border-2 border-amber-500 animate-pulse"></div>
                            <img
                                src="/assets/images/profile.jpeg"
                                alt="Juan José Acevedo"
                                className="relative w-32 h-32 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                            />
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 border-2 border-slate-900 text-xs font-bold">
                                +10
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Juan José Acevedo</h2>
                        <p className="text-amber-500 font-medium text-sm mt-1">Líder de Proyectos & Desarrollador .NET</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-800 hover:text-amber-400 transition-all duration-200 group"
                            >
                                <link.icon className="mr-3 text-slate-500 group-hover:text-amber-500 transition-colors" />
                                <span className="font-medium">{link.label}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Contact & Actions */}
                    <div className="p-6 border-t border-slate-800 bg-slate-950/30">
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-slate-400">
                                <FaEnvelope className="mr-3 text-amber-600" />
                                <span className="truncate">juanjooscalb@outlook.com</span>
                            </div>
                            <div className="flex items-center text-sm text-slate-400">
                                <FaPhone className="mr-3 text-amber-600" />
                                <span>55 3310 8924</span>
                            </div>
                            <div className="flex items-center text-sm text-slate-400">
                                <FaMapMarkerAlt className="mr-3 text-amber-600" />
                                <span>CDMX, Cuauhtémoc</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                            <button
                                onClick={toggleTheme}
                                className="col-span-1 p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-500 transition-colors flex items-center justify-center"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <FaMoon /> : <FaSun />}
                            </button>

                            <div className="relative col-span-1">
                                <button
                                    onClick={() => setShowLangMenu(!showLangMenu)}
                                    className="w-full h-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-500 transition-colors flex items-center justify-center"
                                >
                                    <span className="text-lg">{flags[language]}</span>
                                </button>

                                {showLangMenu && (
                                    <div className="absolute bottom-full left-0 mb-2 w-32 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden">
                                        <button onClick={() => { setLanguage('es'); setShowLangMenu(false); }} className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 flex items-center gap-2"><span className="text-lg">🇲🇽</span> ES</button>
                                        <button onClick={() => { setLanguage('en'); setShowLangMenu(false); }} className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 flex items-center gap-2"><span className="text-lg">🇺🇸</span> EN</button>
                                        <button onClick={() => { setLanguage('de'); setShowLangMenu(false); }} className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 flex items-center gap-2"><span className="text-lg">🇩🇪</span> DE</button>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => setShowLangModal(true)}
                                className="col-span-2 flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs shadow-lg transition-all"
                            >
                                <FaDownload className="mr-1" />
                                {t.nav.downloadCV}
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Reusing existing Language Modal logic, just ensuring it's kept */}
            {showLangModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setShowLangModal(false)}>
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    <div
                        className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-6 max-w-sm w-full border border-amber-500/20"
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Descargar CV</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <PDFDownloadLink
                                document={<CVDocument />}
                                fileName="CV_Juan_Jose_Acevedo_Merino_ES.pdf"
                                className="flex items-center p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-amber-500 transition-all group"
                            >
                                <span className="text-2xl mr-3">🇲🇽</span>
                                <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">Español</span>
                            </PDFDownloadLink>
                            <PDFDownloadLink
                                document={<CVDocumentEN />}
                                fileName="CV_Juan_Jose_Acevedo_Merino_EN.pdf"
                                className="flex items-center p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-amber-500 transition-all group"
                            >
                                <span className="text-2xl mr-3">🇺🇸</span>
                                <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">English</span>
                            </PDFDownloadLink>
                            <PDFDownloadLink
                                document={<CVDocumentDE />}
                                fileName="CV_Juan_Jose_Acevedo_Merino_DE.pdf"
                                className="flex items-center p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-amber-500 transition-all group"
                            >
                                <span className="text-2xl mr-3">🇩🇪</span>
                                <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">Deutsch</span>
                            </PDFDownloadLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
