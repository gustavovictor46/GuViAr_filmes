export default function Contato() {
  return (
    <section className="secao">
      <div className="cabecalho-pagina">
        <div>
          <h1 className="titulo-pagina">Contato</h1>
          <p className="texto-pagina">
            Fale conosco usando o formulário ou pelas nossas informações de
            contato.
          </p>
        </div>
      </div>

      <div className="listagem">
        <div className="item-lista">
          <h3>Informações</h3>
          <p>email: contato@triodigital.com</p>
          <p>telefone: (11) 99999-9999</p>
          <p>local: São Paulo - SP</p>
        </div>
      </div>

      <form
        className="formulario"
        onSubmit={(evento) => evento.preventDefault()}
      >
        <input className="campo-input" type="text" placeholder="Nome" />
        <input className="campo-input" type="email" placeholder="E-mail" />
        <textarea className="campo-textarea" placeholder="Mensagem"></textarea>
        <button className="botao-primario" type="submit">
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}
