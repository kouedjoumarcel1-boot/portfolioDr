import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBanner from '../components/CtaBanner'

export default function Gallery() {
  const { t, lang } = useLang()
  const [current, setCurrent] = useState(null) // index de la photo ouverte, ou null
  const photos = t.gallery

  const close = () => setCurrent(null)
  const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setCurrent((i) => (i + 1) % photos.length)

  // Clavier : Échap pour fermer, flèches pour naviguer
  useEffect(() => {
    if (current === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [current])

  return (
    <>
      <PageHeader
        title={t.nav.gallery}
        subtitle={
          lang === 'fr'
            ? 'Quelques moments marquants de conférences, missions et ateliers.'
            : 'Highlights from conferences, missions and workshops.'
        }
      />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 100} className="break-inside-avoid">
              <button
                onClick={() => setCurrent(i)}
                className="group block w-full overflow-hidden rounded-xl bg-slate-100 text-left"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="block bg-white px-4 py-3 text-sm text-slate-600 border-t border-slate-100">
                  {photo.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visionneuse plein écran */}
      {current !== null && (
        <div
          className="fixed inset-0 z-[100] bg-marine-900/95 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 text-white hover:text-sante-500"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
            className="absolute left-2 md:left-6 p-2 text-white hover:text-sante-500"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[current].src}
              alt={photos[current].caption}
              className="max-h-[75vh] w-full object-contain rounded-lg"
            />
            <figcaption className="mt-4 text-center text-slate-200 text-sm">
              {photos[current].caption}
              <span className="ml-2 text-slate-400">({current + 1}/{photos.length})</span>
            </figcaption>
          </figure>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
            className="absolute right-2 md:right-6 p-2 text-white hover:text-sante-500"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}

      <CtaBanner />
    </>
  )
}