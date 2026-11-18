export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-marine-900 to-marine-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-sante-500" />
        {subtitle && <p className="mt-4 text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}