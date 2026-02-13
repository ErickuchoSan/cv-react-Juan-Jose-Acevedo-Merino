import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
    },
    sidebar: {
        width: '35%',
        backgroundColor: '#0f172a', // Web Primary (Deep Navy)
        padding: 15,
        color: 'white',
    },
    profileImageContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
        marginBottom: 6,
        borderWidth: 2,
        borderColor: '#d97706', // Web Secondary (Elegant Gold)
        alignSelf: 'center',
    },
    profileImage: {
        width: 70,
        height: 70,
        objectFit: 'cover',
    },
    main: {
        width: '65%',
        padding: 20,
        color: '#1a1a1a',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'white',
        fontFamily: 'Helvetica-Bold',
    },
    titleRole: {
        fontSize: 8,
        color: '#d97706', // Web Secondary
        marginBottom: 10,
        fontFamily: 'Helvetica-Bold',
    },
    sidebarSection: {
        marginBottom: 10,
    },
    sidebarTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#d97706',
        paddingBottom: 2,
        marginBottom: 5,
        color: '#d97706',
        fontFamily: 'Helvetica-Bold',
    },
    sidebarText: {
        fontSize: 8,
        marginBottom: 3,
        color: '#cbd5e1', // Slate 300
        lineHeight: 1.4,
    },
    mainTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#0f172a', // Web Primary
        paddingBottom: 2,
        marginBottom: 6,
        color: '#0f172a',
        fontFamily: 'Helvetica-Bold',
    },
    mainSection: {
        marginBottom: 8,
    },
    experienceRole: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#0f172a',
        fontFamily: 'Helvetica-Bold',
    },
    experienceCompany: {
        fontSize: 9,
        color: '#d97706',
        marginBottom: 2,
        fontFamily: 'Helvetica-Bold',
    },
    experiencePeriod: {
        fontSize: 7,
        color: '#64748b', // Slate 500
        marginBottom: 4,
    },
    experienceItem: {
        fontSize: 7.5,
        marginBottom: 2,
        color: '#334155', // Slate 700
        lineHeight: 1.3,
        paddingLeft: 8,
    },
    experienceEntry: {
        marginBottom: 10,
    },
    skillBar: {
        height: 5,
        backgroundColor: '#334155', // Slate 700
        borderRadius: 3,
        marginTop: 2,
        marginBottom: 6,
    },
    skillFill: {
        height: 5,
        borderRadius: 3,
        backgroundColor: '#d97706',
    },
    skillName: {
        fontSize: 8,
        color: '#cbd5e1',
    },
    contactRow: {
        flexDirection: 'row' as const,
        marginBottom: 6,
        alignItems: 'center' as const,
    },
    contactLabel: {
        fontSize: 8,
        color: '#d97706',
        width: 55,
        fontFamily: 'Helvetica-Bold',
    },
    contactValue: {
        fontSize: 8,
        color: '#e2e8f0', // Slate 200
        flex: 1,
    },
    bullet: {
        fontSize: 8,
        color: '#d97706',
    },
    objectiveText: {
        fontSize: 8,
        color: '#334155',
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
        role: 'Software-Projektleiter',
        company: 'Grupo Salinas',
        period: 'Mär 2022 – Aktuell',
        items: [
            'Leitung von Softwareentwicklungsprojekten im Bereich Audit',
            'Planung und Organisation von Arbeitsplänen nach der Scrum-Methodik',
            'Vermittler zwischen Entwicklerteams, Endbenutzern und Managern',
            'Technische Unterstützung bei hochkomplexen Implementierungen',
        ],
    },
    {
        role: 'Senior .NET Entwickler',
        company: 'TH TEC – Grupo Salinas',
        period: 'Aug 2018 – Mär 2022',
        items: [
            'Entwicklung von Enterprise-Webanwendungen mit C#, ASP.NET, Angular, React und jQuery',
            'Erstellung von Web-APIs mit .NET Core unter Verwendung von JWT und Sicherheitstokens',
            'Implementierung von AES- und RSA-254-Verschlüsselung für sensible Daten',
            'Erstellung von Stored Procedures, Triggern und geplanten Tasks im SQL Server',
            'Durchführung von Schwachstellenanalysen mit Checkmarx',
        ],
    },
    {
        role: 'Senior .NET Entwickler',
        company: 'Consult TI – Vitamedica',
        period: 'Aug 2017 – Aug 2018',
        items: [
            'Entwicklung mit C#, ASP.NET, Angular, TypeScript und jQuery',
            'Implementierung von Echtzeitfunktionen mit SignalR für ein Call-Center-System',
            'Erstellung von Webdiensten für die Integration von Satellitensystemen',
        ],
    },
    {
        role: 'Senior .NET Entwickler',
        company: 'SIMMPAPEL – NAFINSA & FORD',
        period: 'Jul 2016 – Aug 2017',
        items: [
            'Entwicklung von Enterprise-Webanwendungen mit C#, ASP.NET und jQuery',
            'Konvertierung der elektronischen Rechnungsstellung von XML v3.3 auf v3.4 für FORD Motor Company',
            'Support für Kostenzuweisungs- und Kontrollmodule für NAFINSA',
        ],
    },
];

