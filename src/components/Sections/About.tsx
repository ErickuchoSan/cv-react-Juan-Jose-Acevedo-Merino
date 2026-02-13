import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaCertificate } from 'react-icons/fa';

export const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Sobre Mí"
                    subtitle="Líder de Proyectos & Desarrollador Sr .NET"
                />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                            Objetivo Profesional
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Profesional en desarrollo de software con más de <strong className="text-blue-600">una década de experiencia</strong> en
                            la construcción de aplicaciones web y APIs en tecnologías <strong className="text-blue-600">.NET y .NET Core</strong> para
                            organizaciones de los sectores médico, financiero y de auditoría.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Especializado en el análisis de requerimientos, optimización de sistemas y desarrollo de soluciones robustas
                            orientadas al usuario. Con <strong className="text-blue-600">4 años de experiencia liderando proyectos</strong> de
                            desarrollo de software, aportando habilidades de liderazgo, coordinación de equipos multidisciplinarios y
                            aplicación de metodologías ágiles.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '10+', label: 'Años de Experiencia' },
                                { value: '4+', label: 'Años Liderando' },
                                { value: '4', label: 'Empresas' },
                                { value: '100%', label: 'Compromiso' }
                            ].map((stat, index) => (
                                <div key={index} className="stat-item glass-card tech-hover-effect p-4">
                                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaGraduationCap className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Educación</h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Licenciado en Informática</p>
                                    <p className="text-blue-600 text-sm font-medium">2009 – 2013 • Universidad Autónoma de Tamaulipas</p>
                                    <p className="text-gray-500 text-sm">Tampico, Tamaulipas, MX</p>
                                </div>
                                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">Programa de Inglés</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">2020-2021 • Interlingua México</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaCertificate className="text-amber-500 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Certificaciones</h4>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Scrum Fundamentals Certified</p>
                                    <p className="text-gray-500 text-xs">2018 • SCRUMStudy</p>
                                </div>
                                <div className="pt-1 border-t border-gray-200 dark:border-gray-700">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Software Development Fundamentals</p>
                                    <p className="text-gray-500 text-xs">2013 • Microsoft – UAT</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaBriefcase className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Disponibilidad</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>Tiempo completo</strong> • Presencial/Híbrido/Remoto<br />
                                <span className="text-sm text-blue-600">Ciudad de México</span>
                            </p>
                        </div>

                        <div className="info-card glass-card tech-hover-effect p-6">
                            <div className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Ubicación</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Cuauhtémoc, Ciudad de México
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
