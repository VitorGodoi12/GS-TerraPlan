import Card from './Card'
import Section, { SectionLabel } from './Section'

type InfoBlock = {
  icon: string
  title: string
  text: string
}

type TimelineItem = {
  icon: string
  step: string
  title: string
  desc: string
}

type QuoteBlock = {
  label: string
  text: string
  source: string
}

type ProblemaProps = {
  blocks: InfoBlock[]
  timelineLabel: string
  timeline: TimelineItem[]
  techLabel: string
  techStack: string[]
  quote: QuoteBlock
}

export default function Problema({ blocks, timelineLabel, timeline, techLabel, techStack, quote }: ProblemaProps) {
  return (
    <Section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {blocks.map(block => (
          <Card key={block.title} hover>
            <div className="flex items-center gap-2 mb-2.5">
              <i className={`ti ${block.icon} text-tp-green text-base`} />
              <span className="font-syne font-semibold text-sm text-tp-text-primary">{block.title}</span>
            </div>
            <p className="text-[13px] text-tp-text-muted leading-relaxed">{block.text}</p>
          </Card>
        ))}
      </div>

      <SectionLabel>{timelineLabel}</SectionLabel>
      <div className="mb-10">
        {timeline.map((item, idx) => (
          <div key={item.title} className="flex gap-4 mb-5">
            <div className="flex flex-col items-center min-w-[32px]">
              <div className="w-8 h-8 rounded-full bg-tp-border-dim border-2 border-tp-green flex items-center justify-center flex-shrink-0">
                <i className={`ti ${item.icon} text-sm text-tp-green`} />
              </div>
              {idx < timeline.length - 1 && <div className="w-0.5 flex-1 bg-tp-border mt-1" />}
            </div>
            <div className="pt-1 pb-2">
              <div className="text-[11px] text-tp-green-muted uppercase tracking-[0.8px] mb-0.5">{item.step}</div>
              <div className="font-syne font-semibold text-sm text-tp-text-secondary mb-1">{item.title}</div>
              <div className="text-[12px] text-tp-green-dim leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <SectionLabel>{techLabel}</SectionLabel>
      <div className="flex flex-wrap gap-2 mb-10">
        {techStack.map(tech => (
          <span key={tech} className="bg-tp-border-dim border border-tp-border rounded-full px-3.5 py-1 text-[12px] text-tp-green-light hover:border-tp-border-bright transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </div>

      <div className="bg-tp-surface border border-tp-border-bright border-l-[3px] border-l-tp-green rounded-xl p-5 pl-6">
        <div className="text-[11px] text-tp-green-muted uppercase tracking-wide mb-2">{quote.label}</div>
        <p className="text-sm text-tp-text-secondary leading-relaxed italic">"{quote.text}"</p>
        <div className="text-[11px] text-tp-green-muted mt-2">{quote.source}</div>
      </div>
    </Section>
  )
}
