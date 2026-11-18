import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLang } from '../context/LanguageContext'

const routeKeys = {
  '/': 'home',
  '/a-propos': 'about',
  '/expertises': 'expertise',
  '/services': 'services',
  '/experiences': 'experience',
  '/publications': 'publications',
  '/actualites': 'blog',
  '/galerie': 'gallery',
  '/contact': 'contact',
}

function PageEffects() {
  const { pathname } = useLocation()
  const { t } = useLang()

  // Remonter en haut à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Titre de l'onglet
  useEffect(() => {
    const key = routeKeys[pathname]
    const base = `${t.profile.name} | ${t.profile.title}`
    document.title = key && key !== 'home' ? `${t.nav[key]} | ${t.profile.name}` : base
  }, [pathname, t])

  return null
}

export default function Layout() {
  const { t } = useLang()

  return (
    <div className="min-h-screen flex flex-col">
      <PageEffects />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <a
        href={`https://wa.me/${t.profile.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-sante-500 hover:bg-sante-600 text-white p-3 rounded-full shadow-lg transition"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}