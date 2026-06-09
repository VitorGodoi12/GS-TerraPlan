import { SectionTag } from './Section'

type IntroHeroProps = {
  tagIcon: string
  tagLabel: string
  title: string
  highlight: string
  description: string
}

export default function IntroHero({ tagIcon, tagLabel, title, highlight, description }: IntroHeroProps) {
  return (
    <div className="bg-tp-surface border-b border-tp-border px-5 md:px-8 py-10 md:py-12">
      <div className="max-w-3xl mx-auto">
        <SectionTag icon={tagIcon} label={tagLabel} />
        <h1 className="font-syne font-extrabold text-[26px] md:text-[32px] leading-[1.15] text-tp-text-primary mb-3.5">
          {title} <span className="text-tp-green">{highlight}</span>
        </h1>
        <p className="text-[14px] md:text-[15px] text-tp-text-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  )
}
