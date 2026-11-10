import LogoLoop from './LogoLoop'
import Reveal from './Reveal'
import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiApachecassandra,
  SiDocker,
  SiGithub,
  SiScikitlearn,
  SiClaude,
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
  { node: <img src={`${import.meta.env.BASE_URL}images/powerbi.png`} alt="" className="w-[1em] h-[1em]" />, title: 'Microsoft PowerBI'},
  { node: <img src={`${import.meta.env.BASE_URL}images/excel.png`} alt="" className="w-[1em] h-[1em]" />, title: 'Microsoft Excel' },
  { node: <img src={`${import.meta.env.BASE_URL}images/claudecode.png`} alt="" className="w-[1em] h-[1em]" />, title: 'Claude Code' },
]

export default function TechStack() {
  return (
    <Reveal delay={0.1}>
    <section className="py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <LogoLoop
        logos={logos}
        speed={50}
        direction="left"
        logoHeight={32}
        gap={48}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Tech stack"
      />
    </section>
    </Reveal>
  )
}
