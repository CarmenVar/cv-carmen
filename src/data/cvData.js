// src/data/cvData.js

export const cvData = {
  es: {
    labels: {
      summary: "Perfil Profesional",
      experience: "Experiencia Laboral",
      education: "Formación Académica",
      techSkills: "Habilidades Técnicas",
      keySkills: "Habilidades Clave",
      additionalInfo: "Información Adicional",
      languages: "Idiomas",
      courses: "Cursos y Formación",
      awards: "Reconocimientos y Premios",
      printPdf: "Imprimir / Guardar PDF",
      contact: "Contacto",
      available: "Disponible para nuevas oportunidades",
      copiedEmail: "¡Email copiado al portapapeles!",
      switchToEnglish: "Switch to English",
      switchToSpanish: "Cambiar a Español",
      lightMode: "Modo Claro",
      darkMode: "Modo Oscuro",
      
    },
    header: {
      name: "Carmen Vargas",
      title: "Soporte TI / Analista de Soporte de Aplicaciones| Sistemas Corporativos | Operaciones y Soporte a Usuarios",
      location: "Nuñez, CABA, Argentina",
      email: "trishiavargas@gmail.com",
      linkedin: "https://www.linkedin.com/in/carmen-vargas-rodriguez",
      github: "https://github.com/CarmenVar",
      photoUrl: "/carmen-linkedin.png",
    },
    summary:
      "Analista de Soporte IT y Aplicaciones con experiencia en soporte a usuarios internos y sistemas corporativos en entornos de alta demanda. Especializada en resolución de incidentes, soporte funcional, documentación de procesos y coordinación con equipos técnicos. Sólida trayectoria en operaciones y administración, con enfoque en la mejora continua, la experiencia de usuario y la rápida adaptación a nuevas plataformas digitales.",
    experience: [
      {
        id: 1,
        role: "Analista de Organización & Métodos",
        company: "Dia Argentina",
        period: "Nov 2023 – Mar 2025",
        badge: "Gestión & Soporte IT",
        bullets: [
          "Soporte funcional y operativo a usuarios internos en sistemas corporativos y de gestión.",
          "Relevamiento, documentación y estandarización de procesos administrativos y operativos.",
          "Gestión integral de incidentes, seguimiento de desvíos y soporte a la operatoria diaria.",
          "Coordinación con equipos técnicos para la resolución de fallas en sistemas e implementación de mejoras.",
          "Capacitación a usuarios y acompañamiento en implementaciones de nuevos sistemas y procesos.",
          "Elaboración de informes de gestión y monitoreo continuo de información operativa.",
        ],
      },
      {
        id: 2,
        role: "Líder de Tienda Formadora",
        company: "Dia Argentina",
        period: "Dic 2015 – Oct 2023",
        badge: "Liderazgo & Operaciones",
        bullets: [
          "Gestión integral de operaciones comerciales, logística interna y actividades administrativas de tienda.",
          "Realización de controles, arqueos, cierres diarios y conciliaciones de caja.",
          "Formación y capacitación continua de personal y estandarización de procedimientos operativos.",
          "Coordinación fluida con áreas administrativas centrales, logística y proveedores.",
        ],
      },
      {
        id: 3,
        role: "Asistente de Gerencia",
        company: "Hotel Golf Los Incas",
        period: "Oct 2009 – May 2013",
        badge: "Administración & Auditoría",
        bullets: [
          "Gestión de operaciones administrativas hoteleras y supervisión de turnos de atención.",
          "Soporte directo a la gerencia operativa y colaboración con el área de auditoría interna.",
          "Coordinación de proveedores, verificación de cuentas y control estricto de pagos.",
        ],
      },
      {
        id: 4,
        role: "Oficial de Cambio de Divisas (Purser)",
        company: "Royal Caribbean International",
        period: "Nov 2002 – Nov 2007",
        badge: "Finanzas & Auditoría Internacional",
        bullets: [
          "Gestión de operaciones de caja en moneda extranjera en entornos multinacionales de alto volumen.",
          "Supervisión de cajeros y validación rigurosa de transacciones de cambio de divisas.",
          "Ejecución de arqueos diarios de caja, conciliaciones contables y reportes periódicos.",
          "Garantía de estricto cumplimiento de normativas de auditoría y procedimientos de control interno.",
        ],
      },
    ],
    education: [
      {
        id: 1,
        title: "Certified Tech Developer",
        institution: "Digital House",
        period: "May 2021 – Jun 2024",
        status: "Graduado / Completo",
      },
      {
        id: 2,
        title: "Administración de Empresas",
        institution: "Universidad San Ignacio de Loyola",
        period: "Abr 2012 – Ago 2014",
        status: "Incompleto",
      },
    ],
    techSkills: [
      "Soporte TI / Soporte de Aplicaciones",
      "Soporte a Usuarios Corporativos",
      "ERP / Sistemas de Gestión",
      "Gestión de Incidentes",
      "Documentación de Procesos",
      "Excel Intermedio",
      "Google Workspace",
    ],
    keySkills: [
      "Comunicación clara con usuarios no técnicos",
      "Alta capacidad de aprendizaje y adaptabilidad",
      "Escucha activa y resolución efectiva de problemas",
      "Manejo del estrés y priorización de incidentes",
      "Trabajo colaborativo con equipos técnicos y operativos",
      "Empatía y marcada orientación al servicio y al cliente",
    ],
    additionalInfo: {
      languages: [
        {
          name: "Español",
          level: "Nativo",
        },
        {
          name: "Inglés",
          level: "Intermedio",
        },
      ],
      courses: [
        {
          title: "Oratoria, Persuasión y Comunicación Efectiva",
          institution: "UTN (Universidad Tecnológica Nacional)",
        },
      ],
      awards: [
        {
          title: "Employee of the Year – Back of the House (2005)",
          organization: "Royal Caribbean Cruise Line",
          note: "Nominada",
        },
      ],
    },
    projectsSection: {
      title: "Proyectos & Certificaciones",
      subtitle: "Proyectos reales y credenciales técnicas verificables",
      categories: ["Todos", "React", "Python", "Salesforce", "Power BI"],
      projects: [
        {
          id: 1,
          titulo: "Portafolio Web Interactivo & Bilingüe",
          descripcion: "Aplicación web modular en React y Tailwind CSS con cambio dinámico de idioma, modo oscuro y arquitectura de datos centralizada.",
          categoria: "React",
          tecnologia: "React / Tailwind / Vercel",
          enlace: "https://cv-carmen.vercel.app"
        },
        {
          id: 2,
          titulo: "Herramienta de Transferencia & Descarga Masiva",
          descripcion: "Script de automatización en Python enfocado en la gestión y descarga masiva de archivos multimedia para optimizar procesos.",
          categoria: "Python",
          tecnologia: "Python / Scripting",
          enlace: "https://github.com/CarmenVar/appTransferPhotos"
        },
        {
          id: 3,
          titulo: "Certificación & Formación Salesforce Admin",
          descripcion: "Rango Mountaineer en Trailhead. Dominio en administración de CRM, modelos de datos, seguridad de registros y automatizaciones.",
          categoria: "Salesforce",
          tecnologia: "Salesforce Admin",
          enlace: "https://openbadgefactory.com/obv3/credentials/a72d6f053e899abeee9f2024c9dbee8f84e8bebe" // Pegas tu enlace aquí
        },
        {
          id: 4,
          titulo: "Microcredencial en Power BI (Talento Tech)",
          descripcion: "Capacitación práctica en modelado de datos, creación de tableros de control interactivos y métricas clave en DAX.",
          categoria: "Power BI",
          tecnologia: "Power BI / DAX",
          enlace: "https://productosfinalpython-nt94atk3q-carmen-vargas-projects.vercel.app"
        }
      ]
    }
  },

  en: {
    labels: {
      summary: "Professional Summary",
      experience: "Work Experience",
      education: "Education",
      techSkills: "Technical Skills",
      keySkills: "Key Skills",
      additionalInfo: "Additional Information",
      languages: "Languages",
      courses: "Courses & Training",
      awards: "Awards & Recognition",
      printPdf: "Print / Save PDF",
      contact: "Contact",
      available: "Available for new opportunities",
      copiedEmail: "Email copied to clipboard!",
      switchToEnglish: "Switch to English",
      switchToSpanish: "Cambiar a Español",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      
    },
    header: {
      name: "Carmen Vargas",
      title: "IT Support / Application Support Analyst | Corporate Systems | Operations & User Support",
      location: "Nuñez CABA, Argentina",
      email: "trishiavargas@gmail.com",
      linkedin: "https://www.linkedin.com/in/carmen-vargas-rodriguez",
      github: "https://github.com/CarmenVar",
      photoUrl: "/carmen-linkedin.png",
    },
    summary:
      "IT / Application Support Analyst with experience supporting internal users and corporate systems in high-demand environments. Specialized in incident resolution, functional support, process documentation, and coordination with technical teams. Strong background in operations and administration, with a focus on continuous improvement, user experience, and rapid adaptation to new digital platforms.",
    experience: [
      {
        id: 1,
        role: "Organization & Methods Analyst",
        company: "Dia Argentina",
        period: "Nov 2023 – Mar 2025",
        badge: "IT Support & Ops",
        bullets: [
          "Provided functional and operational support to internal users on management systems.",
          "Gathered, documented, and standardized administrative and operational processes.",
          "Managed incidents, tracked deviations, and supported daily operations.",
          "Coordinated with technical teams to resolve system issues and implement improvements.",
          "Trained users and supported system and process implementations.",
          "Prepared reports and monitored operational information.",
        ],
      },
      {
        id: 2,
        role: "Training Store Leader",
        company: "Dia Argentina",
        period: "Dec 2015 – Oct 2023",
        badge: "Leadership & Retail Ops",
        bullets: [
          "Managed store operations and administrative activities.",
          "Performed cash controls, closures, and reconciliations.",
          "Trained staff and standardized operational procedures.",
          "Coordinated with administrative areas and suppliers.",
        ],
      },
      {
        id: 3,
        role: "Assistant Manager",
        company: "Hotel Golf Los Incas",
        period: "Oct 2009 – May 2013",
        badge: "Hospitality Management",
        bullets: [
          "Managed hotel administrative operations.",
          "Provided direct support to operational management and internal audit.",
          "Coordinated suppliers and payment controls.",
        ],
      },
      {
        id: 4,
        role: "Foreign Exchange Purser",
        company: "Royal Caribbean International",
        period: "Nov 2002 – Nov 2007",
        badge: "International Finance & Audit",
        bullets: [
          "Managed foreign currency cash operations in high-volume environments.",
          "Supervised cashiers and validated exchange transactions.",
          "Performed daily cash counts, reconciliations, and reporting.",
          "Ensured compliance with internal control and audit procedures.",
        ],
      },
    ],
    education: [
      {
        id: 1,
        title: "Certified Tech Developer",
        institution: "Digital House",
        period: "May 2021 – Jun 2024",
        status: "Completed",
      },
      {
        id: 2,
        title: "Business Administration",
        institution: "Universidad San Ignacio de Loyola",
        period: "Apr 2012 – Aug 2014",
        status: "Incomplete",
      },
    ],
    techSkills: [
      "IT Support / Application Support",
      "Corporate User Support",
      "ERP / Management Systems",
      "Incident Management",
      "Process Documentation",
      "Intermediate Excel",
      "Google Workspace",
    ],
    keySkills: [
      "Clear communication with non-technical users",
      "Strong learning ability and adaptability",
      "Active listening and problem-solving skills",
      "Stress management and incident prioritization",
      "Teamwork with technical and operational teams",
      "Empathy and strong service-oriented mindset",
    ],
    additionalInfo: {
      languages: [
        {
          name: "Spanish",
          level: "Native",
        },
        {
          name: "English",
          level: "Intermediate",
        },
      ],
      courses: [
        {
          title: "Public Speaking, Persuasion and Effective Communication",
          institution: "UTN (National Technological University)",
        },
      ],
      awards: [
        {
          title: "Employee of the Year – Back of the House (2005)",
          organization: "Royal Caribbean Cruise Line",
          note: "Nominated",
        },
      ],
    },
    projectsSection: {
      title: "Projects & Certifications",
      subtitle: "Real projects and verifiable technical credentials",
      categories: ["All", "React", "Python", "Salesforce", "Power BI"],
      projects: [
        {
          id: 1,
          titulo: "Interactive & Bilingual Web Portfolio",
          descripcion: "Modular React and Tailwind CSS web application featuring dynamic language switching, dark mode, and centralized data architecture.",
          categoria: "React",
          tecnologia: "React / Tailwind / Vercel",
          enlace: "https://cv-carmen.vercel.app"
        },
        {
          id: 2,
          titulo: "Bulk Photo Transfer & Download Tool",
          descripcion: "Python automation script designed for managing and bulk downloading media files to optimize operational workflows.",
          categoria: "Python",
          tecnologia: "Python / Scripting",
          enlace: "https://github.com/CarmenVar/appTransferPhotos"
        },
        {
          id: 3,
          titulo: "Salesforce Admin Certification & Training",
          descripcion: "Mountaineer rank on Trailhead. Proficiency in CRM administration, data modeling, record-level security, and process automation.",
          categoria: "Salesforce",
          tecnologia: "Salesforce Admin",
          enlace: "https://openbadgefactory.com/obv3/credentials/a72d6f053e899abeee9f2024c9dbee8f84e8bebe" // Pegas tu enlace aquí
        },
        {
          id: 4,
          titulo: "Power BI Microcredential (Talento Tech)",
          descripcion: "Practical training in data modeling, interactive dashboard design, and key performance metrics using DAX.",
          categoria: "Power BI",
          tecnologia: "Power BI / DAX",
          enlace: "https://productosfinalpython-nt94atk3q-carmen-vargas-projects.vercel.app"
        }
      ]
    }
  },
};
