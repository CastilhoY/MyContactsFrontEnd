import React from "react";
import "./styles.css"; // se quiser separar o css

const Tabela = () => {
  return (
    <div className="page-container">
      <h2>Tabela de Dados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Curso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ana</td>
            <td>22</td>
            <td>Engenharia</td>
          </tr>
          <tr>
            <td>Carlos</td>
            <td>24</td>
            <td>Computação</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
