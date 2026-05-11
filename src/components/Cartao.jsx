export default function Cartao({ titulo, descricao, children }) {
  return (
    <article className="cartao">
      <h3 className="cartao-titulo">{titulo}</h3>
      <p className="cartao-texto">{descricao}</p>
      {children}
    </article>
  )
}
