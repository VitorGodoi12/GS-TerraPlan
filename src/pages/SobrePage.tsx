import Footer from '../components/Footer'
import IntroHero from '../components/IntroHero'
import Problema from '../components/Problema'

const INTRO_DATA = {
  tagIcon: 'ti-info-circle',
  tagLabel: 'Sobre o Projeto',
  title: 'Conectando o espaço',
  highlight: 'à agricultura familiar na Terra.',
  description:
    'O TerraPlan nasceu de um desafio real: pequenos produtores rurais perdem safras por falta de informação climática precisa e acessível. Usando infraestrutura espacial, satélites meteorológicos e de monitoramento, transformamos dados complexos em decisões simples.',
}

const PROBLEMA_DATA = {
  blocks: [
    { icon: 'ti-target', title: 'O Problema', text: 'Pequenos e médios produtores rurais não têm acesso a análises climáticas preditivas. Dependem da experiência empírica para decidir quando plantar e irrigar, resultando em perdas de sementes e desperdício hídrico.' },
    { icon: 'ti-bulb', title: 'A Solução', text: 'Uma plataforma SPA que consome dados de satélites meteorológicos, aplica modelos de IA e entrega ao produtor: momento ideal de plantio, rotina de irrigação otimizada e calendário preditivo de safra.' },
    { icon: 'ti-satellite', title: 'Infraestrutura Espacial', text: 'Integramos dados reais de satélites via API OpenWeather: temperatura, umidade, radiação solar, vento e precipitação, atualizados a cada hora para cada propriedade cadastrada.' },
    { icon: 'ti-brain', title: 'Inteligência Artificial', text: 'Dois modelos: classificação para plantio e regressão para volume de irrigação em L/m². Treinados com dataset histórico de clima e safras regionais.' },
  ],
  timelineLabel: 'Arquitetura do sistema',
  timeline: [
    { icon: 'ti-satellite', step: 'Camada 1', title: 'Coleta de Dados Espaciais', desc: 'Satélites fornecem temperatura, umidade, radiação e precipitação por localização via API OpenWeather.' },
    { icon: 'ti-database', step: 'Camada 2', title: 'Banco de Dados Oracle', desc: '6 tabelas relacionais armazenam produtores, propriedades, culturas, plantios, telemetria e registros de irrigação.' },
    { icon: 'ti-code', step: 'Camada 3', title: 'API Java (Quarkus) + IA (Flask)', desc: 'API REST com regras de negócio e dois modelos de ML envelopados em Flask.' },
    { icon: 'ti-layout-dashboard', step: 'Camada 4', title: 'Frontend React + Vite + TypeScript', desc: 'SPA responsiva com Tailwind CSS, consumindo as APIs e entregando dashboards e planejadores ao produtor.' },
  ],
  techLabel: 'Tecnologias utilizadas',
  techStack: [
    'React','Vite','TypeScript','Tailwind CSS',
    'Java · Quarkus','Python · Flask','Oracle SQL',
    'Scikit-learn','OpenWeather API','Vercel',
  ],
  quote: {
    label: 'Desafio FIAP - Global Solution 2026',
    text: 'Proponha uma solução que conecte a exploração espacial com problemas e oportunidades reais aqui na Terra, utilizando tecnologia, dados, infraestrutura espacial ou novos modelos de negócio.',
    source: 'Documento oficial FIAP · 1TDS Agosto · Global Solution 2026',
  },
}

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <IntroHero {...INTRO_DATA} />
      <Problema {...PROBLEMA_DATA} />
      <Footer />
    </div>
  )
}
