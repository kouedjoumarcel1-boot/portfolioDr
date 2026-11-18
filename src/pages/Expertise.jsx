import { useLang } from '../context/LanguageContext'
import PageHeader from '../components/PageHeader'
import ExpertiseIcon from '../components/ExpertiseIcon'
import CtaBanner from '../components/CtaBanner'

export default function Expertise() {
  const { t, lang } = useLang()

  return (
    <>
      <PageHeader
        title={t.nav.expertise}
        subtitle={
          lang === 'fr'
            ? 'Des domaines de spécialisation au croisement de la médecine, de la finance et des politiques publiques.'
            : 'Areas of specialization at the crossroads of medicine, finance and public policy.'
        }
      />

      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        {t.expertise.map((e, i) => (
          <article
            key={e.title}
            className="flex flex-col md:flex-row gap-6 items-start p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition"
          >
            <div className="shrink-0 w-16 h-16 rounded-xl bg-sante-500/10 text-sante-600 flex items-center justify-center">
              <ExpertiseIcon name={e.icon} className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs font-semibold text-sante-600 uppercase tracking-wide">
                0{i + 1}
              </p>
              <h2 className="mt-1 text-xl font-bold text-marine-900">{e.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{e.text}</p>
            </div>
          </article>
        ))}
      </section>

      <CtaBanner />
    </>
  )
}