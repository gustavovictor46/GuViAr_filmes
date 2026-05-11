import { Link } from 'react-router-dom'

export default function NaoEncontrado() {
  return (
    <section className="secao">
      <div className="cabecalho-pagina">
        <div>
          <h1 className="titulo-pagina">404 — Página não encontrada</h1>
          <p className="texto-pagina">
            A rota que você tentou acessar não existe. Volte para a home e continue navegando.
          </p>
        </div>
      </div>

      <Link className="botao-secundario" to="/">Voltar para a Home</Link>
    </section>
  )
}
