import { useLocation } from 'react-router-dom'

export default function ComingSoon() {
  const { pathname } = useLocation()
  return (
    <div className="max-w-6xl mx-auto px-4 py-32 text-center">
      <h1 className="text-3xl font-bold text-marine-900">Page {pathname}</h1>
      <p className="mt-4 text-slate-600">En cours de construction…</p>
    </div>
  )
}