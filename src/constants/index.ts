// ─── Rotas do frontend ───────────────────────────────────────────────────────

export const ROUTES = {
  HOME: '/',
  SOBRE: '/sobre',
  INTEGRANTES: '/integrantes',
  FAQ: '/faq',
  CONTATO: '/contato',
  PAINEL: '/painel',
  PLANEJADOR: '/planejador',
  PLANEJADOR_CULTURA: '/planejador/:cultura',
} as const

// ─── URL base da API Java (Quarkus) ──────────────────────────────────────────
// Em produção: trocar por https://sua-api.onrender.com (ou Railway, Fly.io etc)

export const API_BASE_URL = (import.meta.env.VITE_API_URL as string) ?? 'http://localhost:8080'

// ─── Endpoints reais mapeados do Java ────────────────────────────────────────

export const API = {
  // /produtor
  PRODUTOR_LIST:   '/produtor',
  PRODUTOR_BY_ID:  (id: number) => `/produtor/${id}`,

  // /propriedade
  PROPRIEDADE_LIST:   '/propriedade',
  PROPRIEDADE_BY_ID:  (id: number) => `/propriedade/${id}`,

  // /cultura
  CULTURA_LIST:   '/cultura',
  CULTURA_BY_ID:  (id: number) => `/cultura/${id}`,

  // /plantio
  PLANTIO_LIST:   '/plantio',
  PLANTIO_BY_ID:  (id: number) => `/plantio/${id}`,

  // /telemetria
  TELEMETRIA_LIST:   '/telemetria',
  TELEMETRIA_BY_ID:  (id: number) => `/telemetria/${id}`,

  // /irrigacao
  IRRIGACAO_LIST:   '/irrigacao',
  IRRIGACAO_BY_ID:  (id: number) => `/irrigacao/${id}`,

  // /alerta
  ALERTA_LIST:   '/alerta',
  ALERTA_BY_ID:  (id: number) => `/alerta/${id}`,

  // /clima (OpenWeather via Java)
  CLIMA_BY_COORDS:      (lat: number, lon: number) => `/clima/${lat}/${lon}`,
  CLIMA_BY_PROPRIEDADE: (id: number) => `/clima/propriedade/${id}`,
} as const

// ─── Navegação ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { to: ROUTES.HOME,        label: 'Home',        end: true },
  { to: ROUTES.SOBRE,       label: 'Sobre' },
  { to: ROUTES.INTEGRANTES, label: 'Integrantes' },
  { to: ROUTES.FAQ,         label: 'FAQ' },
  { to: ROUTES.CONTATO,     label: 'Contato' },
] as const

// ─── Estilos de status ───────────────────────────────────────────────────────

export const STATUS_CULTIVO_CARD: Record<string, string> = {
  ideal:      'bg-[#0f2d1a] border-[#2a5c38]',
  alerta:     'bg-[#2a1f0a] border-[#5c3d10]',
  inadequado: 'bg-[#1a0d10] border-[#4d1a22]',
}
export const STATUS_CULTIVO_BADGE: Record<string, string> = {
  ideal:      'bg-[#132d1c] text-[#4ade80]',
  alerta:     'bg-[#1a1205] text-[#fbbf24]',
  inadequado: 'bg-[#12080b] text-[#f87171]',
}
export const STATUS_CULTIVO_LABEL: Record<string, string> = {
  ideal: 'Ideal', alerta: 'Alerta', inadequado: 'Inad.',
}

export const STATUS_PLANTIO_BADGE: Record<string, string> = {
  ativo:      'bg-[#132d1c] text-[#4ade80] border-[#2a5c38]',
  colhido:    'bg-[#0e1e38] text-[#60a5fa] border-[#1a3d60]',
  perdido:    'bg-[#1a0d10] text-[#f87171] border-[#4d1a22]',
  planejado:  'bg-[#2a1f0a] text-[#fbbf24] border-[#5c3d10]',
}
export const STATUS_PLANTIO_LABEL: Record<string, string> = {
  ativo: 'Ativo', colhido: 'Colhido', perdido: 'Perdido', planejado: 'Planejado',
}

export const NIVEL_RISCO_BADGE: Record<string, string> = {
  ALTO:  'bg-[#1a0d10] text-[#f87171] border-[#4d1a22]',
  MEDIO: 'bg-[#2a1f0a] text-[#fbbf24] border-[#5c3d10]',
  BAIXO: 'bg-[#132d1c] text-[#4ade80] border-[#2a5c38]',
}

export const INSIGHT_BORDER: Record<string, string> = {
  good: 'border-l-[#4ade80]',
  warn: 'border-l-[#fbbf24]',
  info: 'border-l-[#60a5fa]',
}
export const INSIGHT_ICON: Record<string, string> = {
  good: 'text-[#4ade80]',
  warn: 'text-[#fbbf24]',
  info: 'text-[#60a5fa]',
}
