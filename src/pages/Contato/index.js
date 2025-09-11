import React from "react";
import "./styles.css";

const Contato = () => {
  return (
    <div className="page-container">
      <h2>Contato</h2>
      <p>Entre em contato com a gente:</p>
      <form>
        <label>Nome:</label>
        <input type="text" placeholder="Digite seu nome" />

        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />

        <label>Mensagem:</label>
        <textarea placeholder="Digite sua mensagem"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
