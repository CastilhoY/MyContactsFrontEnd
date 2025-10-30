// MUDANÇA: Importa o useState e useEffect do React
import React, { useState, useEffect } from "react";
// MUDANÇA: Importa a sua função de carregar dados (ajuste o caminho se necessário)
import { carregarDados } from "../js/carrega_dados";
import "./styles.css";

const Tabela = () => {
  // MUDANÇA: Cria um estado para guardar os contatos (começa como um array vazio)
  const [contatos, setContatos] = useState([]);
  // MUDANÇA: Cria um estado para saber se está carregando
  const [loading, setLoading] = useState(true);

  // MUDANÇA: useEffect roda UMA VEZ quando o componente é montado
  useEffect(() => {
    // Função interna para carregar os dados
    const buscarDados = async () => {
      setLoading(true); // Inicia o carregamento
      const dados = await carregarDados(); // Chama sua função do js/carrega_dados.js
      setContatos(dados); // Salva os dados no estado
      setLoading(false); // Termina o carregamento
    };

    buscarDados();
  }, []); // O array vazio [] garante que isso só rode uma vez

  // MUDANÇA: Mostra uma mensagem de "carregando" enquanto os dados não chegam
  if (loading) {
    return (
      <div className="page-container">
        <h2>Tabela de Contatos</h2>
        <p>Carregando dados...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Tabela de Contatos</h2>
      {/* MUDANÇA: Adiciona uma classe à tabela para o CSS não afetar outras tabelas */}
      <table className="tabela-contatos">
        <thead>
          {/* O cabeçalho não muda */}
          <tr>
            <th>Avatar</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        {/* MUDANÇA: O corpo da tabela agora é dinâmico */}
        <tbody>
          {/* MUDANÇA: Verifica se existem contatos antes de tentar listá-los */}
          {contatos.length > 0 ? (
            // MUDANÇA: Usa .map() para criar uma <tr> para cada item no array 'contatos'
            contatos.map((contato) => (
              // 'key' é essencial para o React em listas
              <tr key={contato.id}>
                <td>
                  {/* MUDANÇA: Carrega a imagem e o alt dinamicamente */}
                  <img
                    src={contato.avatar}
                    alt={`Avatar de ${contato.nome}`}
                    className="avatar"
                  />
                </td>
                {/* MUDANÇA: Carrega os dados dinamicamente */}
                <td>{contato.nome}</td>
                <td>{contato.email}</td>
                <td>{contato.telefone}</td>
              </tr>
            ))
          ) : (
            // MUDANÇA: Mensagem para o caso do JSON estar vazio ou não carregar
            <tr>
              <td colSpan="4">Nenhum contato encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
