import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function CtaBanner() {
  const { lang } = useLang()

  return (
    <section className="bg-gris-clair">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-marine-900">
          {lang === 'fr' ? 'Un projet ? Travaillons ensemble.' : 'Have a project? Let’s work together.'}
        </h2>
        <p className="mt-3 text-slate-600">
          {lang === 'fr'
            ? 'Parlez-moi de vos besoins, je reviens vers vous rapidement.'
            : 'Tell me about your needs and I will get back to you quickly.'}
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sante-500 hover:bg-sante-600 text-white font-semibold transition"
        >
          {lang === 'fr' ? 'Me contacter' : 'Contact me'} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}