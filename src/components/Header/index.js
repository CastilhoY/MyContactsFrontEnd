import { Container } from "./styles";
import logo from "../../assets/images/logo.svg";
import HeaderTop from "../HeaderTop";

export default function Header() {
  return (
    <>
      <HeaderTop />
      <Container>
        <p>
          Esse projeto tem como objetivo realizar uma listagem de contatos, onde
          o usuário poderá criar um novo contato, editar um contato existente,
          ou deletar o contato. O projeto conta com diversos tipos de
          validações, e possui uma interface extremamente intuitiva! Pelo fato
          de o backend estar rodando apenas na minha máquina, não será possível
          ver os contatos já cadastrados, criar contatos, editar contato, ver
          toasts em tempo real etc pelo github pages. O Header guiará para as
          páginas que o professor ditou como obrigatórias.
        </p>
        <img src={logo} alt="MyContacts" width="201" />
      </Container>
    </>
  );
}
