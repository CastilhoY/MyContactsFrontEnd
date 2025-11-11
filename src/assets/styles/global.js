import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
    transition: background 0.3s, color 0.3s;

    /* ✅ Centraliza todo o conteúdo do site */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    text-align: center;
  }

  button {
    cursor: pointer;
  }

  /* 🔒 Mantém a tabela sempre branca com texto preto */
  table, 
  th, 
  td, 
  .tabela-contatos, 
  .tabela-contatos * {
    background-color: #ffffff !important; /* fundo sempre branco */
    color: #000000 !important; /* texto sempre preto */
    transition: none !important;
  }

  /* 🔧 Garante responsividade */
  #root {
    width: 100%;
    max-width: 1100px;
    padding: 20px;
  }
`;
