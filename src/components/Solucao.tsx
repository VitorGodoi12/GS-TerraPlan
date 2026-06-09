import Card from './Card'
import Section, { SectionLabel } from './Section'

type StatItem = {
  val: string
  label: string
}

type OdsItem = {
  num: string
  text: string
}

type SolucaoProps = {
  stats: StatItem[]
  impactLabel: string
  impactTitle: string
  ods: OdsItem[]
}

export default function Solucao({ stats, impactLabel, impactTitle, ods }: SolucaoProps) {
  return (
    <>
      <div className="bg-tp-surface border-y border-tp-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="font-syne font-extrabold text-2xl text-tp-green">{stat.val}</div>
              <div className="text-[12px] text-tp-green-dim mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-tp-border mx-5 md:mx-8" />

      <Section wide className="py-10">
        <SectionLabel>{impactLabel}</SectionLabel>
        <h2 className="font-syne font-bold text-[20px] md:text-[22px] text-tp-text-primary mb-5">
          {impactTitle}
        </h2>
        <div className="flex flex-col xs:flex-row gap-3.5">
          {ods.map(item => (
            <Card key={item.num} hover className="rounded-xl p-3.5 px-5 flex items-center gap-3 cursor-default">
              <div className="font-syne font-extrabold text-2xl text-tp-green">{item.num}</div>
              <div className="text-[12px] text-tp-text-muted leading-snug whitespace-pre-line">{item.text}</div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
