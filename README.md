# TerraPlan - Gestao Agricola Inteligente

## Descricao

O TerraPlan e uma aplicacao web SPA voltada para pequenos e medios produtores rurais. A solucao usa dados climaticos e registros agricolas para apoiar decisoes sobre plantio, irrigacao, alertas climaticos e planejamento de safra.

O projeto foi desenvolvido para a FIAP Global Solution 2026, conectando tecnologia, dados e sustentabilidade no contexto da agricultura.

## Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| React 19 | Biblioteca principal da interface |
| Vite 8 | Build tool e servidor de desenvolvimento |
| TypeScript 6 | Tipagem estatica do projeto |
| Tailwind CSS 3 | Estilizacao e responsividade |
| React Router DOM 7 | Rotas estaticas e dinamicas |
| Tabler Icons | Icones da interface |
| Java e Quarkus | API REST backend |
| Oracle SQL | Banco de dados relacional |
| OpenWeather API | Dados climaticos |
| Vercel | Deploy do frontend |
| Render | Deploy da API Java |

## Paginas e Rotas

| Rota | Tipo | Pagina |
|------|------|--------|
| `/` | Estatica | Home |
| `/sobre` | Estatica | Sobre o Projeto |
| `/solucao` | Estatica | Solucao |
| `/integrantes` | Estatica | Integrantes |
| `/faq` | Estatica | FAQ |
| `/contato` | Estatica | Contato |
| `/painel` | Estatica | Painel do Produtor |
| `/planejador/:cultura` | Dinamica | Planejador de Safra |

## Integracao com API

O frontend consome a API Java publicada no Render por meio da variavel de ambiente:

```env
VITE_API_URL=https://gs-terraplan-api-qxk3.onrender.com
```

Principais endpoints consumidos:

| Metodo | Endpoint | Uso |
|---|---|---|
| GET | `/propriedade` | Lista propriedades cadastradas |
| GET | `/clima/propriedade/:id` | Consulta clima por propriedade |
| GET | `/telemetria` | Lista leituras meteorologicas |
| GET | `/irrigacao` | Lista registros de irrigacao |
| GET | `/alerta` | Lista alertas climaticos |
| GET | `/plantio` | Lista plantios |

## Autores e Creditos

| Nome | RM | Turma | GitHub | LinkedIn |
|------|----|-------|--------|----------|
| Felipe Cuesta Puerta de Oliveira | 567703 | 1TDSPR - 2026 | [GitHub](https://github.com/felipecuesta06) | [LinkedIn](https://www.linkedin.com/in/felipe-cuesta-20a813319) |
| Vitor Costa de Godoi | 568448 | 1TDSPR - 2026 | [GitHub](https://github.com/VitorGodoi12) | [LinkedIn](https://www.linkedin.com/in/vitor-godoi-189b91380) |
| Vitor Santos Domingues | 568375 | 1TDSPR - 2026 | [GitHub](https://github.com/VitorSantosDomingues) | [LinkedIn](https://www.linkedin.com/in/vitor-santos-domingues-87b573275/) |
| Joao Victor De Souza Braz | 566862 | 1TDSPR - 2026 | [GitHub](https://github.com/souzabrazj) | [LinkedIn](https://www.linkedin.com/in/souzabrazj?utm_source=share_via&utm_content=profile&utm_medium=member_android) |

## Estrutura de Pastas

```text
src/
  components/   Componentes reutilizaveis da interface
  constants/    Rotas, endpoints e classes de status
  data/         Dados locais de apoio para paginas informativas
  hooks/        Hooks reutilizaveis
  pages/        Paginas principais da aplicacao
  services/     Cliente HTTP e servicos da API
  types/        Interfaces e tipos TypeScript
```

## Como Usar

```bash
# 1. Clone o repositorio
git clone https://github.com/VitorGodoi12/GS-TerraPlan.git
cd GS-TerraPlan

# 2. Instale as dependencias
npm install

# 3. Rode em desenvolvimento
npm run dev

# 4. Gere o build de producao
npm run build
```

## Links do Projeto

- GitHub: https://github.com/VitorGodoi12/GS-TerraPlan
- Deploy Vercel: https://gs-terra-plan.vercel.app
- Video YouTube: https://youtu.be/8wH3PrfrdPo

## Contato

- E-mail: terraplan@fiap.com.br
- Instituicao: FIAP - 1TDSPR - Global Solution 2026

## ODS Atendidos

- ODS 2 - Fome Zero e Agricultura Sustentavel
- ODS 13 - Acao contra a Mudanca Global do Clima
