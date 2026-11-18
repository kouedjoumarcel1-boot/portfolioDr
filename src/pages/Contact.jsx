import { useState } from 'react'
import { Mail, Phone, MessageCircle, Globe, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import PageHeader from '../components/PageHeader'

// ⚠️ Remplace par ton adresse Formspree
const FORM_ENDPOINT = 'https://formspree.io/f/VOTRE_ID'

export default function Contact() {
  const { t, lang } = useLang()
  const p = t.profile
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const L = {
    fr: {
      subtitle: 'Une question, un projet, une demande de collaboration ? Écrivez-moi.',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      subject: 'Objet',
      message: 'Votre message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours…',
      success: 'Merci ! Votre message a bien été envoyé. Je vous répondrai rapidement.',
      error: 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par e-mail.',
      infoTitle: 'Coordonnées',
    },
    en: {
      subtitle: 'A question, a project, a collaboration request? Write to me.',
      name: 'Full name',
      email: 'Email address',
      subject: 'Subject',
      message: 'Your message',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Thank you! Your message has been sent. I will get back to you shortly.',
      error: 'Something went wrong. Please try again or contact me directly by email.',
      infoTitle: 'Contact details',
    },
  }[lang]

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    // Champ piège anti-spam : un humain ne le remplit jamais
    if (data.get('website')) return

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sante-500 focus:border-sante-500'

  const infos = [
    { icon: Mail, label: p.email, href: `mailto:${p.email}` },
    { icon: Phone, label: p.phone, href: `tel:${p.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${p.whatsapp}` },
    { icon: Globe, label: 'LinkedIn', href: p.linkedin },
  ]

  return (
    <>
      <PageHeader title={t.nav.contact} subtitle={L.subtitle} />

      <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        {/* Coordonnées */}
        <aside className="space-y-4">
          <h2 className="text-xl font-bold text-marine-900">{L.infoTitle}</h2>
          {infos.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-sante-500 hover:shadow-md transition"
            >
              <span className="w-11 h-11 rounded-lg bg-sante-500/10 text-sante-600 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium text-marine-900 break-all">{label}</span>
            </a>
          ))}
        </aside>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 p-8 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-marine-900 mb-1">
                {L.name}
              </label>
              <input id="name" name="name" type="text" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-marine-900 mb-1">
                {L.email}
              </label>
              <input id="email" name="email" type="email" required className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-marine-900 mb-1">
              {L.subject}
            </label>
            <input id="subject" name="subject" type="text" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-marine-900 mb-1">
              {L.message}
            </label>
            <textarea id="message" name="message" rows="6" required className={inputClass} />
          </div>

          {/* Champ piège anti-spam (invisible) */}
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sante-500 hover:bg-sante-600 disabled:opacity-60 text-white font-semibold transition"
          >
            <Send className="w-4 h-4" />
            {status === 'sending' ? L.sending : L.send}
          </button>

          {status === 'success' && (
            <p className="flex items-start gap-2 p-4 rounded-lg bg-sante-500/10 text-sante-600 text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0" /> {L.success}
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-start gap-2 p-4 rounded-lg bg-red-50 text-red-600 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" /> {L.error}
            </p>
          )}
        </form>
      </section>
    </>
  )
}