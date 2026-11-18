import { GraduationCap, Heart } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import CtaBanner from '../components/CtaBanner'

export default function About() {
  const { t, lang } = useLang()
  const p = t.profile
  const a = t.about

  return (
    <>
      <PageHeader title={t.nav.about} subtitle={p.subtitle} />

      {/* Biographie */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10 items-start">
        <img
          src={p.photo}
          alt={p.name}
          className="w-full max-w-xs mx-auto md:mx-0 rounded-2xl shadow-lg object-cover"
        />
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-marine-900">{p.name}</h2>
          <p className="text-sante-600 font-medium mt-1">{p.title}</p>
          <div className="mt-6 space-y-4 leading-relaxed">
            {a.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-gris-clair">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <SectionTitle title={lang === 'fr' ? 'Vision et valeurs' : 'Vision and values'} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {a.values.map((v) => (
              <div key={v} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="mx-auto w-12 h-12 rounded-full bg-sante-500/10 text-sante-600 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <p className="mt-3 font-semibold text-marine-900">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours académique */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <SectionTitle title={lang === 'fr' ? 'Parcours académique' : 'Academic background'} />
        <ol className="relative border-l-2 border-sante-500/40 ml-3 space-y-8">
          {a.education.map((e) => (
            <li key={e.title} className="pl-8 relative">
              <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-white border-2 border-sante-500 flex items-center justify-center">
                <GraduationCap className="w-3 h-3 text-sante-600" />
              </span>
              <p className="text-sm font-semibold text-sante-600">{e.year}</p>
              <h3 className="font-semibold text-marine-900">{e.title}</h3>
              <p className="text-sm text-slate-600">{e.place}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner />
    </>
  )
}