export const CVDocumentDE: React.FC = () => {
    const profileImage = `${window.location.origin}/assets/images/profile.jpeg`;
    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                {/* Sidebar */}
                <View style={styles.sidebar}>
                    <View style={styles.profileImageContainer}>
                        <Image style={styles.profileImage} src={profileImage} />
                    </View>
                    <Text style={styles.name}>Juan José</Text>
                    <Text style={styles.name}>Acevedo Merino</Text>
                    <Text style={styles.titleRole}>Projektleiter & Sr .NET Entwickler</Text>

                    {/* Contact */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>KONTAKT</Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Tel:</Text>
                            <Text style={styles.contactValue}>+52 55 3310 8924</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Email:</Text>
                            <Text style={styles.contactValue}>juanjooscalb@outlook.com</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Standort:</Text>
                            <Text style={styles.contactValue}>Mexiko-Stadt, Mexiko</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Alter:</Text>
                            <Text style={styles.contactValue}>35 Jahre alt</Text>
                        </View>
                    </View>

                    {/* Skills */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>FÄHIGKEITEN</Text>
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
                        <Text style={styles.sidebarTitle}>AUSBILDUNG</Text>
                        <Text style={{ ...styles.sidebarText, fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
                            Lic. in Informatik
                        </Text>
                        <Text style={styles.sidebarText}>Universidad Autónoma de Tamaulipas</Text>
                        <Text style={styles.sidebarText}>2009 – 2013</Text>
                        <Text style={{ ...styles.sidebarText, marginTop: 6, fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
                            Englischprogramm
                        </Text>
                        <Text style={styles.sidebarText}>Interlingua México • 2020-2021</Text>
                    </View>

                    {/* Certifications */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>ZERTIFIZIERUNGEN</Text>
                        <Text style={styles.sidebarText}>• Scrum Fundamentals Certified (2018)</Text>
                        <Text style={styles.sidebarText}>• Software Dev Fundamentals - Microsoft (2013)</Text>
                    </View>

                    {/* Languages */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>SPRACHEN</Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Spanisch:</Text>
                            <Text style={styles.contactValue}>Muttersprache</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Englisch:</Text>
                            <Text style={styles.contactValue}>B1 Fortgeschritten</Text>
                        </View>
                    </View>
                </View>

                {/* Main Content */}
                <View style={styles.main}>
                    {/* Objective */}
                    <View style={styles.mainSection}>
                        <Text style={styles.mainTitle}>BERUFLICHES ZIEL</Text>
                        <Text style={styles.objectiveText}>
                            Softwareentwicklungsprofi mit über einem Jahrzehnt Erfahrung in der Erstellung von Webanwendungen
                            und APIs unter Verwendung von .NET- und .NET Core-Technologien für Organisationen im Medizin-, Finanz-
                            und Auditsektor. Spezialisiert auf Anforderungsanalyse, Systemoptimierung und die Erstellung
                            robuster, benutzerorientierter Lösungen. Mit 4 Jahren Erfahrung in der Leitung von Softwareprojekten,
                            Führungskompetenz, Koordination multidisziplinärer Teams und Anwendung agiler Methoden.
                        </Text>
                    </View>

                    {/* Experience */}
                    <View style={styles.mainSection}>
                        <Text style={styles.mainTitle}>BERUFSERFAHRUNG</Text>
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
                        <Text style={styles.mainTitle}>TECHNISCHES PROFIL</Text>
                        <Text style={styles.objectiveText}>
                            Sprachen: C#, JavaScript, TypeScript  |  Frameworks: ASP.NET, .NET Core, Angular, React, jQuery
                        </Text>
                        <Text style={styles.objectiveText}>
                            Datenbanken: SQL Server, MySQL  |  Sicherheit: JWT, AES, RSA-254, Checkmarx
                        </Text>
                        <Text style={styles.objectiveText}>
                            Muster: MVC, MVVM, Three Layer Architecture  |  Tools: Figma, Bootstrap, SignalR
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
