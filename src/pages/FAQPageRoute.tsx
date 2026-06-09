import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import type { FaqCategory } from '../types'

const FAQ_DATA: FaqCategory[] = [
  {
    label: 'Sobre os satélites',
    items: [
      {
        q: 'Como o satélite coleta dados da minha fazenda?',
        a: 'Satélites meteorológicos orbitam a Terra continuamente medindo temperatura, umidade do ar, radiação solar, velocidade do vento e precipitação. O TerraPlan usa a API OpenWeather, que agrega esses dados por coordenada geográfica, e os associa automaticamente à localização cadastrada da sua fazenda.',
      },
      {
        q: 'Com que frequência os dados são atualizados?',
        a: 'Os dados meteorológicos são atualizados a cada hora e armazenados na tabela T_TELEMETRIA_METEOROLOGICA do banco. A previsão estendida de 7 dias é recalculada 4 vezes ao dia com base nos modelos climáticos de satélite.',
      },
      {
        q: 'Os dados de satélite são precisos para propriedades pequenas?',
        a: 'A resolução dos dados é por ponto de coordenada, latitude e longitude. Por isso qualquer propriedade, independente do tamanho, recebe dados precisos para a sua localização exata.',
      },
    ],
  },
  {
    label: 'Sobre a IA e os modelos',
    items: [
      {
        q: 'O que significa "Ideal", "Alerta" e "Inadequado"?',
        a: 'Ideal: temperatura, umidade e época do ano estão dentro da faixa perfeita para a cultura selecionada. Alerta: uma ou mais variáveis estão próximas do limite. Inadequado: risco alto de perda, então é melhor aguardar condições melhores.',
      },
      {
        q: 'Como é calculado o volume de irrigação?',
        a: 'O modelo de regressão recebe histórico de radiação solar e vento dos satélites e prediz o volume em L/m² necessário para os próximos dias. A irrigação só é recomendada quando a umidade do solo está abaixo do mínimo da cultura e não há previsão de chuva.',
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

const FAQ_PAGE_DATA = {
  tag: 'Perguntas frequentes',
  title: 'Dúvidas sobre o TerraPlan',
  subtitle: 'Tudo sobre como o sistema e os satélites ajudam o produtor rural no dia a dia.',
  categories: FAQ_DATA,
  contactTitle: 'Ainda tem dúvidas?',
  contactText: 'Manda uma mensagem, a equipe responde em até 24h.',
  contactButtonLabel: 'Falar com a equipe',
  contactHref: '/contato',
}

export default function FAQPageRoute() {
  return (
    <div className="flex flex-col min-h-screen">
      <FAQ {...FAQ_PAGE_DATA} />
      <Footer />
    </div>
  )
}
