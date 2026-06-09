import Card from './Card'
import Section, { SectionLabel } from './Section'

type DiferencialItem = {
  icon: string
  title: string
  desc: string
}

type DiferenciaisProps = {
  label: string
  title: string
  items: DiferencialItem[]
}

export default function Diferenciais({ label, title, items }: DiferenciaisProps) {
  return (
    <Section wide className="py-10">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-syne font-bold text-[20px] md:text-[22px] text-tp-text-primary mb-7">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <Card key={item.title} hover className="cursor-default">
            <div className="w-9 h-9 rounded-xl bg-tp-border-dim border border-tp-border-bright flex items-center justify-center text-lg mb-3.5 text-tp-green">
              <i className={`ti ${item.icon}`} />
            </div>
            <div className="font-syne font-semibold text-sm text-tp-text-primary mb-1.5">{item.title}</div>
            <div className="text-[12px] text-tp-green-dim leading-relaxed">{item.desc}</div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
