import { MapPin, Building2 } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'

export default function Experience() {
  const { t, lang } = useLang()

  return (
    <>
      <PageHeader
        title={t.nav.experience}
        subtitle={
          lang === 'fr'
            ? 'Un parcours au service de la santé publique, du terrain aux institutions internationales.'
            : 'A career dedicated to public health, from the field to international institutions.'
        }
      />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <ol className="relative border-l-2 border-sante-500/40 ml-3 space-y-10">
          {t.experiences.map((e) => (
            <li key={e.role + e.year} className="pl-8 relative">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-sante-500 ring-4 ring-white" />
              <p className="text-sm font-semibold text-sante-600">{e.year}</p>
              <h2 className="mt-1 text-xl font-bold text-marine-900">{e.role}</h2>
              <p className="mt-1 flex items-center gap-2 text-slate-700 font-medium">
                <Building2 className="w-4 h-4 text-marine-700" /> {e.org}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4" /> {e.place}
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">{e.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner />
    </>
  )
}