type ContactInfoItem = {
  icon: string
  label: string
  val: string
}

type ContactSocial = {
  icon: string
  label: string
  href: string
}

type ContactInfoProps = {
  tag: string
  title: string
  highlight: string
  description: string
  infoItems: ContactInfoItem[]
  socialLinks: ContactSocial[]
}

export default function ContactInfo({ tag, title, highlight, description, infoItems, socialLinks }: ContactInfoProps) {
  return (
    <div>
      <div className="inline-flex items-center gap-1.5 bg-tp-border-dim border border-tp-border-bright rounded-full px-3 py-1 text-[11px] text-tp-green uppercase tracking-widest mb-4">
        <i className="ti ti-mail text-[13px]" />
        {tag}
      </div>
      <h1 className="font-syne font-extrabold text-[24px] md:text-[28px] leading-[1.2] text-tp-text-primary mb-3">
        {title} <span className="text-tp-green">{highlight}</span>
      </h1>
      <p className="text-sm text-tp-text-muted leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex flex-col gap-3 mb-5">
        {infoItems.map(item => (
          <div key={item.label} className="flex items-center gap-3 bg-tp-surface border border-tp-border rounded-xl px-4 py-3 tp-card-hover">
            <div className="w-8 h-8 rounded-lg bg-tp-border-dim border border-tp-border-bright flex items-center justify-center flex-shrink-0">
              <i className={`ti ${item.icon} text-tp-green text-base`} />
            </div>
            <div>
              <div className="text-[10px] text-tp-green-muted uppercase tracking-[0.8px]">{item.label}</div>
              <div className="text-[13px] text-tp-text-secondary font-medium">{item.val}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {socialLinks.map(link => (
          <a key={link.label} href={link.href} className="flex items-center gap-1.5 bg-tp-surface border border-tp-border rounded-xl px-3.5 py-2.5 text-[12px] text-tp-green-light hover:border-tp-green hover:text-tp-green transition-all">
            <i className={`ti ${link.icon} text-[14px]`} />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
