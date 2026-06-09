import Card from '../components/Card'
import Footer from '../components/Footer'
import { SectionTag } from '../components/Section'
import type { Membro } from '../types'

const INTEGRANTES: Membro[] = [
  {
    initials: 'FC',
    name: 'Felipe Cuesta Puerta de Oliveira',
    role: 'Desenvolvedor Full Stack',
    rm: '567703',
    turma: '1TDSPR - 2026',
    email: 'rm567703@fiap.com.br',
    github: 'https://github.com/felipecuesta06',
    linkedin: 'https://www.linkedin.com/in/felipe-cuesta-20a813319',
  },
  {
    initials: 'VC',
    name: 'Vitor Costa de Godoi',
    role: 'Desenvolvedor Full Stack',
    rm: '568448',
    turma: '1TDSPR - 2026',
    email: 'rm568448@fiap.com.br',
    github: 'https://github.com/VitorGodoi12',
    linkedin: 'https://www.linkedin.com/in/vitor-godoi-189b91380',
  },
  {
    initials: 'VS',
    name: 'Vitor Santos Domingues',
    role: 'Desenvolvedor Full Stack',
    rm: '568375',
    turma: '1TDSPR - 2026',
    email: 'rm568375@fiap.com.br',
    github: 'https://github.com/VitorSantosDomingues',
    linkedin: 'https://www.linkedin.com/in/vitor-santos-domingues-87b573275/',
  },
  {
    initials: 'JV',
    name: 'Joao Victor De Souza Braz',
    role: 'Desenvolvedor Full Stack',
    rm: '566862',
    turma: '1TDSPR - 2026',
    email: 'rm566862@fiap.com.br',
    github: 'https://github.com/souzabrazj',
    linkedin: 'https://www.linkedin.com/in/souzabrazj?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
]

export default function Integrantes() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-5xl mx-auto px-5 md:px-8 w-full py-10">
        <SectionTag icon="ti-users" label="A equipe" />
        <h1 className="font-syne font-extrabold text-[24px] md:text-[28px] text-tp-text-primary mb-2 leading-tight">
          Quem construiu o <span className="text-tp-green">TerraPlan</span>
        </h1>
        <p className="text-sm text-tp-green-dim">
          Alunos de Analise e Desenvolvimento de Sistemas - FIAP - Turma 1TDS - Global Solution 2026
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INTEGRANTES.map(member => (
            <Card key={member.rm} hover className="flex flex-col items-center text-center p-5">
              <div className="w-16 h-16 rounded-full bg-tp-border-dim border-2 border-tp-border-bright flex items-center justify-center font-syne font-bold text-xl text-tp-green mb-3.5">
                {member.initials}
              </div>
              <span className="bg-tp-border-dim border border-tp-border-bright rounded-full px-2.5 py-0.5 text-[11px] text-tp-green mb-2">
                1TDS - Agosto
              </span>
              <div className="font-syne font-bold text-[14px] text-tp-text-primary mb-1 leading-snug">{member.name}</div>
              <div className="text-[12px] text-tp-green-dim mb-3">{member.role}</div>
              <hr className="w-full border-tp-border mb-3" />
              <div className="w-full space-y-2 text-left">
                <div className="flex items-center gap-1.5 text-[12px] text-tp-text-muted">
                  <i className="ti ti-id-badge text-tp-green-muted text-[13px] flex-shrink-0" />
                  RM <span className="text-tp-text-secondary ml-1 font-medium">{member.rm}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-tp-text-muted">
                  <i className="ti ti-school text-tp-green-muted text-[13px] flex-shrink-0" />
                  <span className="text-tp-text-secondary">{member.turma}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-tp-text-muted">
                  <i className="ti ti-mail text-tp-green-muted text-[13px] flex-shrink-0" />
                  <span className="text-tp-text-secondary truncate text-[11px]">{member.email}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 w-full">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-tp-border-dim border border-tp-border rounded-lg py-2 text-[11px] text-tp-green-light hover:border-tp-green hover:text-tp-green transition-all duration-150"
                >
                  <i className="ti ti-brand-github text-[14px]" />
                  GitHub
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-tp-border-dim border border-tp-border rounded-lg py-2 text-[11px] text-tp-green-light hover:border-tp-green hover:text-tp-green transition-all duration-150"
                >
                  <i className="ti ti-brand-linkedin text-[14px]" />
                  LinkedIn
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
