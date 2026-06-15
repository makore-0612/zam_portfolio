import LogoLoop from './LogoLoop'
import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiApachecassandra,
  SiDocker,
  SiGithub,
  SiScikitlearn
} from 'react-icons/si'

const BASE = import.meta.env.BASE_URL

const logos = [
  { node: <SiPython      style={{ color: '#3776AB' }} />, title: 'Python'      },
  { node: <SiPostgresql  style={{ color: '#4169E1' }} />, title: 'PostgreSQL'  },
  { node: <SiMysql       style={{ color: '#4479A1' }} />, title: 'MySQL'       },
  { node: <SiMongodb     style={{ color: '#47A248' }} />, title: 'MongoDB'     },
  { node: <SiApachecassandra style={{ color: '#1287B1' }} />, title: 'Cassandra' },
  { node: <SiDocker      style={{ color: '#2496ED' }} />, title: 'Docker'      },
  { node: <SiGithub      style={{ color: '#e6edf3' }} />, title: 'GitHub'      },
  { node: <SiScikitlearn      style={{ color: '#ff6d00' }} />, title: 'ScikitLearn'      },
  { src: `${BASE}images/powerbi.png`, alt: 'Power BI' }
]

export default function TechStack() {
  return (
    <section className="py-4">
      <LogoLoop
        logos={logos}
        speed={50}
        direction="left"
        logoHeight={32}
        gap={48}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0B1120"
        ariaLabel="Tech stack"
      />
    </section>
  )
}
