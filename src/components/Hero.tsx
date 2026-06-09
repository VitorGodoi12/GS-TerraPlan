import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Card from './Card'
import { StatusDot } from './Icons'

type HeroMetric = {
  label: string
  val: string
  unit?: string
  green?: boolean
}

type HeroProps = {
  tag: string
  title: string
  highlight: string
  description: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
  widgetTitle: string
  widgetUpdatedText: string
  metrics: HeroMetric[]
}

export default function Hero({
  tag,
  title,
  highlight,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  widgetTitle,
  widgetUpdatedText,
  metrics,
}: HeroProps) {
  const navigate = useNavigate()

  return (
    <section className="max-w-5xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
      <div className="animate-fade-in-up">
        <div className="inline-flex items-center gap-1.5 bg-tp-border-dim border border-tp-border-bright rounded-full px-3 py-1 text-[11px] text-tp-green uppercase tracking-widest mb-5">
          <i className="ti ti-satellite text-[13px]" />
          {tag}
        </div>
        <h1 className="font-syne font-extrabold text-[30px] md:text-[38px] leading-[1.1] text-tp-text-primary mb-4">
          {title} <span className="text-tp-green">{highlight}</span>
        </h1>
        <p className="text-[14px] md:text-[15px] text-tp-text-muted leading-relaxed mb-7">
          {description}
        </p>
        <div className="flex flex-col xs:flex-row gap-3">
          <Button onClick={() => navigate(primaryHref)}>{primaryLabel}</Button>
          <Button variant="secondary" onClick={() => navigate(secondaryHref)}>{secondaryLabel}</Button>
        </div>
      </div>

      <Card className="animate-fade-in-up">
        <div className="text-[11px] text-tp-green-muted uppercase tracking-wide mb-3.5 flex items-center gap-1.5">
          <i className="ti ti-satellite text-[13px]" />
          {widgetTitle}
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {metrics.map(metric => (
            <div key={metric.label} className="bg-tp-border-dim border border-tp-border rounded-xl p-3 tp-card-hover cursor-default">
              <div className="text-[10px] text-tp-green-muted uppercase tracking-[0.8px] mb-1">{metric.label}</div>
              <div className={`font-syne font-bold ${metric.green ? 'text-sm text-tp-green' : 'text-xl text-tp-green'}`}>
                {metric.val}<span className="text-tp-green-dim text-[11px] ml-0.5">{metric.unit}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 mt-3 bg-tp-border-dim border border-tp-border-bright rounded-full px-3 py-1.5 w-fit text-[11px] text-tp-green">
          <StatusDot />
          {widgetUpdatedText}
        </div>
      </Card>
    </section>
  )
}
