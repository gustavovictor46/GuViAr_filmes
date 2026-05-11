const missaoVisaoValores = [
  {
    titulo: 'Missão',
    descricao: 'Transformar negócios pequenos em experiências digitais relevantes.',
  },
  {
    titulo: 'Visão',
    descricao: 'Ser referência em projetos simples, eficientes e com identidade.',
  },
  {
    titulo: 'Valores',
    descricao: 'Criatividade, clareza e compromisso com cada cliente.',
  },
]

export default function Sobre() {
  return (
    <section className="secao">
      <div className="cabecalho-pagina">
        <div>
          <h1 className="titulo-pagina">Sobre a Trio Digital</h1>
          <p className="texto-pagina">
            Somos uma equipe pequena com foco em sites fáceis de usar e rotação suave entre páginas.
          </p>
        </div>
      </div>

      <ul className="listagem">
        {missaoVisaoValores.map((item) => (
          <li key={item.titulo} className="item-lista">
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
