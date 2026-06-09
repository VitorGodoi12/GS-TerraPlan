import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
  wide?: boolean
}

export default function Section({ children, className = '', wide = false }: SectionProps) {
  return (
    <section className={`${wide ? 'max-w-5xl' : 'max-w-3xl'} mx-auto px-5 md:px-8 w-full ${className}`}>
      {children}
    </section>
  )
}

export function SectionTag({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-tp-border-dim border border-tp-border-bright rounded-full px-3 py-1 text-[11px] text-tp-green uppercase tracking-widest mb-4">
      <i className={`ti ${icon} text-[13px]`} />
      {label}
    </div>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] text-tp-green-muted uppercase tracking-[1.2px] mb-2">
      {children}
    </p>
  )
}
