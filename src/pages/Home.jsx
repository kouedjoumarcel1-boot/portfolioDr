import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import SectionTitle from '../components/SectionTitle'
import ExpertiseIcon from '../components/ExpertiseIcon'
import Reveal from '../components/Reveal'

export default function Home() {
  const { t, lang } = useLang()
  const p = t.profile

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-marine-900 via-marine-800 to-marine-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sante-500 font-semibold tracking-wide uppercase text-sm">
              {p.subtitle}
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">{p.name}</h1>
            <p className="mt-2 text-xl text-slate-200">{p.title}</p>
            <p className="mt-6 text-slate-300 leading-relaxed">{p.shortBio}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sante-500 hover:bg-sante-600 font-semibold transition"
              >
                {t.nav.contact} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={p.cv}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 hover:bg-white hover:text-marine-900 font-semibold transition"
              >
                <Download className="w-4 h-4" /> {lang === 'fr' ? 'Télécharger le CV' : 'Download CV'}
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={p.photo}
              alt={p.name}
              className="w-72 md:w-96 rounded-2xl shadow-2xl border-4 border-white/10 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="bg-gris-clair">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {t.stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-marine-800">{s.value}</p>
              <p className="mt-1 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APERÇU DES EXPERTISES */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle
          title={t.nav.expertise}
          subtitle={
            lang === 'fr'
              ? 'Mes principaux domaines de spécialisation'
              : 'My main areas of specialization'
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {t.expertise.map((e, i) => (
    <Reveal key={e.title} delay={i * 120}>
      <div className="h-full p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition">
        <div className="w-12 h-12 rounded-lg bg-sante-500/10 text-sante-600 flex items-center justify-center">
          <ExpertiseIcon name={e.icon} />
        </div>
        <h3 className="mt-4 font-semibold text-marine-900">{e.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{e.text}</p>
      </div>
    </Reveal>
  ))}
</div>
        <div className="text-center mt-10">
          <Link to="/expertises" className="inline-flex items-center gap-2 text-sante-600 font-semibold hover:underline">
            {lang === 'fr' ? 'Voir toutes les expertises' : 'See all expertise'} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}