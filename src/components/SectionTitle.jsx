export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-3xl font-bold text-marine-900">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded bg-sante-500" />
      {subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>}
    </div>
  )
}