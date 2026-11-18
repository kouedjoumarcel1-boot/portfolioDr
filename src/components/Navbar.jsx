import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const links = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/a-propos' },
  { key: 'expertise', to: '/expertises' },
  { key: 'services', to: '/services' },
  { key: 'experience', to: '/experiences' },
  { key: 'publications', to: '/publications' },
  { key: 'blog', to: '/actualites' },
  { key: 'gallery', to: '/galerie' },
  { key: 'contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang, setLang } = useLang()

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-sante-600' : 'text-marine-900 hover:text-sante-600'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-marine-900 text-lg">
          {t.profile.name}
        </Link>

        {/* Menu ordinateur */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <NavLink key={l.key} to={l.to} end={l.to === '/'} className={linkClass}>
              {t.nav[l.key]}
            </NavLink>
          ))}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="ml-2 px-3 py-1 rounded-full border border-marine-800 text-marine-800 text-xs font-semibold hover:bg-marine-800 hover:text-white transition"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>

        {/* Bouton mobile */}
        <button
          className="lg:hidden p-2 text-marine-900"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.key}
              to={l.to}
              end={l.to === '/'}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {t.nav[l.key]}
            </NavLink>
          ))}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="self-start px-3 py-1 rounded-full border border-marine-800 text-marine-800 text-xs font-semibold"
          >
            {lang === 'fr' ? 'English' : 'Français'}
          </button>
        </nav>
      )}
    </header>
  )
}