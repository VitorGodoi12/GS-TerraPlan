import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/integrantes', label: 'Integrantes' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-tp-surface border-b border-tp-border px-5 md:px-8 py-3.5 flex items-center justify-between sticky top-0 z-50">
      <div
        className="font-syne font-extrabold text-xl text-tp-green tracking-tight cursor-pointer"
        onClick={() => { navigate('/'); setOpen(false) }}
      >
        Terra<span className="text-tp-green-light font-normal">Plan</span>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `text-[13px] transition-colors ${isActive ? 'text-tp-green' : 'text-tp-green-dim hover:text-tp-green-light'}`
            }
          >
            {l.label}
          </NavLink>
        ))}
        <button
          onClick={() => navigate('/painel')}
          className="bg-tp-green text-tp-bg px-4 py-1.5 rounded-lg text-[13px] font-semibold font-syne hover:opacity-90 transition-opacity"
        >
          Acessar Painel →
        </button>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className={`block w-5 h-0.5 bg-tp-green transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-tp-green transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-tp-green transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-tp-surface border-b border-tp-border px-5 py-4 flex flex-col gap-3 animate-fade-in-up">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm py-1.5 transition-colors ${isActive ? 'text-tp-green' : 'text-tp-green-dim'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() => { navigate('/painel'); setOpen(false) }}
            className="bg-tp-green text-tp-bg px-4 py-2 rounded-lg text-sm font-semibold font-syne w-full mt-1"
          >
            Acessar Painel →
          </button>
        </div>
      )}
    </nav>
  )
}
