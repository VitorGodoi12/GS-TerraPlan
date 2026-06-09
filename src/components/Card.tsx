import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`bg-tp-surface border border-tp-border rounded-2xl p-5 ${hover ? 'tp-card-hover' : ''} ${className}`}>
      {children}
    </div>
  )
}
