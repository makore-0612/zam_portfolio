const BASE = import.meta.env.BASE_URL

export const education = [
  {
    id: 1,
    logo: `${BASE}images/ciencias.png`,
    logoHref: 'https://www.fciencias.unam.mx/',
    logoAlt: 'Facultad de Ciencias, UNAM',
    institution: 'Facultad de Ciencias, UNAM',
    en: {
      degree: "Bachelor's in Applied Mathematics",
      note: 'Introductory course prior to entering data science',
      period: '2023 - 2025',
    },
    es: {
      degree: 'Licenciatura en Matemáticas Aplicadas',
      note: 'Curso introductorio previo a Ciencia de Datos',
      period: '2023 - 2025',
    },
  },
  {
    id: 2,
    logo: `${BASE}images/iimas.png`,
    logoHref: 'https://www.iimas.unam.mx/',
    logoAlt: 'IIMAS, UNAM',
    institution: 'Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas, UNAM',
    en: {
      degree: "Bachelor's in Data Science",
      note: 'With a focus on finance and business',
      period: '2025 - Expected 2027',
    },
    es: {
      degree: 'Licenciatura en Ciencia de Datos',
      note: 'Con enfoque en finanzas y negocios',
      period: '2025 - Proyectado a 2027',
    },
  },
]

export const experience = [
  {
    id: 1,
    title: 'Test Engineer',
    company: 'Badak Soluciones S.A. de C.V.',
    en: {
      location: 'Remote, December 2025 – April 2026',
      summary: 'Test Engineer focused on ensuring data integrity and system reliability.',
      bullets: [
        'Ensured data integrity across digital platforms using advanced SQL queries in Palantir Foundry.',
        'Identified and documented critical system bugs in collaboration with development teams.',
        'Improved QA processes to meet security and accuracy standards.',
      ],
    },
    es: {
      location: 'Remoto, Diciembre 2025 – Abril 2026',
      summary: 'Test Engineer enfocado en garantizar la integridad de datos y la confiabilidad del sistema.',
      bullets: [
        'Garanticé la integridad de datos en plataformas digitales mediante consultas SQL avanzadas en Palantir Foundry.',
        'Identifiqué y documenté errores críticos del sistema en colaboración con equipos de desarrollo.',
        'Mejoré los procesos de QA para cumplir con los estándares de seguridad y precisión.',
      ],
    },
  },
  {
    id: 2,
    title: 'Financial Planning Intern',
    company: 'Santory Internacional S.A. de C.V.',
    en: {
      location: 'Mexico City, June - August 2025',
      summary: 'Internship committed to financial decisions based on supported data',
      bullets: [
        'Developed interactive Excel dashboards connected to SQL databases to monitor financial KPIs and employee turnover metrics.',
        'Automated report generation processes, reducing monthly reporting time by approximately 30%.',
        'Analyzed budget variances and identified significant deviations from forecasts.',
      ],
    },
    es: {
      location: 'Ciudad de México, Junio - Agosto 2025',
      summary: 'Prácticas profesionales orientadas a decisiones financieras basadas en datos',
      bullets: [
        'Desarrollé dashboards interactivos en Excel conectados a bases de datos SQL para monitorear KPIs financieros y métricas de rotación de personal.',
        'Automaticé procesos de generación de reportes, reduciendo el tiempo de reporte mensual en aproximadamente un 30%.',
        'Analicé variaciones presupuestarias e identifiqué desviaciones significativas respecto a los pronósticos.',
      ],
    },
  },
]
