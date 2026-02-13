import React, { useState } from 'react';
import { FaDownload, FaEnvelope, FaTimes } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../PDF/CVDocument';
import { CVDocumentEN } from '../PDF/CVDocumentEN';

export const Hero: React.FC = () => {
    const [showLangModal, setShowLangModal] = useState(false);

    return (
        <section id="inicio" className="hero-tech-bg min-h-screen flex items-center pt-16 relative overflow-hidden">
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
            <div className="tech-waves">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="tech-wave" />
                ))}
            </div>
            <div className="scan-line" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            Juan José Acevedo Merino
                        </h1>
                        <p className="text-xl md:text-2xl text-amber-400 mb-6 animate-fade-in-delay">
                            Líder de Proyectos de Software & Desarrollador Sr .NET
                        </p>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl animate-fade-in-delay-2">
                            Profesional con más de <strong className="text-blue-400">una década de experiencia</strong> en
                            aplicaciones web y APIs con tecnologías .NET y .NET Core. Especializado en análisis de requerimientos,
                            optimización de sistemas y liderazgo de equipos multidisciplinarios con metodologías ágiles.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-delay-3">
                            <button
                                onClick={() => setShowLangModal(true)}
                                className="btn-tech-primary"
                            >
                                <FaDownload className="mr-2" />
                                Descargar CV
                            </button>
                            <a href="#contacto" className="btn-tech-secondary">
                                <FaEnvelope className="mr-2" />
                                Contactar
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="profile-glow"></div>
                            <img
                                src="/assets/images/profile.jpeg"
                                alt="Juan José Acevedo Merino"
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400/50 shadow-2xl z-10"
                            />
                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                                +10 años
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Language Selection Modal */}
            {showLangModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setShowLangModal(false)}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal */}
                    <div
                        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-md w-full"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'scaleIn 0.3s ease-out' }}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowLangModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <FaDownload className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                Descargar CV
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Selecciona el idioma de tu CV
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Spanish */}
                            <PDFDownloadLink
                                document={<CVDocument />}
                                fileName="CV_Juan_Jose_Acevedo_Merino_ES.pdf"
                                className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 cursor-pointer group"
                                onClick={() => setTimeout(() => setShowLangModal(false), 500)}
                            >
                                {({ loading }) => (
                                    <>
                                        <span className="text-4xl mb-3">🇲🇽</span>
                                        <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            Español
                                        </span>
                                        <span className="text-xs text-gray-400 mt-1">
                                            {loading ? 'Generando...' : 'Descargar PDF'}
                                        </span>
                                    </>
                                )}
                            </PDFDownloadLink>

                            {/* English */}
                            <PDFDownloadLink
                                document={<CVDocumentEN />}
                                fileName="CV_Juan_Jose_Acevedo_Merino_EN.pdf"
                                className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-amber-500 dark:hover:border-amber-400 bg-gray-50 dark:bg-gray-700 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-all duration-300 cursor-pointer group"
                                onClick={() => setTimeout(() => setShowLangModal(false), 500)}
                            >
                                {({ loading }) => (
                                    <>
                                        <span className="text-4xl mb-3">🇺🇸</span>
                                        <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                            English
                                        </span>
                                        <span className="text-xs text-gray-400 mt-1">
                                            {loading ? 'Generating...' : 'Download PDF'}
                                        </span>
                                    </>
                                )}
                            </PDFDownloadLink>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
