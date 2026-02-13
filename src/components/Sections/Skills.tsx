import React from 'react';
import { SectionTitle } from '../UI/SectionTitle';
import {
    FaCode, FaDatabase, FaShieldAlt, FaLayerGroup,
    FaLightbulb, FaUsers, FaChartBar, FaTasks,
    FaHandshake, FaComments, FaCogs, FaProjectDiagram
} from 'react-icons/fa';
import {
    SiSharp, SiDotnet, SiAngular, SiReact, SiJquery,
    SiMysql
} from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';

interface TechCategoryProps {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    items: { name: string; icon: React.ComponentType<{ className?: string }>; color: string }[];
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, icon: Icon, items }) => (
    <div className="glass-card tech-hover-effect p-6 border-l-2 border-l-amber-500/50 hover:border-l-amber-500 transition-colors">
        <div className="flex items-center mb-4">
            <Icon className="text-amber-600 text-2xl mr-3" />
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{title}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
                <span key={index} className="tech-tag flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm">
                    <item.icon className={`mr-2 ${item.color}`} />
                    <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
                </span>
            ))}
        </div>
    </div>
);

export const Skills: React.FC = () => {
    const { t } = useLanguage();

    const softSkills = [
        { icon: FaProjectDiagram, title: t.skills.softSkills.items[0].title, desc: t.skills.softSkills.items[0].desc },
        { icon: FaUsers, title: t.skills.softSkills.items[1].title, desc: t.skills.softSkills.items[1].desc },
        { icon: FaComments, title: t.skills.softSkills.items[2].title, desc: t.skills.softSkills.items[2].desc },
        { icon: FaHandshake, title: t.skills.softSkills.items[3].title, desc: t.skills.softSkills.items[3].desc },
        { icon: FaChartBar, title: t.skills.softSkills.items[4].title, desc: t.skills.softSkills.items[4].desc },
        { icon: FaTasks, title: t.skills.softSkills.items[5].title, desc: t.skills.softSkills.items[5].desc },
        { icon: FaLightbulb, title: t.skills.softSkills.items[6].title, desc: t.skills.softSkills.items[6].desc },
        { icon: FaCogs, title: t.skills.softSkills.items[7].title, desc: t.skills.softSkills.items[7].desc },
        { icon: FaCode, title: t.skills.softSkills.items[8].title, desc: t.skills.softSkills.items[8].desc },
    ];

    return (
        <section id="habilidades" className="enhanced-section section-tech-bg py-20 bg-gray-50 dark:bg-gray-900 relative">
            <div className="section-particles">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="section-particle" />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SectionTitle
                    title={t.skills.title}
                    subtitle={t.skills.subtitle}
                />

                {/* Main Skills with Progress Bars */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">{t.skills.mainTech}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: SiSharp, color: 'text-purple-600', name: 'C# / .NET', progress: 95 },
                            { icon: FaDatabase, color: 'text-red-600', name: 'SQL Server', progress: 90 },
                            { icon: SiAngular, color: 'text-red-500', name: 'Angular JS', progress: 80 },
                            { icon: SiReact, color: 'text-cyan-500', name: 'React JS', progress: 75 },
                        ].map((skill, index) => (
                            <div key={index} className="skill-card glass-card tech-hover-effect p-6 text-center border-t-4 border-t-amber-500">
                                <div className="skill-icon mb-4 inline-block">
                                    <skill.icon className={`text-4xl ${skill.color}`} />
                                </div>
                                <h4 className="skill-title text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">{skill.name}</h4>
                                <div className="skill-bar w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-2 overflow-hidden">
                                    <div
                                        className="skill-progress bg-gradient-to-r from-slate-700 to-amber-500 h-3 rounded-full relative"
                                        style={{ width: `${skill.progress}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm text-amber-600 font-bold">{skill.progress}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <TechCategory
                        title={t.skills.categories.languages}
                        icon={FaCode}
                        items={[
                            { name: 'C#', icon: SiSharp, color: 'text-purple-600' },
                            { name: 'ASP.NET / .NET Core', icon: SiDotnet, color: 'text-purple-500' },
                            { name: 'Angular JS', icon: SiAngular, color: 'text-red-500' },
                            { name: 'React JS', icon: SiReact, color: 'text-cyan-500' },
                            { name: 'jQuery', icon: SiJquery, color: 'text-blue-500' },
                        ]}
                    />
                    <TechCategory
                        title={t.skills.categories.databases}
                        icon={FaDatabase}
                        items={[
                            { name: 'SQL Server', icon: FaDatabase, color: 'text-red-600' },
                            { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
                            { name: 'Stored Procedures', icon: FaDatabase, color: 'text-amber-600' },
                            { name: 'Triggers & Jobs', icon: FaCogs, color: 'text-slate-600' },
                        ]}
                    />
                    <TechCategory
                        title={t.skills.categories.patterns}
                        icon={FaLayerGroup}
                        items={[
                            { name: 'MVC', icon: FaLayerGroup, color: 'text-blue-600' },
                            { name: 'MVVM', icon: FaLayerGroup, color: 'text-indigo-600' },
                            { name: 'Three Layer Architecture', icon: FaLayerGroup, color: 'text-purple-600' },
                        ]}
                    />
                    <TechCategory
                        title={t.skills.categories.security}
                        icon={FaShieldAlt}
                        items={[
                            { name: 'JWT & Tokens', icon: FaShieldAlt, color: 'text-green-600' },
                            { name: 'AES / RSA-254', icon: FaShieldAlt, color: 'text-red-600' },
                            { name: 'Checkmarx', icon: FaShieldAlt, color: 'text-amber-600' },
                            { name: 'Figma (UI/UX)', icon: FaLightbulb, color: 'text-pink-500' },
                        ]}
                    />
                </div>

                {/* Soft Skills & Competencies */}
                <div>
                    <h3 className="text-2xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">{t.skills.softSkills.title}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {softSkills.map((skill, index) => (
                            <div key={index} className="soft-skill-card glass-card tech-hover-effect p-6 text-center border-t-2 border-t-transparent hover:border-t-amber-500 transition-colors">
                                <skill.icon className="text-3xl text-amber-600 mb-4 mx-auto" />
                                <h4 className="font-semibold mb-2 text-slate-800 dark:text-slate-200 text-lg">{skill.title}</h4>
                                <p className="text-slate-600 dark:text-slate-300 text-sm">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
