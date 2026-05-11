export default function Equipe() {
  const equipe = [
    { nome: 'Arthur', funcao: 'Designer' },
    { nome: 'Victor', funcao: 'Desenvolvedor' },
    { nome: 'Gustavo', funcao: 'Gerente de projeto' },
  ]

  return (
    <section className="secao">
      <div className="cabecalho-pagina">
        <div>
          <h1 className="titulo-pagina">Nossa equipe</h1>
          <p className="texto-pagina">
            Um time criativo trabalhando para transformar ideias em páginas reais.
          </p>
        </div>
      </div>

      <ul className="listagem">
        {equipe.map((pessoa) => (
          <li key={pessoa.nome} className="item-lista">
            <h3>{pessoa.nome}</h3>
            <p>{pessoa.funcao}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
