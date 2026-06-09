// ─── Formatação de datas ─────────────────────────────────────────────────────

export function formatarData(iso: string): string {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export function formatarDataHora(iso: string): string {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function diasRestantes(dataFim: string): number {
  const hoje = new Date()
  const fim = new Date(dataFim)
  const diff = fim.getTime() - hoje.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

// ─── Formatação numérica ─────────────────────────────────────────────────────

export function formatarHectares(ha: number): string {
  return `${ha.toLocaleString('pt-BR')} ha`
}

export function formatarLitros(litros: number): string {
  return `${litros.toFixed(1)} L/m²`
}

export function formatarTemperatura(celsius: number): string {
  return `${celsius}°C`
}

// ─── Geração de iniciais ─────────────────────────────────────────────────────

export function gerarIniciais(nome: string): string {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('')
}

// ─── Classes condicionais ─────────────────────────────────────────────────────

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

// ─── Validações de formulário ────────────────────────────────────────────────

export function validarEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validarCPF(cpf: string): boolean {
  const clean = cpf.replace(/\D/g, '')
  return clean.length === 11
}
