import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import {
    FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaLanguage, FaEnvelope,
    FaDownload, FaMoon, FaSun, FaBars, FaTimes, FaMapMarkerAlt, FaPhone
} from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';
import { CVDocumentEN } from '../PDF/CVDocumentEN';

const NAV_LINKS = [
    { href: '#inicio', label: 'Inicio', icon: FaUser },
    { href: '#sobre-mi', label: 'Sobre Mí', icon: FaUser },
    { href: '#experiencia', label: 'Experiencia', icon: FaBriefcase },
    { href: '#habilidades', label: 'Habilidades', icon: FaCode },
    { href: '#proyectos', label: 'Proyectos', icon: FaProjectDiagram },
    { href: '#idiomas', label: 'Idiomas', icon: FaLanguage },
    { href: '#contacto', label: 'Contacto', icon: FaEnvelope },
];

export const Sidebar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [showLangModal, setShowLangModal] = useState(false);

    const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

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

                        <div className="flex gap-2">
                            <button
                                onClick={toggleTheme}
                                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-500 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <FaMoon /> : <FaSun />}
                            </button>
                            <button
                                onClick={() => setShowLangModal(true)}
                                className="flex-1 flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm shadow-lg transition-all"
                            >
                                <FaDownload className="mr-2" />
                                CV
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Language Modal (Reused) */}
            {showLangModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setShowLangModal(false)}>
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    <div
                        className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-6 max-w-sm w-full border border-amber-500/20"
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Descargar CV</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <PDFDownloadLink
                                document={<CVDocument />}
                                fileName="CV_Juan_Jose_Acevedo_Merino_ES.pdf"
                                className="flex flex-col items-center p-4 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-amber-500 transition-all"
                            >
                                <span className="text-2xl mb-2">🇲🇽</span>
                                <span className="font-bold text-slate-700 dark:text-slate-300">Español</span>
                            </PDFDownloadLink>
                            <PDFDownloadLink
                                document={<CVDocumentEN />}
                                fileName="CV_Juan_Jose_Acevedo_Merino_EN.pdf"
                                className="flex flex-col items-center p-4 rounded-lg bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-amber-500 transition-all"
                            >
                                <span className="text-2xl mb-2">🇺🇸</span>
                                <span className="font-bold text-slate-700 dark:text-slate-300">English</span>
                            </PDFDownloadLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
