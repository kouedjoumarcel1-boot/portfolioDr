import { Wallet, ShieldCheck, Users, Landmark } from 'lucide-react'

const icons = {
  wallet: Wallet,
  shield: ShieldCheck,
  users: Users,
  landmark: Landmark,
}

export default function ExpertiseIcon({ name, className = 'w-6 h-6' }) {
  const Icon = icons[name] || Wallet
  return <Icon className={className} />
}