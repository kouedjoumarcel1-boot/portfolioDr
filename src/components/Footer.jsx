import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const p = t.profile

  return (
    <footer className="bg-marine-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white font-bold text-lg">{p.name}</h3>
          <p className="mt-2 text-sm">{p.title}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:text-sante-500" to="/a-propos">{t.nav.about}</Link></li>
            <li><Link className="hover:text-sante-500" to="/services">{t.nav.services}</Link></li>
            <li><Link className="hover:text-sante-500" to="/publications">{t.nav.publications}</Link></li>
            <li><Link className="hover:text-sante-500" to="/contact">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">{t.nav.contact}</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> {p.email}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {p.phone}</li>
            <li>
              <a href={p.linkedin} target="_blank" rel="noreferrer" className="hover:text-sante-500">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {p.name}. All rights reserved.
      </div>
    </footer>
  )
}