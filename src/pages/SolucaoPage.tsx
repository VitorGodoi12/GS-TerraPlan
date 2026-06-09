import Footer from '../components/Footer'
import Section, { SectionLabel } from '../components/Section'
import Card from '../components/Card'

const recursos = [
  {
    icon: 'ti-satellite',
    title: 'Dados climaticos em tempo real',
    text: 'A plataforma consome dados meteorologicos e informacoes da propriedade para apoiar decisoes no campo.',
  },
  {
    icon: 'ti-droplets',
    title: 'Irrigacao inteligente',
    text: 'O painel cruza umidade do solo, chuva, temperatura e registros de irrigacao para orientar o uso de agua.',
  },
  {
    icon: 'ti-calendar-stats',
    title: 'Planejamento de safra',
    text: 'O planejador compara culturas e meses de plantio para indicar melhores janelas de cultivo.',
  },
]

const impactos = [
  { val: '48h', label: 'previsao antecipada' },
  { val: '60%', label: 'economia de agua' },
  { val: '3x', label: 'reducao de perdas' },
]

export default function SolucaoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section wide className="py-10 md:py-14">
        <SectionLabel>Solucao</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div>
            <h1 className="font-syne font-extrabold text-[28px] md:text-[36px] text-tp-text-primary leading-tight mb-4">
              Tecnologia espacial aplicada a agricultura familiar.
            </h1>
            <p className="text-sm md:text-base text-tp-green-dim leading-relaxed max-w-3xl">
              O TerraPlan conecta dados climaticos, sensores e API Java para ajudar produtores a decidir quando plantar,
              quanto irrigar e quais riscos climaticos precisam de atencao.
            </p>
          </div>

          <Card className="p-5">
            <p className="text-[11px] uppercase tracking-[1px] text-tp-green-muted mb-4">Impacto esperado</p>
            <div className="space-y-4">
              {impactos.map(item => (
                <div key={item.label} className="flex items-center justify-between border-b border-tp-border-dim pb-3 last:border-0 last:pb-0">
                  <span className="font-syne font-extrabold text-2xl text-tp-green">{item.val}</span>
                  <span className="text-[12px] text-tp-text-muted text-right">{item.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {recursos.map(item => (
            <Card key={item.title} hover className="p-5">
              <div className="w-10 h-10 rounded-xl bg-tp-border-dim border border-tp-border-bright flex items-center justify-center mb-4">
                <i className={`ti ${item.icon} text-tp-green text-lg`} />
              </div>
              <h2 className="font-syne font-bold text-[16px] text-tp-text-primary mb-2">{item.title}</h2>
              <p className="text-[13px] text-tp-green-dim leading-relaxed">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
