import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaProjectDiagram, FaShieldAlt, FaServer } from 'react-icons/fa';

export const PROJECTS = [
    {
        title: "Liderazgo de Proyectos en Auditoría",
        description: "Coordinación de proyectos de desarrollo de software dentro del área de auditoría de Grupo Salinas. Gestión de equipos multidisciplinarios con metodología Scrum, facilitando la priorización y entrega de soluciones tecnológicas.",
        tech: ["Scrum", "Liderazgo", "Gestión", "Auditoría", ".NET"],
        icon: FaProjectDiagram
    },
    {
        title: "Plataformas Web Empresariales .NET",
        description: "Desarrollo de aplicaciones web empresariales de alta complejidad utilizando C#, ASP.NET, Angular y React. Implementación de Web APIs con .NET Core, integración de JWT y arquitectura MVC/MVVM.",
        tech: ["C#", "ASP.NET", ".NET Core", "Angular", "React", "SQL Server"],
        icon: FaServer
    },
    {
        title: "Seguridad & Encriptación",
        description: "Implementación de mecanismos de seguridad mediante encriptación AES y RSA-254 para el manejo seguro de información sensible. Análisis de vulnerabilidades con Checkmarx y gestión de tokens JWT.",
        tech: ["AES", "RSA-254", "JWT", "Checkmarx", "Seguridad"],
        icon: FaShieldAlt
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Logros Destacados"
                    subtitle="Proyectos y áreas de impacto profesional"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="project-card glass-card tech-hover-effect flex flex-col h-full">
                            <div className="project-image bg-gradient-to-br from-blue-600 to-amber-500 text-center p-6 flex justify-center items-center h-48">
                                <project.icon className="text-6xl text-white" />
                            </div>

                            <div className="project-content p-6 flex-grow flex flex-col">
                                <h3 className="project-title text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                                    {project.title}
                                </h3>
                                <p className="project-description text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="project-tech flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tag, tIndex) => (
                                        <span key={tIndex} className="tech-tag px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
