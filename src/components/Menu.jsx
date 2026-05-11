import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <header className="menu">
      <div className="menu-titulo">GuViAr</div>
      <nav className="menu-links">
        <Link className="link-nav" to="/">Home</Link>
        <Link className="link-nav" to="/sobre">Sobre</Link>
        <Link className="link-nav" to="/servicos">Serviços</Link>
        <Link className="link-nav" to="/contato">Contato</Link>
        <Link className="link-nav" to="/equipe">Equipe</Link>
      </nav>
    </header>
  )
}
