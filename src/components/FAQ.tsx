import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { FaqCategory, FaqItem } from '../types'
import Button from './Button'

type FAQProps = {
  tag: string
  title: string
  subtitle: string
  categories: FaqCategory[]
  contactTitle: string
  contactText: string
  contactButtonLabel: string
  contactHref: string
}

function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, idx) => {
        const isOpen = open === idx

        return (
          <div key={item.q} className={`bg-tp-surface border rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-tp-border-bright' : 'border-tp-border'}`}>
            <button className="w-full flex items-center justify-between px-4 py-3.5 text-left gap-4" onClick={() => setOpen(isOpen ? null : idx)}>
              <span className={`text-sm font-medium transition-colors leading-snug ${isOpen ? 'text-tp-text-primary' : 'text-tp-text-secondary'}`}>
                {item.q}
              </span>
              <i className={`ti ti-chevron-down text-tp-green-muted text-base transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 border-t border-tp-border-dim pt-3 text-[13px] text-tp-text-muted leading-relaxed animate-fade-in-up">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function FAQ({
  tag,
  title,
  subtitle,
  categories,
  contactTitle,
  contactText,
  contactButtonLabel,
  contactHref,
}: FAQProps) {
  const navigate = useNavigate()

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 w-full py-10">
      <div className="inline-flex items-center gap-1.5 bg-tp-border-dim border border-tp-border-bright rounded-full px-3 py-1 text-[11px] text-tp-green uppercase tracking-widest mb-4">
        <i className="ti ti-help-circle text-[13px]" />
        {tag}
      </div>
      <h1 className="font-syne font-extrabold text-[24px] md:text-[28px] text-tp-text-primary mb-2">
        {title}
      </h1>
      <p className="text-sm text-tp-green-dim mb-8">
        {subtitle}
      </p>
      <div className="flex flex-col gap-8">
        {categories.map(category => (
          <div key={category.label}>
            <p className="text-[11px] text-tp-green-muted uppercase tracking-[1.2px] mb-3">{category.label}</p>
            <Accordion items={category.items} />
          </div>
        ))}
      </div>
      <div className="mt-8 bg-tp-surface border border-tp-border rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-tp-border-dim border border-tp-border-bright flex items-center justify-center text-xl flex-shrink-0">
          <i className="ti ti-message-circle" />
        </div>
        <div className="flex-1">
          <div className="font-syne font-bold text-[15px] text-tp-text-primary mb-0.5">{contactTitle}</div>
          <div className="text-[13px] text-tp-green-dim">{contactText}</div>
        </div>
        <Button onClick={() => navigate(contactHref)} className="w-full sm:w-auto whitespace-nowrap px-5 text-[13px]">
          {contactButtonLabel}
        </Button>
      </div>
    </div>
  )
}
