import type {
  Membro,
  FaqCategory,
  IrrigacaoSemanal,
  PrevisaoDia,
  CulturaPlanner,
  CulturaKey,
} from '../types'

// ─── Integrantes ─────────────────────────────────────────────────────────────

export const INTEGRANTES: Membro[] = [
  {
    initials: 'FC',
    name: 'Felipe Cuesta Puerta de Oliveira',
    role: 'Desenvolvedor Full Stack',
    rm: '567703',
    turma: '1TDSPR · 2026',
    email: 'rm567703@fiap.com.br',
    github: 'https://github.com/felipecuesta06',
    linkedin: 'https://www.linkedin.com/in/felipe-cuesta-20a813319',
  },
  {
    initials: 'VC',
    name: 'Vitor Costa de Godoi',
    role: 'Desenvolvedor Full Stack',
    rm: '568448',
    turma: '1TDSPR · 2026',
    email: 'rm568448@fiap.com.br',
    github: 'https://github.com/VitorGodoi12',
    linkedin: 'https://www.linkedin.com/in/vitor-godoi-189b91380',
  },
  {
    initials: 'VS',
    name: 'Vitor Santos Domingues',
    role: 'Desenvolvedor Full Stack',
    rm: '568375',
    turma: '1TDSPR · 2026',
    email: 'rm568375@fiap.com.br',
    github: 'https://github.com/VitorSantosDomingues',
    linkedin: 'https://www.linkedin.com/in/vitor-santos-domingues-87b573275/',
  },
  {
    initials: 'JV',
    name: 'João Victor De Souza Braz',
    role: 'Desenvolvedor Full Stack',
    rm: '566862',
    turma: '1TDSPR · 2026',
    email: 'rm566862@fiap.com.br',
    github: 'https://github.com/souzabrazj',
    linkedin: 'https://www.linkedin.com/in/souzabrazj?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_DATA: FaqCategory[] = [
  {
    label: 'Sobre os satélites',
    items: [
      {
        q: 'Como o satélite coleta dados da minha fazenda?',
        a: 'Satélites meteorológicos orbitam a Terra continuamente medindo temperatura, umidade do ar, radiação solar, velocidade do vento e precipitação. O TerraPlan usa a API OpenWeather — que agrega esses dados por coordenada geográfica — e os associa automaticamente à localização cadastrada da sua fazenda.',
      },
      {
        q: 'Com que frequência os dados são atualizados?',
        a: 'Os dados meteorológicos são atualizados a cada hora e armazenados na tabela T_TELEMETRIA_METEOROLOGICA do banco. A previsão estendida (7 dias) é recalculada 4 vezes ao dia com base nos modelos climáticos de satélite.',
      },
      {
        q: 'Os dados de satélite são precisos para propriedades pequenas?',
        a: 'A resolução dos dados é por ponto de coordenada (latitude/longitude), então sim — qualquer propriedade, independente do tamanho, recebe dados precisos para a sua localização exata.',
      },
    ],
  },
  {
    label: 'Sobre a IA e os modelos',
    items: [
      {
        q: 'O que significa "Ideal", "Alerta" e "Inadequado"?',
        a: 'Ideal: temperatura, umidade e época do ano estão dentro da faixa perfeita para a cultura selecionada. Alerta: uma ou mais variáveis estão próximas do limite. Inadequado: risco alto de perda — aguarde condições melhores.',
      },
      {
        q: 'Como é calculado o volume de irrigação?',
        a: 'O Modelo 2 (Regressão) recebe histórico de radiação solar e vento dos satélites e prediz o volume em L/m² necessário para os próximos dias. A irrigação só é recomendada quando a umidade do solo está abaixo do mínimo da cultura e não há previsão de chuva.',
      },
    ],
  },
  {
    label: 'Sobre o sistema',
    items: [
      {
        q: 'Preciso de internet para usar o TerraPlan?',
        a: 'O painel web precisa de conexão para buscar dados em tempo real. Mas o módulo Python offline pode ser executado localmente, lendo arquivos .json exportados dos satélites e gerando relatórios sem internet.',
      },
      {
        q: 'Quais culturas o sistema suporta atualmente?',
        a: 'Atualmente o catálogo inclui Soja, Milho e Alface, com seus limites específicos de temperatura, umidade e necessidade hídrica. Novas culturas podem ser adicionadas via cadastro no painel ou pela API.',
      },
    ],
  },
]

// ─── Painel – dados mock (substituir por useFetch quando API estiver pronta) ──

export const IRRIGACAO_SEMANAL: IrrigacaoSemanal[] = [
  { dia: 'Seg', pct: 0, val: '0 L/m²', chuva: false, semIrrig: true },
  { dia: 'Ter', pct: 60, val: '3.2 L/m²', chuva: false, semIrrig: false },
  { dia: 'Qua', pct: 80, val: '4.1 L/m²', chuva: false, semIrrig: false },
  { dia: 'Qui', pct: 40, val: '2.0 L/m²', chuva: false, semIrrig: false },
  { dia: 'Sex', pct: 0, val: 'Chuva prevista', chuva: true, semIrrig: false },
  { dia: 'Sáb', pct: 50, val: '2.6 L/m²', chuva: false, semIrrig: false },
  { dia: 'Dom', pct: 70, val: '3.7 L/m²', chuva: false, semIrrig: false },
]

export const PREVISAO_7DIAS: PrevisaoDia[] = [
  { dia: 'Seg, 02', icon: 'ti-sun', condicao: 'Ensolarado', tempMin: 21, tempMax: 29, chuvaMm: 0 },
  { dia: 'Ter, 03', icon: 'ti-cloud', condicao: 'Nublado', tempMin: 20, tempMax: 27, chuvaMm: 2 },
  { dia: 'Qua, 04', icon: 'ti-cloud-rain', condicao: 'Pancadas', tempMin: 19, tempMax: 25, chuvaMm: 14 },
  { dia: 'Qui, 05', icon: 'ti-cloud-storm', condicao: 'Tempestade', tempMin: 18, tempMax: 23, chuvaMm: 28 },
  { dia: 'Sex, 06', icon: 'ti-cloud-rain', condicao: 'Chuva', tempMin: 19, tempMax: 24, chuvaMm: 18 },
  { dia: 'Sáb, 07', icon: 'ti-cloud', condicao: 'Nublado', tempMin: 20, tempMax: 26, chuvaMm: 4 },
  { dia: 'Dom, 08', icon: 'ti-sun', condicao: 'Ensolarado', tempMin: 22, tempMax: 31, chuvaMm: 0 },
]

// ─── Planejador ───────────────────────────────────────────────────────────────

export const CULTURAS_PLANNER: Record<CulturaKey, CulturaPlanner> = {
  soja: {
    emoji: '🌱', name: 'Soja', sci: 'Glycine max',
    temp: '20–30°C', umidade: '60%', agua: '450–800 mm', ciclo: '100–130 dias', radiacao: 'Alta necessidade',
    score: 82,
    meses: [
      { mes: 'Jun', status: 'ideal' }, { mes: 'Jul', status: 'ideal' },
      { mes: 'Ago', status: 'alerta' }, { mes: 'Set', status: 'alerta' },
      { mes: 'Out', status: 'inadequado' }, { mes: 'Nov', status: 'ideal' },
    ],
    insights: [
      { type: 'good', icon: 'ti-check', text: 'Junho–Julho: Janela ótima. Temperatura média de 23°C e umidade acima de 65% favorecem a germinação.' },
      { type: 'warn', icon: 'ti-alert-triangle', text: 'Agosto–Setembro: Risco moderado de estiagem prevista pelo satélite. Irrigação suplementar poderá ser necessária.' },
      { type: 'info', icon: 'ti-chart-line', text: 'Outubro: Alta probabilidade de chuvas intensas. Evitar plantio — risco de encharcamento.' },
      { type: 'good', icon: 'ti-calendar-check', text: 'Colheita estimada: Plantio em junho → colheita entre outubro e novembro.' },
    ],
  },
  milho: {
    emoji: '🌽', name: 'Milho', sci: 'Zea mays',
    temp: '18–32°C', umidade: '50%', agua: '500–800 mm', ciclo: '90–120 dias', radiacao: 'Muito alta',
    score: 65,
    meses: [
      { mes: 'Jun', status: 'alerta' }, { mes: 'Jul', status: 'alerta' },
      { mes: 'Ago', status: 'inadequado' }, { mes: 'Set', status: 'ideal' },
      { mes: 'Out', status: 'inadequado' }, { mes: 'Nov', status: 'ideal' },
    ],
    insights: [
      { type: 'warn', icon: 'ti-alert-triangle', text: 'Junho–Julho: Temperaturas noturnas abaixo do ideal podem comprometer a germinação.' },
      { type: 'good', icon: 'ti-check', text: 'Setembro: Condições favoráveis com temperaturas mais altas e umidade estabilizada.' },
      { type: 'info', icon: 'ti-chart-line', text: 'Outubro: Alta pluviosidade prevista — risco de doenças fúngicas. Não recomendado.' },
      { type: 'good', icon: 'ti-calendar-check', text: 'Colheita estimada: Plantio em setembro → colheita entre dezembro e janeiro.' },
    ],
  },
  alface: {
    emoji: '🥬', name: 'Alface', sci: 'Lactuca sativa',
    temp: '15–20°C', umidade: '70%', agua: '250–400 mm', ciclo: '45–70 dias', radiacao: 'Baixa a média',
    score: 91,
    meses: [
      { mes: 'Jun', status: 'ideal' }, { mes: 'Jul', status: 'ideal' },
      { mes: 'Ago', status: 'ideal' }, { mes: 'Set', status: 'alerta' },
      { mes: 'Out', status: 'alerta' }, { mes: 'Nov', status: 'inadequado' },
    ],
    insights: [
      { type: 'good', icon: 'ti-check', text: 'Junho–Agosto: Período ideal. Temperaturas amenas e boa disponibilidade hídrica.' },
      { type: 'warn', icon: 'ti-alert-triangle', text: 'Setembro–Outubro: Temperaturas em alta podem causar pendoamento precoce.' },
      { type: 'info', icon: 'ti-chart-line', text: 'Novembro: Calor intenso inviabiliza a cultura sem infraestrutura de resfriamento.' },
      { type: 'good', icon: 'ti-calendar-check', text: 'Ciclo curto: é possível fazer 2 plantios completos entre junho e setembro.' },
    ],
  },
}
