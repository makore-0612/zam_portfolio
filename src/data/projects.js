import {
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiMetabase,
  SiScikitlearn,
  SiStreamlit,
  SiPlotly,
  SiPytest,
  SiKaggle,
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
      en: 'Creation of an ETL pipeline from PostgreSQL to MongoDB according to the medallion architecture to expedite the reading of information and calculation of relevant business metrics that allow for faster decision-making. I did it as part of an undergraduate project; it allowed me to identify the appropriate infrastructure according to the needs of a business and to optimize the processing and storage of information reducing the use of space and time.',
      es: 'Creación de un pipeline ETL desde PostgreSQL a MongoDB de acuerdo con la arquitectura medallion para agilizar la lectura de información y el cálculo de métricas de negocio relevantes que permitan una toma de decisiones más rápida. Lo realicé como parte de una práctica en la licenciatura, me permitió identificar la infraestructura adecuada acorde a las necesidades de un negocio y a optimizar el procesamiento y guardado de información para reducir el uso de espacio y tiempo.',
    },
    collaborators: [
      { name: 'Milena F. Rivera', github: 'https://www.linkedin.com/in/milena-rivera-80801838a/' },
      { name: 'Valentina A. Cruz', github: 'https://www.linkedin.com/in/valentinaacruzm/' },
      { name: 'Ángel N. Pérez', github: 'https://github.com/Noelllp' },
      { name: 'Isaac Monroy', github: 'https://github.com/IsaacMoV' }
    ],

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
      en: 'Analysis of over 50 years of seismic events in Mexico to estimate — using regression models — the number of aftershocks within 24 hours and the maximum possible aftershock magnitude within 48 hours, via an interactive dashboard. Motivated by recent seismic events around the world, I set out to create this system. One of the biggest challenges in data processing was differentiating which earthquake the aftershocks belonged to, based on geographical analysis.',
      es: 'Análisis de más de 50 años de eventos en México para estimar a través de modelos de regresión la cantidad de réplicas a 24 horas y mayor magnitud posible de réplica a 48 horas desde un dashboard interactivo. Motivado por los eventos sísmicos recientes a lo largo del mundo, me dispuse a crear este sistema. Uno de los mayores retos del procesamiento de los datos fue diferenciar a qué sismo pertenecían las réplicas acorde a los análisis geográficos.',
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
      en: 'Optimal portfolio calculation dashboard',
      es: 'Dashboard para cálculo de portafolios óptimos',
    },
    href: 'https://optimizacion-de-portafolios-bmv.onrender.com/',
    description: {
      en: 'Experiment, filter, and calculate the Markowitz efficient frontier for over 100 Mexican stock exchange assets using your desired parameters; obtain estimate evaluation through the spectral cutoff method. I created it based on the knowledge I gained while working on the end-of-semester project with classmates in the Introduction to Finance and Business course at university. It allowed me to put my fundamentals and skills into practice.',
      es: 'Experimenta, filtra y calcula con los parámetros que desees la frontera eficiente de Markowitz para más de 100 activos de la bolsa mexicana de valores; obtén evaluación de estimaciones a través del método de corte espectral. Lo creé a partir de los conocimientos adquiridos mientras trabajaba en el proyecto de final de semestre junto a compañeros de clase en el curso Introducción a las finanzas y a la empresa en la universidad. Permitió poner en práctica mis fundamentos y capacidades.',
    },
    collaborators: [
      { name: 'Milena F. Rivera', github: 'https://www.linkedin.com/in/milena-rivera-80801838a/' },
      { name: 'Ignacio Chuquiure', github: 'https://pinion.education/es/blog/author/ignacio/' }
    ],
    image: `${BASE}images/bmv.png`,
    tools: [
      { Icon: SiPython, color: '#3776AB', label: 'Python' },
      { Icon: SiPlotly, color: '#7A76FF', label: 'Plotly' },
      { Icon: SiPytest, color: '#0A9EDC', label: 'Pytest' },
    ],
    tags: {
      en: ['Academics', 'Optimization', 'Investigation'],
      es: ['Académico', 'Optimización', 'Investigación'],
    },
  },
  {
    id: 4,
    title: {
      en: 'Content-based music recommender',
      es: 'Recomendador musical basado en contenido',
    },
    href: 'https://vibe-rhythming.streamlit.app/',
    description: {
      en: 'A music recommendation system where you pick songs you like and dislike, and four models (nearest neighbors, naive Bayes, association rules and logistic regression) generate recommendations you can compare side by side. It combines the dataset’s own attributes, such as BPM, genre and artist, with features I extracted from the lyrics using NLP. You can choose what the recommendations are based on (lyrics, tags, audio or everything), tune each model’s parameters, and discover what defines your taste through measures like Gini, entropy and chi-square. Building it showed me in practice how different classification approaches interpret the same taste profile.',
      es: 'Sistema de recomendación musical en el que eliges canciones que te gustan y que no, y cuatro modelos (vecinos más cercanos, naive Bayes, reglas de asociación y regresión logística) generan recomendaciones que puedes comparar lado a lado. Combina atributos propios del dataset, como BPM, género y artista, con características que extraje de las letras mediante PLN. Puedes elegir en qué basar las recomendaciones (letra, etiquetas, audio o todo), ajustar los parámetros de cada modelo y descubrir qué define tus gustos con medidas como Gini, entropía y chi cuadrada. Construirlo me permitió ver en la práctica cómo distintos enfoques de clasificación interpretan un mismo perfil de gustos.',
    },
    collaborators: [
      { name: 'Nadia Ramos', github: 'https://github.com/Nad2710' },
      { name: 'Karen A. Castrillo', github: 'https://github.com/agn3si' }
    ],

    image: `${BASE}images/viber.png`,
    tools: [
      { Icon: SiPython, color: '#3776AB', label: 'Python' },
      { Icon: SiScikitlearn,   color: '#ff6d00', label: 'ScikitLearn'   },
      { Icon: SiStreamlit,   color: '#E64748', label: 'Streamlit'   },
      { Icon: SiKaggle,      color: '#20BEFF', label: 'Kaggle'      },
    ],
    tags: {
      en: ['Recommender', 'NLP', 'Classification', 'Streamlit'],
      es: ['Recomendación', 'PLN', 'Clasificación', 'Streamlit'],
    },
  },
]
