import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import Integrantes from './pages/Integrantes'
import FAQPageRoute from './pages/FAQPageRoute'
import ContatoPage from './pages/ContatoPage'
import Painel from './pages/Painel'
import Planejador from './pages/Planejador'
import SolucaoPage from './pages/SolucaoPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0a1a12] text-[#e8f5ec]">
        <ScrollToTop />
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<FAQPageRoute />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/solucao" element={<SolucaoPage />} />
            <Route path="/painel" element={<Painel />} />
            <Route path="/planejador" element={<Navigate to="/planejador/soja" replace />} />
            <Route path="/planejador/:cultura" element={<Planejador />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
