import { useState } from 'react'
import { FileText, Download } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import PageHeader from '../components/PageHeader'
import CtaBanner from '../components/CtaBanner'

export default function Publications() {
  const { t, lang } = useLang()
  const [filter, setFilter] = useState('all')

  const allLabel = lang === 'fr' ? 'Tout' : 'All'
  const types = [...new Set(t.publications.map((p) => p.type))]
  const filtered =
    filter === 'all' ? t.publications : t.publications.filter((p) => p.type === filter)

  // Si on change de langue, le filtre actif n'existe plus : on revient à "Tout"
  const activeFilter = filter === 'all' || types.includes(filter) ? filter : 'all'

  const btn = (active) =>
    `px-4 py-2 rounded-full text-sm font-medium transition ${
      active
        ? 'bg-marine-800 text-white'
        : 'bg-white border border-slate-200 text-marine-900 hover:border-sante-500'
    }`

  return (
    <>
      <PageHeader
        title={t.nav.publications}
        subtitle={
          lang === 'fr'
            ? 'Articles scientifiques, rapports et études à consulter et télécharger.'
            : 'Scientific articles, reports and studies to read and download.'
        }
      />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button className={btn(activeFilter === 'all')} onClick={() => setFilter('all')}>
            {allLabel}
          </button>
          {types.map((type) => (
            <button key={type} className={btn(activeFilter === type)} onClick={() => setFilter(type)}>
              {type}
            </button>
          ))}
        </div>

        <ul className="space-y-4">
          {(activeFilter === 'all'
            ? t.publications
            : filtered
          ).map((pub) => (
            <li
              key={pub.title}
              className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-sante-500/10 text-sante-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-sante-600">
                  {pub.type} · {pub.year}
                </p>
                <h2 className="font-semibold text-marine-900">{pub.title}</h2>
              </div>
              <a
                href={pub.file}
                download
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-marine-800 text-marine-800 text-sm font-medium hover:bg-marine-800 hover:text-white transition"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">{lang === 'fr' ? 'Télécharger' : 'Download'}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />
    </>
  )
}