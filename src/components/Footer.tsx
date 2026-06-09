import { Link } from 'react-router-dom'

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/integrantes', label: 'Integrantes' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
  { to: '/painel', label: 'Painel' },
  { to: '/planejador/soja', label: 'Planejador' },
]

export default function Footer() {
  return (
    <footer className="bg-tp-surface border-t border-tp-border px-5 md:px-8 py-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="font-syne font-bold text-sm text-tp-green">TerraPlan</div>
            <div className="text-[11px] text-tp-green-muted mt-1">FIAP - Global Solution 2026</div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Links do rodape">
            {pageLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[12px] text-tp-green-muted hover:text-tp-green-dim transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap gap-5 border-t border-tp-border pt-4">
          <a href="#" className="text-[12px] text-tp-green-muted hover:text-tp-green-dim transition-colors">GitHub</a>
          <a href="#" className="text-[12px] text-tp-green-muted hover:text-tp-green-dim transition-colors">Video</a>
          <a href="#" className="text-[12px] text-tp-green-muted hover:text-tp-green-dim transition-colors">Vercel</a>
        </div>
      </div>
    </footer>
  )
}
