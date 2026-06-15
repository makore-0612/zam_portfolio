import {
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKaggle,
  SiMetabase,
} from 'react-icons/si'

const BASE = import.meta.env.BASE_URL

export const projects = [
  {
    id: 1,
    title: {
      en: 'Data migration and BI dashboard for an ice cream shop',
      es: 'Migración de datos y tablero BI para una nevería',
    },
    href: 'https://github.com/M1l3na24/Datengeist_BDNE',
    description: {
      en: 'Creation of an ETL pipeline from PostgreSQL to MongoDB according to the medallion architecture to expedite the reading of information and calculation of relevant business metrics that allow for faster decision-making.',
      es: 'Creación de un pipeline ETL desde PostgreSQL a MongoDB de acuerdo con la arquitectura medallion para agilizar la lectura de información y el cálculo de métricas de negocio relevantes que permitan una toma de decisiones más rápida.',
    },
    image: `${BASE}images/datengeist.png`,
    tools: [
      { Icon: SiPython,     color: '#3776AB', label: 'Python'     },
      { Icon: SiPostgresql, color: '#4169E1', label: 'PostgreSQL' },
      { Icon: SiDocker,     color: '#2496ED', label: 'Docker'     },
      { Icon: SiMongodb,    color: '#47A248', label: 'MongoDB'    },
      { Icon: SiMetabase,   color: '#509EE3', label: 'Metabase'   },
    ],
    tags: {
      en: ['BI', 'ETL', 'Dashboard', 'Containers'],
      es: ['BI', 'ETL', 'Tablero', 'Contenedores'],
    },
  },
  {
    id: 2,
    title: {
      en: 'Sports Intelligence for Cruz Azul F.C.',
      es: 'Inteligencia Deportiva para Cruz Azul F.C.',
    },
    href: 'https://github.com/M1l3na24/Proyecto_Final_Calidad',
    description: {
      en: 'Design and implementation of a quality pipeline and data preprocessing on Mexican soccer, applying the DAMA-DMBOK framework to integrate, clean and analyze four heterogeneous sources that allow Cruz Azul F.C. to make more informed decisions about signings, performance and sports planning.',
      es: 'Diseño e implementación de un pipeline de calidad y preprocesamiento de datos sobre fútbol mexicano, aplicando el marco DAMA-DMBOK para integrar, limpiar y analizar cuatro fuentes heterogéneas que permitan a Cruz Azul F.C. tomar decisiones más informadas sobre fichajes, rendimiento y planeación deportiva.',
    },
    image: `${BASE}images/CAFC.png`,
    tools: [
      { Icon: SiPython, color: '#3776AB', label: 'Python' },
      { Icon: SiKaggle, color: '#20BEFF', label: 'Kaggle' },
    ],
    tags: {
      en: ['Prediction', 'Integration', 'Planning'],
      es: ['Predicción', 'Integración', 'Planeación'],
    },
  },
  {
    id: 3,
    title: {
      en: 'Analysis of eigenportfolios for investment',
      es: 'Análisis de eigenportfolios para inversión',
    },
    href: 'https://drive.google.com/file/d/107rV4mPOvw6_H3rffp7saL0neWEX_irq/view?usp=sharing',
    description: {
      en: 'Using principal component analysis to find the ideal investment portfolio for 123 assets of the Mexican stock exchange, with error calculation and confidence interval in expected return.',
      es: 'Uso de análisis de componentes principales para encontrar el portafolio de inversión ideal para 123 activos de la bolsa de valores mexicana, con cálculo de error e intervalo de confianza en el retorno esperado.',
    },
    image: `${BASE}images/eigen.png`,
    tools: [
      { Icon: SiPython, color: '#3776AB', label: 'Python' },
    ],
    tags: {
      en: ['Academics', 'Optimization', 'Investigation'],
      es: ['Académico', 'Optimización', 'Investigación'],
    },
  },
]
