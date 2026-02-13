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
        role: 'Software Project Leader',
        company: 'Grupo Salinas',
        period: 'Mar 2022 – Present',
        items: [
            'Leading software development projects in the audit department',
            'Planning and organizing work plans using Scrum methodology',
            'Acting as intermediary between development teams, end users, and managers',
            'Providing technical support for high-complexity implementations',
        ],
    },
    {
        role: 'Senior .NET Developer',
        company: 'TH TEC – Grupo Salinas',
        period: 'Aug 2018 – Mar 2022',
        items: [
            'Developing enterprise web applications with C#, ASP.NET, Angular, React, and jQuery',
            'Building Web APIs with .NET Core using JWT and security tokens',
            'Implementing AES and RSA-254 encryption for sensitive data',
            'Creating stored procedures, triggers, and scheduled tasks in SQL Server',
            'Performing vulnerability analysis using Checkmarx',
        ],
    },
    {
        role: 'Senior .NET Developer',
        company: 'Consult TI – Vitamedica',
        period: 'Aug 2017 – Aug 2018',
        items: [
            'Developing with C#, ASP.NET, Angular, TypeScript, and jQuery',
            'Implementing real-time features using SignalR for a Call Center system',
            'Building web services for satellite systems integration',
        ],
    },
    {
        role: 'Senior .NET Developer',
        company: 'SIMMPAPEL – NAFINSA & FORD',
        period: 'Jul 2016 – Aug 2017',
        items: [
            'Developing enterprise web applications with C#, ASP.NET, and jQuery',
            'Converting electronic invoicing from XML v3.3 to v3.4 for FORD Motor Company',
            'Supporting expense assignment and control modules for NAFINSA',
        ],
    },
];

export const CVDocumentEN: React.FC = () => {
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
                    <Text style={styles.titleRole}>Project Leader & Sr .NET Developer</Text>

                    {/* Contact */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>CONTACT</Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Phone:</Text>
                            <Text style={styles.contactValue}>+52 55 3310 8924</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Email:</Text>
                            <Text style={styles.contactValue}>juanjooscalb@outlook.com</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Location:</Text>
                            <Text style={styles.contactValue}>Mexico City, Mexico</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Age:</Text>
                            <Text style={styles.contactValue}>35 years old</Text>
                        </View>
                    </View>

                    {/* Skills */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>SKILLS</Text>
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
                        <Text style={styles.sidebarTitle}>EDUCATION</Text>
                        <Text style={{ ...styles.sidebarText, fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
                            B.S. in Computer Science
                        </Text>
                        <Text style={styles.sidebarText}>Universidad Autónoma de Tamaulipas</Text>
                        <Text style={styles.sidebarText}>2009 – 2013</Text>
                        <Text style={{ ...styles.sidebarText, marginTop: 6, fontFamily: 'Helvetica-Bold', fontSize: 9 }}>
                            English Program
                        </Text>
                        <Text style={styles.sidebarText}>Interlingua México • 2020-2021</Text>
                    </View>

                    {/* Certifications */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>CERTIFICATIONS</Text>
                        <Text style={styles.sidebarText}>• Scrum Fundamentals Certified (2018)</Text>
                        <Text style={styles.sidebarText}>• Software Dev Fundamentals - Microsoft (2013)</Text>
                    </View>

                    {/* Languages */}
                    <View style={styles.sidebarSection}>
                        <Text style={styles.sidebarTitle}>LANGUAGES</Text>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>Spanish:</Text>
                            <Text style={styles.contactValue}>Native</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Text style={styles.contactLabel}>English:</Text>
                            <Text style={styles.contactValue}>B1 Intermediate</Text>
                        </View>
                    </View>
                </View>

                {/* Main Content */}
                <View style={styles.main}>
                    {/* Objective */}
                    <View style={styles.mainSection}>
                        <Text style={styles.mainTitle}>PROFESSIONAL OBJECTIVE</Text>
                        <Text style={styles.objectiveText}>
                            Software development professional with over a decade of experience building web applications
                            and APIs using .NET and .NET Core technologies for organizations in the medical, financial,
                            and audit sectors. Specialized in requirements analysis, system optimization, and building
                            robust user-oriented solutions. With 4 years of experience leading software projects, bringing
                            leadership skills, coordination of multidisciplinary teams, and application of agile methodologies.
                        </Text>
                    </View>

                    {/* Experience */}
                    <View style={styles.mainSection}>
                        <Text style={styles.mainTitle}>PROFESSIONAL EXPERIENCE</Text>
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
                        <Text style={styles.mainTitle}>TECHNICAL STACK</Text>
                        <Text style={styles.objectiveText}>
                            Languages: C#, JavaScript, TypeScript  |  Frameworks: ASP.NET, .NET Core, Angular, React, jQuery
                        </Text>
                        <Text style={styles.objectiveText}>
                            Databases: SQL Server, MySQL  |  Security: JWT, AES, RSA-254, Checkmarx
                        </Text>
                        <Text style={styles.objectiveText}>
                            Patterns: MVC, MVVM, Three Layer Architecture  |  Tools: Figma, Bootstrap, SignalR
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};
