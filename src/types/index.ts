// ─── Domínio: Produtor ───────────────────────────────────────────────────────

export interface Produtor {
  id: number
  nome: string
  email: string
  telefone: string
  cpf: string
}

// ─── Domínio: Propriedade ────────────────────────────────────────────────────

export interface Propriedade {
  id: number
  nome: string
  cidade: string
  estado: string
  areaHectares: number
  latitude: number
  longitude: number
  produtorid: number
}

// ─── Domínio: Cultura ────────────────────────────────────────────────────────

export interface Cultura {
  id: number
  nome: string
  tempIdeal: number
  umidadeMinima: number
  aguaNecessaria: number
  ciclo: string
}

// ─── Domínio: Plantio ────────────────────────────────────────────────────────

export type StatusPlantio = 'ativo' | 'colhido' | 'perdido' | 'planejado' | string

export interface Plantio {
  id: number
  dataPlantio: string
  dataColheitaPrevista: string
  status: StatusPlantio
  propriedadeid: number
  culturaid: number
}

// ─── Domínio: Telemetria ─────────────────────────────────────────────────────

export interface TelemetriaMeteorologica {
  id: number
  dataColeta: string
  temperatura: number
  umidadeSolo: number
  chuvaMm: number
  velocidadeVento: number
  propriedadeid: number
}

// ─── Domínio: Irrigação ──────────────────────────────────────────────────────

export interface RegistroIrrigacao {
  id: number
  dataIrrigacao: string
  quantidadeLitros: number
  recomendacao: string
  plantioid: number
}

// ─── Domínio: Alerta Climático ───────────────────────────────────────────────

export type NivelRisco = 'ALTO' | 'MEDIO' | 'BAIXO' | string

export interface AlertaClimatico {
  id: number
  tipoAlerta: string
  nivelRisco: NivelRisco
  descricao: string
  dataAlerta: string
  propriedadeid: number
}

// ─── Domínio: Clima (OpenWeather via Java) ───────────────────────────────────

export interface Clima {
  temperatura: number
  umidade: number
  vento: number
  descricao: string
  recomendacao: string
  alerta: string
  mensagem: string
}

export interface ClimaPropriedade {
  propriedade: string
  clima: Clima
}

// ─── Domínio: Planejador (local — sem API) ───────────────────────────────────

export type StatusMomentoCultivo = 'ideal' | 'alerta' | 'inadequado'
export type InsightType = 'good' | 'warn' | 'info'
export type CulturaKey = 'soja' | 'milho' | 'alface'

export interface MesCalendario {
  mes: string
  status: StatusMomentoCultivo
}

export interface Insight {
  type: InsightType
  icon: string
  text: string
}

export interface CulturaPlanner {
  emoji: string
  name: string
  sci: string
  temp: string
  umidade: string
  agua: string
  ciclo: string
  radiacao: string
  score: number
  meses: MesCalendario[]
  insights: Insight[]
}

// ─── Domínio: Integrantes / FAQ / Contato ────────────────────────────────────

export interface Membro {
  initials: string
  name: string
  role: string
  rm: string
  turma: string
  email: string
  github: string
  linkedin: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface FaqCategory {
  label: string
  items: FaqItem[]
}

export interface ContatoForm {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

// ─── API Genérica ────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  status: number
  message: string
  details?: string
}

// ─── Tipos locais (mock/display — não vêm da API) ────────────────────────────

export interface IrrigacaoSemanal {
  dia: string
  pct: number
  val: string
  chuva: boolean
  semIrrig: boolean
}

export interface PrevisaoDia {
  dia: string
  icon: string
  condicao: string
  tempMin: number
  tempMax: number
  chuvaMm: number
}
