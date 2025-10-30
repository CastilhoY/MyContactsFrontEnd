import { useState } from "react";
import "./styles.css";
import { validarEmail, formatarCPF, validarCPF } from "../js/validacao";
import toast from "../../utils/toast";

const Contato = () => {
  const [emailErro, setEmailErro] = useState("");
  const [cpf, setCpf] = useState("");
  const [cpfErro, setCpfErro] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    let formValido = true;

    if (!validarEmail(email)) {
      setEmailErro("Por favor, insira um e-mail válido Ex: exemplo@mail.com.");
      formValido = false;
    } else {
      setEmailErro("");
    }

    if (!validarCPF(cpf)) {
      setCpfErro("Por favor, insira um CPF válido.");
      formValido = false;
    } else {
      setCpfErro("");
    }

    if (!formValido) {
      return;
    }

    toast({
      type: "success",
      text: "Formulário Enviado com sucesso!",
    });
    event.target.reset();
    setCpf("");
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    if (emailErro && validarEmail(email)) {
      setEmailErro("");
    }
  };

  const handleCpfChange = (event) => {
    const valorFormatado = formatarCPF(event.target.value);
    setCpf(valorFormatado);

    if (cpfErro && validarCPF(valorFormatado)) {
      setCpfErro("");
    }
  };

  return (
    <div className="page-container">
      <h2>Contato</h2> <p>Entre em contato com a gente:</p>
      <form id="sacForm" onSubmit={handleSubmit}>
        {/* ... campo nome ... */}
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
            onChange={handleEmailChange}
            className={emailErro ? "erro" : ""}
          />

          {emailErro && <span className="mensagem-erro">{emailErro}</span>}
        </div>

        <div className="field">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite seu CPF (xxx.xxx.xxx-xx)"
            required
            value={cpf}
            onChange={handleCpfChange}
            maxLength="14"
            className={cpfErro ? "erro" : ""}
          />
          {cpfErro && <span className="mensagem-erro">{cpfErro}</span>}
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
          <button id="botao" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
