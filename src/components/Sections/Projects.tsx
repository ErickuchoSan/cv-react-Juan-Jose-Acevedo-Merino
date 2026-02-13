import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaProjectDiagram, FaShieldAlt, FaServer } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Projects: React.FC = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: t.projects.items[0].title,
            description: t.projects.items[0].description,
            tech: t.projects.items[0].tech,
            icon: FaProjectDiagram
        },
        {
            title: t.projects.items[1].title,
            description: t.projects.items[1].description,
            tech: t.projects.items[1].tech,
            icon: FaServer
        },
        {
            title: t.projects.items[2].title,
            description: t.projects.items[2].description,
            tech: t.projects.items[2].tech,
            icon: FaShieldAlt
        }
    ];

    return (
        <section id="proyectos" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title={t.projects.title}
                    subtitle={t.projects.subtitle}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
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
                                    {project.tech.map((tag: string, tIndex: number) => (
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
