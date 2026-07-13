import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from '../data/social'

export default function SocialLinks({ size = 20, className = 'flex items-center gap-3' }) {
  return (
    <div className={className}>
      <a href={`mailto:${EMAIL}`} aria-label="Email"
         className="text-gray-400 hover:text-white transition-colors">
        <FiMail size={size} />
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
         className="text-gray-400 hover:text-white transition-colors">
        <FiLinkedin size={size} />
      </a>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
         className="text-gray-400 hover:text-white transition-colors">
        <FiGithub size={size} />
      </a>
    </div>
  )
}
