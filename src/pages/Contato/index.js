import React from "react";
import "./styles.css";

const Contato = () => {
  return (
    <div className="page-container">
      <h2>Contato</h2>
      <p>Entre em contato com a g ente:</p>
      <form id="sacForm">
        <div className="field">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="assunto">Assunto:</label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            placeholder="Digite o assunto"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem completa aqui..."
            required
          ></textarea>
        </div>

        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
