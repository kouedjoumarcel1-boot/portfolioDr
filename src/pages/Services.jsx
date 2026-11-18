import { Briefcase } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'

export default function Services() {
  const { t, lang } = useLang()

  return (
    <>
      <PageHeader
        title={t.nav.services}
        subtitle={
          lang === 'fr'
            ? 'Un accompagnement sur mesure pour les institutions, les organisations et les entreprises.'
            : 'Tailored support for institutions, organizations and companies.'
        }
      />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-marine-800 text-white flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-marine-900">{s.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}