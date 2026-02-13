import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
    },
    sidebar: {
        width: '35%',
        backgroundColor: '#1e3a5f',
        padding: 20,
        color: 'white',
    },
    main: {
        width: '65%',
        padding: 20,
        color: '#1a1a1a',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'white',
        fontFamily: 'Helvetica-Bold',
    },
    titleRole: {
        fontSize: 9,
        color: '#d4a843',
        marginBottom: 15,
        fontFamily: 'Helvetica-Bold',
    },
    sidebarSection: {
        marginBottom: 15,
    },
    sidebarTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#d4a843',
        paddingBottom: 3,
        marginBottom: 8,
        color: '#d4a843',
        fontFamily: 'Helvetica-Bold',
    },
    sidebarText: {
        fontSize: 8,
        marginBottom: 3,
        color: '#e0e0e0',
        lineHeight: 1.4,
    },
    mainTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#1e3a5f',
        paddingBottom: 3,
        marginBottom: 10,
        color: '#1e3a5f',
        fontFamily: 'Helvetica-Bold',
    },
    mainSection: {
        marginBottom: 12,
    },
    experienceRole: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#1e3a5f',
        fontFamily: 'Helvetica-Bold',
    },
    experienceCompany: {
        fontSize: 9,
        color: '#d4a843',
        marginBottom: 2,
        fontFamily: 'Helvetica-Bold',
    },
    experiencePeriod: {
        fontSize: 7,
        color: '#666666',
        marginBottom: 4,
    },
    experienceItem: {
        fontSize: 7.5,
        marginBottom: 2,
        color: '#333333',
        lineHeight: 1.3,
        paddingLeft: 8,
    },
    experienceEntry: {
        marginBottom: 10,
    },
    skillBar: {
        height: 5,
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        marginTop: 2,
        marginBottom: 6,
    },
    skillFill: {
        height: 5,
        borderRadius: 3,
        backgroundColor: '#d4a843',
    },
    skillName: {
        fontSize: 8,
        color: '#e0e0e0',
    },
    contactRow: {
        flexDirection: 'row' as const,
        marginBottom: 6,
        alignItems: 'center' as const,
    },
    contactLabel: {
        fontSize: 8,
        color: '#d4a843',
        width: 55,
        fontFamily: 'Helvetica-Bold',
    },
    contactValue: {
        fontSize: 8,
        color: '#e0e0e0',
        flex: 1,
    },
    bullet: {
        fontSize: 8,
        color: '#d4a843',
    },
    objectiveText: {
        fontSize: 8,
        color: '#333333',
        lineHeight: 1.5,
        marginBottom: 10,
    },
});

const SKILLS_PDF = [
    { name: 'C# / .NET / .NET Core', level: 95 },
    { name: 'SQL Server', level: 90 },
    { name: 'Angular JS', level: 80 },
    { name: 'React JS', level: 75 },
    { name: 'jQuery / Bootstrap', level: 85 },
    { name: 'JWT / AES / RSA', level: 80 },
];

const EXPERIENCE_PDF = [
    {
        role: 'Líder de Proyectos de Software',
        company: 'Grupo Salinas',
        period: 'Mar 2022 – Actualidad',
        items: [
            'Líder de proyectos de desarrollo de software en el área de auditoría',
            'Planeación y organización de planes de trabajo con metodología Scrum',
            'Intermediario entre equipos de desarrollo, usuarios finales y gerentes',
            'Apoyo técnico en implementaciones de alta complejidad',
        ],
    },
    {
        role: 'Desarrollador Sr .NET',
        company: 'TH TEC – Grupo Salinas',
        period: 'Ago 2018 – Mar 2022',
        items: [
            'Desarrollo de aplicaciones web con C#, ASP.NET, Angular, React y jQuery',
            'Desarrollo de Web APIs en .NET Core con JWT y tokens de seguridad',
            'Implementación de encriptación AES y RSA-254 para información sensible',
            'Creación de stored procedures, triggers y tareas programadas en SQL',
            'Uso de Checkmarx para análisis de vulnerabilidades',
        ],
    },
    {
        role: 'Desarrollador Sr .NET',
        company: 'Consult TI – Vitamedica',
        period: 'Ago 2017 – Ago 2018',
        items: [
            'Desarrollo con C#, ASP.NET, Angular, TypeScript y jQuery',
            'Implementación de funcionalidades en tiempo real con SignalR',
            'Creación de servicios web para sistemas satélite',
        ],
    },
    {
        role: 'Desarrollador Sr .NET',
        company: 'SIMMPAPEL – NAFINSA & FORD',
        period: 'Jul 2016 – Ago 2017',
        items: [
            'Desarrollo con C#, ASP.NET y jQuery para sistemas internos',
            'Conversión de facturación electrónica XML v3.3 a v3.4 para FORD',
            'Módulos de asignación y control de gastos para NAFINSA',
        ],
    },
];

