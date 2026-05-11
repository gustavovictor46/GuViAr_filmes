import Cartao from '../components/Cartao.jsx'

const listaCartoes = [
  {
    titulo: 'Consultoria digital',
    descricao: 'Ajudamos sua marca a alcançar mais clientes com estratégia e design.',
  },
  {
    titulo: 'Desenvolvimento web',
    descricao: 'Criamos sites modernos e responsivos para qualquer dispositivo.',
  },
  {
    titulo: 'Suporte contínuo',
    descricao: 'Acompanhamento mensal para sua presença online nunca parar.',
  },
]

export default function Home() {
  return (
    <section className="secao">
      <div className="cabecalho-pagina">
        <div>
          <h1 className="titulo-pagina">Bem-vindo à Trio Digital</h1>
          <p className="texto-pagina">
            Um site fictício de agência que mostra como navegar sem recarregar a página.
          </p>
        </div>
      </div>

      <div className="grade-cartoes">
        {listaCartoes.map((item) => (
          <Cartao key={item.titulo} titulo={item.titulo} descricao={item.descricao} />
        ))}
      </div>
    </section>
  )
}
