import Diferenciais from '../components/Diferenciais'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Solucao from '../components/Solucao'

const HERO_DATA = {
  tag: 'Dados de satélite em tempo real',
  title: 'Agricultura inteligente para quem',
  highlight: 'planta na Terra.',
  description:
    'O TerraPlan transforma dados climáticos e espaciais em decisões práticas: quando plantar, quanto irrigar e qual cultura tem mais chance de sucesso, direto no celular.',
  primaryLabel: 'Ver minha fazenda',
  primaryHref: '/painel',
  secondaryLabel: 'Saiba mais',
  secondaryHref: '/sobre',
  widgetTitle: 'Monitoramento ao vivo - Fazenda São Benedito',
  widgetUpdatedText: 'Atualizado há 3 min',
  metrics: [
    { label: 'Umidade Solo', val: '67', unit: '%' },
    { label: 'Temperatura', val: '24', unit: '°C' },
    { label: 'Chuva prevista', val: '12', unit: 'mm' },
    { label: 'Status plantio', val: '✓ Ideal', green: true },
  ],
}

const SOLUCAO_DATA = {
  stats: [
    { val: '48h', label: 'Previsão antecipada' },
    { val: '98%', label: 'Precisão climática' },
    { val: '3x', label: 'Redução de perdas' },
    { val: '60%', label: 'Economia de água' },
  ],
  impactLabel: 'Impacto social',
  impactTitle: 'Alinhado aos ODS da ONU',
  ods: [
    { num: 'ODS 2', text: 'Fome Zero e\nAgricultura Sustentável' },
    { num: 'ODS 13', text: 'Ação contra a\nMudança do Clima' },
  ],
}

const DIFERENCIAIS_DATA = {
  label: 'O que o TerraPlan faz',
  title: 'Tudo que o pequeno produtor precisa, num só lugar.',
  items: [
    { icon: 'ti-plant-2', title: 'Janela ideal de plantio', desc: 'IA classifica o momento como Ideal, Alerta ou Inadequado com base em temperatura, umidade e época do ano.' },
    { icon: 'ti-droplets', title: 'Irrigação inteligente', desc: 'Calcula o volume exato de água necessário e só aciona quando os sensores detectam necessidade real.' },
    { icon: 'ti-chart-line', title: 'Planejamento de safra', desc: 'Modelos preditivos indicam a melhor cultura para os próximos meses com base em previsões climáticas.' },
    { icon: 'ti-satellite', title: 'Dados de satélite', desc: 'Integração com dados reais de satélites meteorológicos: temperatura, radiação, vento e precipitação.' },
    { icon: 'ti-device-mobile', title: '100% responsivo', desc: 'Interface SPA adaptada para celular, tablet e desktop, funcionando em qualquer dispositivo no campo.' },
    { icon: 'ti-shield-check', title: 'Alertas climáticos', desc: 'Notificações proativas de eventos extremos como estiagem, tempestade e risco de geada.' },
  ],
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero {...HERO_DATA} />
      <Solucao {...SOLUCAO_DATA} />
      <Diferenciais {...DIFERENCIAIS_DATA} />
      <Footer />
    </div>
  )
}
