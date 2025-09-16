import React from "react";
import "./styles.css"; // se quiser separar o css

const Tabela = () => {
  return (
    <div className="page-container">
      <h2>Tabela de Contatos</h2>
      <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar" /></td>
                <td>João Silva</td>
                <td>joao.silva@gmail.com</td>
                <td>(19) 91234-5678</td>
            </tr>
            <tr>
                <td><img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar" /></td>
                <td>Ana Souza</td>
                <td>ana.souza@gmail.com</td>
                <td>(19) 99876-5432</td>
            </tr>
            <tr>
                <td><img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" class="avatar" /></td>
                <td>Carlos Pereira</td>
                <td>carlos.pereira@gmail.com</td>
                <td>(19) 98765-4321</td>
            </tr>
            <tr>
                <td><img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" class="avatar" /></td>
                <td>Mariana Lima</td>
                <td>mariana.lima@gmail.com</td>
                <td>(19) 97654-3210</td>
            </tr>
            <tr>
                <td><img src="https://www.w3schools.com/w3images/avatar5.png" alt="Avatar" class="avatar" /></td>
                <td>Pedro Gomes</td>
                <td>pedro.gomes@gmail.com</td>
                <td>(19) 96543-2109</td>
            </tr>
        </tbody>
    </table>

    </div>
  );
};

export default Tabela;
