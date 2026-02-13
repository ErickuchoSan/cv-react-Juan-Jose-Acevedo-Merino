import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaCode } from 'react-icons/fa';

export const Footer: React.FC = () => {
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
                            Líder de Proyectos de Software & Desarrollador Sr .NET con más de 10 años de experiencia en tecnologías enterprise.
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
                        <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Inicio', href: '#inicio' },
                                { name: 'Sobre Mí', href: '#sobre-mi' },
                                { name: 'Experiencia', href: '#experiencia' },
                                { name: 'Habilidades', href: '#habilidades' },
                                { name: 'Contacto', href: '#contacto' },
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
                        <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-3 text-blue-500" />
                                <a href="mailto:juanjooscalb@outlook.com" className="hover:text-white transition-colors">
                                    juanjooscalb@outlook.com
                                </a>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaPhone className="mr-3 text-blue-500" />
                                <span>55 3310 8924</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <FaMapMarkerAlt className="mr-3 text-blue-500" />
                                <span>Cuauhtémoc, CDMX</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {currentYear} Juan José Acevedo Merino. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center">
                            Hecho con <FaHeart className="text-red-500 mx-1" /> y <FaCode className="text-blue-500 mx-1" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
