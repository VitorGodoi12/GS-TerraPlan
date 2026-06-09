# 🌱 TerraPlan – Gestão Agrícola Inteligente

## 📋 Descrição

O TerraPlan é uma plataforma web SPA que transforma dados climáticos de satélites em decisões práticas para pequenos e médios produtores rurais: **quando plantar**, **quanto irrigar** e **qual cultura tem mais chance de sucesso** — direto no celular.

Conecta infraestrutura espacial (satélites meteorológicos) a um problema real na Terra (gestão agrícola), atendendo ao desafio oficial da FIAP Global Solution 2026.

## 🚀 Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| React 18 | Framework UI principal |
| Vite 5 | Build tool e dev server |
| TypeScript 5 | Tipagem estática |
| Tailwind CSS 3 | Estilização exclusiva / responsividade |
| React Router DOM v6 | Rotas estáticas e dinâmicas (SPA) |
| Tabler Icons | Biblioteca de ícones |
| Google Fonts (Syne + DM Sans) | Tipografia |
| Java · Quarkus | API REST back-end |
| Python · Flask | API de modelos de IA |
| Oracle SQL | Banco de dados relacional |
| Scikit-learn | Modelos de ML (classificação + regressão) |
| OpenWeather API | Dados reais de satélites |
| Vercel | Deploy e hospedagem |

## 🖥️ Páginas e Rotas

| Rota | Tipo | Página |
|------|------|--------|
| `/` | Estática | Home |
| `/sobre` | Estática | Sobre o Projeto |
| `/integrantes` | Estática | Integrantes |
| `/faq` | Estática | FAQ |
| `/contato` | Estática | Contato |
| `/painel` | Estática | Painel do Produtor |
| `/planejador/:cultura` | **Dinâmica** | Planejador de Safra (soja/milho/alface) |

## 👥 Autores e Créditos

| Nome | RM | Turma | GitHub | LinkedIn |
|------|----|-------|--------|----------|
| Felipe Cuesta Puerta de Oliveira | 567703 | 1TDSA · 2026 | [GitHub](https://github.com/) | [LinkedIn](https://linkedin.com/in/) |
| Vitor Costa de Godoi | 568448 | 1TDSA · 2026 | [GitHub](https://github.com/) | [LinkedIn](https://linkedin.com/in/) |
| Vitor Santos Domingues | 568375 | 1TDSA · 2026 | [GitHub](https://github.com/) | [LinkedIn](https://linkedin.com/in/) |
| João Victor De Souza Braz | 566862 | 1TDSA · 2026 | [GitHub](https://github.com/) | [LinkedIn](https://linkedin.com/in/) |

## 🖼️ Imagens e Ícones

- **Identidade visual:** paleta verde escuro (`#4ade80` principal) sobre fundo `#0a1a12`
- **Tipografia:** Syne (títulos/destaques) + DM Sans (corpo de texto)
- **Ícones:** [Tabler Icons](https://tabler-icons.io/) via webfont CDN
- **Favicon:** SVG personalizado TerraPlan

## ⚙️ Como Usar

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/terraplan.git
cd terraplan

# 2. Instale as dependências
npm install

# 3. Rode em desenvolvimento
npm run dev
# Acesse http://localhost:5173

# 4. Build para produção
npm run build
```

### 🔗 Links do Projeto

- **GitHub:** https://github.com/VitorGodoi12/GS-TerraPlan
- **Vídeo YouTube:** https://youtube.com/SEU_VIDEO *(atualizar)*
- **Deploy Vercel:** https://gs-terra-plan.vercel.app

## 📞 Contato

- **E-mail:** terraplan@fiap.com.br
- **Instituição:** FIAP · 1TDS Agosto · São Paulo, SP

## 🌍 ODS Atendidos

- **ODS 2** – Fome Zero e Agricultura Sustentável
- **ODS 13** – Ação contra a Mudança do Clima