export const CVDocument: React.FC = () => {
    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                {/* Sidebar */}
                <View style={styles.sidebar}>
                    <Text style={styles.name}>Juan José</Text>
                    <Text style={styles.name}>Acevedo Merino</Text>
                    <Text style={styles.titleRole}>Líder de Proyectos & Dev Sr .NET</Text>

                    {/* Contact */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>CONTACTO</Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Tel:</Text>
                            <Text style={styles.contactValue}>55 3310 8924</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Email:</Text>
                            <Text style={styles.contactValue}>juanjooscalb@outlook.com</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Ubicacion:</Text>
                            <Text style={styles.contactValue}>Cuauhtemoc, CDMX</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Edad:</Text>
                            <Text style={styles.contactValue}>35 anos</Text>
                        </View>
                    </View>

                    {/* Skills */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>HABILIDADES</Text>
                        {SKILLS_PDF.map((skill, index) => (
                            <View key={index}>
                                <Text style={styles.skillName}>{skill.name}</Text>
                                <View style={styles.skillBar}>
                                    <View style={[styles.skillFill, { width: `${skill.level}%` }]} />
                                </View>
                            </View>
                        ))}
                    </View>

                    {/* Education */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>EDUCACIÓN</Text>
                        <Text style={{ ...styles.sidebarText, fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
                            Lic. en Informática
                        </Text>
                        <Text style={styles.sidebarText}>Universidad Autónoma de Tamaulipas</Text>
                        <Text style={styles.sidebarText}>2009 – 2013</Text>
                        <Text style={{ ...styles.sidebarText, marginTop: 6, fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
                            Programa de Inglés
                        </Text>
                        <Text style={styles.sidebarText}>Interlingua México • 2020-2021</Text>
                    </View>

                    {/* Certifications */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>CERTIFICACIONES</Text>
                        <Text style={styles.sidebarText}>• Scrum Fundamentals Certified (2018)</Text>
                        <Text style={styles.sidebarText}>• Software Dev Fundamentals - Microsoft (2013)</Text>
                    </View>

                    {/* Languages */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>IDIOMAS</Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Espanol:</Text>
                            <Text style={styles.contactValue}>Nativo</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Ingles:</Text>
                            <Text style={styles.contactValue}>B1 Intermedio</Text>
                        </View>
                    </View>
                </View>

                {/* Main Content */}
                <View style={styles.main}>
                    {/* Objective */}
                    <View style={styles.mainSection}>
                        <Text style={styles.mainTitle}>OBJETIVO PROFESIONAL</Text>
                        <Text style={styles.objectiveText}>
                            Profesional en desarrollo de software con más de una década de experiencia en la construcción de
                            aplicaciones web y APIs en tecnologías .NET y .NET Core para organizaciones de los sectores médico,
                            financiero y de auditoría. Especializado en análisis de requerimientos, optimización de sistemas y
                            desarrollo de soluciones robustas orientadas al usuario. Con 4 años de experiencia liderando proyectos
                            de software, aportando habilidades de liderazgo, coordinación de equipos multidisciplinarios y
                            aplicación de metodologías ágiles.
                        </Text>
                    </View>

                    {/* Experience */}
                    <View style={styles.mainSection}>
                        <Text style={styles.mainTitle}>EXPERIENCIA PROFESIONAL</Text>
                        {EXPERIENCE_PDF.map((exp, index) => (
                            <View key={index} style={styles.experienceEntry}>
                                <Text style={styles.experienceRole}>{exp.role}</Text>
                                <Text style={styles.experienceCompany}>{exp.company}</Text>
                                <Text style={styles.experiencePeriod}>{exp.period}</Text>
                                {exp.items.map((item, i) => (
                                    <Text key={i} style={styles.experienceItem}>
                                        <Text style={styles.bullet}>• </Text>{item}
                                    </Text>
                                ))}
                            </View>
                        ))}
                    </View>

                    {/* Technical Skills */}
                    <View style={styles.mainSection}>
                        <Text style={styles.mainTitle}>STACK TÉCNICO</Text>
                        <Text style={styles.objectiveText}>
                            Lenguajes: C#, JavaScript, TypeScript  |  Frameworks: ASP.NET, .NET Core, Angular, React, jQuery
                        </Text>
                        <Text style={styles.objectiveText}>
                            Bases de Datos: SQL Server, MySQL  |  Seguridad: JWT, AES, RSA-254, Checkmarx
                        </Text>
                        <Text style={styles.objectiveText}>
                            Patrones: MVC, MVVM, Three Layer Architecture  |  Herramientas: Figma, Bootstrap, SignalR
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
