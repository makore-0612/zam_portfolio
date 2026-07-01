import {
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKaggle,
  SiMetabase,
  SiScikitlearn,
  SiStreamlit
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
      { Icon: SiScikitlearn,   color: '#ff6d00', label: 'ScikitLearn'   },
    ],
    tags: {
      en: ['BI', 'ETL', 'Dashboard', 'Containers'],
      es: ['BI', 'ETL', 'Tablero', 'Contenedores'],
    },
  },
  {
    id: 2,
    title: {
      en: 'Analysis of seismic activity in Mexico',
      es: 'Análisis de actividad sísmica en México',
    },
    href: 'https://seismologicalintelligence.streamlit.app/',
    description: {
      en: 'Analysis of over 50 years of seismic events in Mexico to estimate — using regression models — the number of aftershocks within 24 hours and the maximum possible aftershock magnitude within 48 hours, via an interactive dashboard.',
      es: 'Análisis de más de 50 años de eventos en México para estimar a través de modelos de regresión la cantidad de réplicas a 24 horas y mayor magnitud posible de réplica a 48 horas desde un dashboard interactivo',
    },
    image: `${BASE}images/seism.png`,
    tools: [
      { Icon: SiPython, color: '#3776AB', label: 'Python' },
      { Icon: SiScikitlearn,   color: '#ff6d00', label: 'ScikitLearn'   },
      { Icon: SiStreamlit,   color: '#E64748', label: 'Streamlit'   },
    ],
    tags: {
      en: ['Prediction', 'Investigation', 'Planning', 'Visualization'],
      es: ['Predicción', 'Investigación', 'Planeación', 'Visualización'],
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
