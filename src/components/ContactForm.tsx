import { useState } from 'react'

type FormState = {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

const initialForm: FormState = {
  nome: '',
  email: '',
  assunto: '',
  mensagem: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }))
  }

  if (sent) {
    return (
      <div className="bg-tp-surface border border-tp-border rounded-2xl p-5 md:p-6">
        <div className="flex flex-col items-center justify-center py-12 gap-4 animate-fade-in-up">
          <div className="w-14 h-14 rounded-full bg-tp-border-dim border-2 border-tp-green flex items-center justify-center">
            <i className="ti ti-check text-tp-green text-2xl" />
          </div>
          <div className="font-syne font-bold text-lg text-tp-text-primary">Mensagem enviada!</div>
          <div className="text-[13px] text-tp-green-dim text-center">Agradecemos o contato. Responderemos em breve.</div>
          <button
            onClick={() => { setSent(false); setForm(initialForm) }}
            className="mt-2 text-[12px] text-tp-green-dim hover:text-tp-green transition-colors"
          >
            Enviar outra mensagem
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-tp-surface border border-tp-border rounded-2xl p-5 md:p-6">
      <div className="font-syne font-bold text-base text-tp-text-primary mb-5">Enviar mensagem</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-[12px] text-tp-green-dim mb-1.5">Seu nome</label>
          <input
            type="text"
            value={form.nome}
            onChange={update('nome')}
            placeholder="Ex: João Agricultor"
            required
            className="w-full bg-tp-border-dim border border-tp-border rounded-lg px-3.5 py-2.5 text-[13px] text-tp-text-primary placeholder-tp-green-muted outline-none focus:border-tp-green transition-colors"
          />
        </div>
        <div>
          <label className="block text-[12px] text-tp-green-dim mb-1.5">E-mail</label>
          <input
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="seu@email.com"
            required
            className="w-full bg-tp-border-dim border border-tp-border rounded-lg px-3.5 py-2.5 text-[13px] text-tp-text-primary placeholder-tp-green-muted outline-none focus:border-tp-green transition-colors"
          />
        </div>
        <div>
          <label className="block text-[12px] text-tp-green-dim mb-1.5">Assunto</label>
          <select
            value={form.assunto}
            onChange={update('assunto')}
            required
            className="w-full bg-tp-border-dim border border-tp-border rounded-lg px-3.5 py-2.5 text-[13px] text-tp-text-primary outline-none focus:border-tp-green transition-colors appearance-none"
          >
            <option value="">Selecione um assunto</option>
            <option value="duvida">Dúvida sobre o sistema</option>
            <option value="avaliacao">Avaliação do projeto (professor)</option>
            <option value="sugestao">Sugestão de melhoria</option>
            <option value="parceria">Parceria / Colaboração</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div>
          <label className="block text-[12px] text-tp-green-dim mb-1.5">Mensagem</label>
          <textarea
            value={form.mensagem}
            onChange={update('mensagem')}
            placeholder="Escreva sua mensagem aqui..."
            required
            rows={4}
            className="w-full bg-tp-border-dim border border-tp-border rounded-lg px-3.5 py-2.5 text-[13px] text-tp-text-primary placeholder-tp-green-muted outline-none focus:border-tp-green transition-colors resize-y"
          />
        </div>
        <button type="submit" className="w-full bg-tp-green text-tp-bg rounded-xl py-3 text-sm font-bold font-syne hover:opacity-90 active:scale-95 transition-all">
          Enviar mensagem →
        </button>
        <p className="text-[11px] text-tp-green-muted text-center flex items-center justify-center gap-1">
          <i className="ti ti-lock text-[12px]" />
          Seus dados são usados somente para responder sua mensagem.
        </p>
      </form>
    </div>
  )
}
