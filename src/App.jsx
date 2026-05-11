import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Rodape from './components/Rodape.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Servicos from './pages/Servicos.jsx'
import Contato from './pages/Contato.jsx'
import Equipe from './pages/Equipe.jsx'
import NaoEncontrado from './pages/NaoEncontrado.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-conteudo">
        <Menu />
        <main className="pagina-principal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/404" element={<NaoEncontrado />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </BrowserRouter>
  )
}

export default App
