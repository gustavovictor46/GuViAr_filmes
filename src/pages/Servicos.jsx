const listaServicos = [
  {
    titulo: 'Criação de site',
    descricao: 'Sites que funcionam bem em computador, tablet e celular.',
  },
  {
    titulo: 'Loja online',
    descricao: 'Configuração de e-commerce simples para vender seus produtos.',
  },
  {
    titulo: 'Blog corporativo',
    descricao: 'Conteúdo organizado para mostrar sua autoridade no mercado.',
  },
  {
    titulo: 'SEO básico',
    descricao: 'Melhor visibilidade no Google com ajustes essenciais.',
  },
]

export default function Servicos() {
  return (
    <section className="secao">
      <div className="cabecalho-pagina">
        <div>
          <h1 className="titulo-pagina">Serviços</h1>
          <p className="texto-pagina">
            Oferecemos serviços simples para quem quer presença digital com rapidez.
          </p>
        </div>
      </div>

      <ul className="listagem">
        {listaServicos.map((servico) => (
          <li key={servico.titulo} className="item-lista">
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
