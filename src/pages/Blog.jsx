import { CalendarDays, ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'

export default function Blog() {
  const { t, lang } = useLang()

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  return (
    <>
      <PageHeader
        title={t.nav.blog}
        subtitle={
          lang === 'fr'
            ? 'Réflexions et analyses sur la finance, l’assurance santé et les politiques de santé publique.'
            : 'Insights and analysis on finance, health insurance and public health policy.'
        }
      />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.blog.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="h-40 bg-gradient-to-br from-marine-800 to-sante-600" />
              <div className="p-6 flex flex-col flex-1">
                <p className="flex items-center gap-2 text-xs font-semibold text-sante-600">
                  <CalendarDays className="w-4 h-4" /> {formatDate(post.date)}
                </p>
                <h2 className="mt-3 text-lg font-bold text-marine-900 leading-snug">{post.title}</h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sante-600">
                  {lang === 'fr' ? 'Lire la suite' : 'Read more'} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}