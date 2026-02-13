import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import { FaBuilding, FaCalendarAlt, FaCode, FaProjectDiagram, FaServer, FaCogs } from 'react-icons/fa';

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    duration: string;
    location: string;
    description: string;
    functions: string[];
    icon: React.ComponentType<{ className?: string }>;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        role: "Líder de Proyectos de Software",
        company: "Grupo Salinas",
        period: "Mar 2022 – Actualidad",
        duration: "3+ años",
        location: "Ciudad de México",
        description: "Liderazgo de proyectos de desarrollo de software dentro del área de auditoría.",
        functions: [
            "Líder de proyectos de desarrollo de software dentro del área de auditoría, coordinando iniciativas tecnológicas orientadas a la mejora y evolución de sistemas existentes",
            "Planeación y organización de planes de trabajo mediante la aplicación de la metodología ágil Scrum, asegurando la atención oportuna de los requerimientos de los usuarios del despacho de auditoría",
            "Actuación como intermediario y negociador entre equipos de desarrollo, usuarios finales y gerentes de las áreas de auditoría, facilitando la definición, priorización y ejecución de mejoras y nuevos componentes de software",
            "Apoyo técnico al equipo de desarrollo, participando en implementaciones de alta complejidad y asegurando la correcta resolución de requerimientos críticos"
        ],
        icon: FaProjectDiagram
    },
    {
        role: "Desarrollador Sr .NET",
        company: "TH TEC – Colaborador externo para Grupo Salinas",
        period: "Ago 2018 – Mar 2022",
        duration: "3.5 años",
        location: "Ciudad de México",
        description: "Desarrollo de aplicaciones web empresariales y Web APIs en .NET y .NET Core.",
        functions: [
            "Desarrollo de aplicaciones web empresariales utilizando C#, ASP.NET, Angular, React JS y jQuery",
            "Implementación de interfaces responsivas mediante Bootstrap y CSS",
            "Conocimientos básicos de UI/UX, apoyados en la creación de prototipos con Figma",
            "Desarrollo de Web APIs en .NET y .NET Core, con integración de JWT y tokens de seguridad",
            "Implementación de mecanismos de seguridad mediante encriptación AES y RSA-254 en el manejo de información sensible para aplicaciones web y APIs",
            "Creación y mantenimiento de vistas, stored procedures, triggers y tareas programadas en SQL",
            "Documentación de objetos de base de datos mediante la generación de diccionarios de datos",
            "Uso de herramientas de análisis de vulnerabilidades, como Checkmarx, para la detección y mitigación de riesgos de seguridad en aplicaciones"
        ],
        icon: FaCode
    },
    {
        role: "Desarrollador Sr .NET",
        company: "Consult TI – Colaborador externo Vitamedica",
        period: "Ago 2017 – Ago 2018",
        duration: "1 año",
        location: "Ciudad de México",
        description: "Desarrollo y mantenimiento de aplicaciones web para sistemas internos del sector médico.",
        functions: [
            "Desarrollo y mantenimiento de aplicaciones web utilizando C#, ASP.NET, Angular, TypeScript y jQuery, orientadas a la operación de sistemas internos",
            "Implementación de interfaces responsivas mediante Bootstrap y CSS, mejorando la experiencia de usuario",
            "Desarrollo de funcionalidades en tiempo real mediante SignalR, aplicadas a un sistema de Call Center",
            "Creación de servicios web (WS) para la centralización de funciones provenientes de sistemas satélite de la empresa",
            "Diseño, creación y mantenimiento de vistas, stored procedures, triggers y tareas programadas en SQL Server",
            "Elaboración de diccionarios de datos y documentación técnica de objetos de base de datos",
            "Soporte y mantenimiento de módulos de catálogos que alimentan el sistema de Call Center"
        ],
        icon: FaServer
    },
    {
        role: "Desarrollador Sr .NET",
        company: "SIMMPAPEL – Colaborador externo NAFINSA & FORD Motors",
        period: "Jul 2016 – Ago 2017",
        duration: "1 año",
        location: "Ciudad de México",
        description: "Desarrollo y mantenimiento de aplicaciones web empresariales para el sector financiero y automotriz.",
        functions: [
            "Desarrollo y mantenimiento de aplicaciones web empresariales utilizando C#, ASP.NET y jQuery, orientadas a la operación de sistemas internos",
            "Implementación de interfaces responsivas mediante Bootstrap y CSS, optimizando la experiencia de usuario y la usabilidad",
            "Desarrollo de módulos de conversión de facturación electrónica de XML versión 3.3 a 3.4 para FORD Motor Company, asegurando el cumplimiento de normativas fiscales vigentes",
            "Diseño, creación y mantenimiento de vistas, stored procedures, triggers y tareas programadas en SQL Server",
            "Soporte y mantenimiento de módulos de asignación y control de gastos de viáticos para empleados del sector gubernamental en NAFINSA"
        ],
        icon: FaCogs
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experiencia" className="enhanced-section section-tech-bg py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title="Experiencia Profesional"
                    subtitle="+10 años en desarrollo de software y liderazgo de proyectos"
                />

                <div className="space-y-8">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={index} className="experience-card glass-card tech-hover-effect p-8 border-l-4 border-l-amber-500/0 hover:border-l-amber-500 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-amber-600 rounded-xl flex items-center justify-center shadow-lg border border-amber-500/20">
                                        <exp.icon className="text-white text-2xl" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center text-amber-600 font-medium mt-1">
                                                <FaBuilding className="mr-2" />
                                                {exp.company}
                                            </div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                                {exp.location}
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2 md:mt-0">
                                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-sm">
                                                <FaCalendarAlt className="mr-2 text-amber-500" />
                                                {exp.period} • {exp.duration}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-2">Responsabilidades:</h4>
                                        <ul className="grid md:grid-cols-2 gap-2">
                                            {exp.functions.map((func, i) => (
                                                <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                                    {func}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
