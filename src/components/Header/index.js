import { Container } from "./styles";
import logo from '../../assets/images/logo.svg'
import HeaderTop from "../HeaderTop";

export default function Header(){
    return (
      <>
        <HeaderTop />
        <Container>
            <p>
              Esse projeto tem como objetivo realizar uma listagem de contatos,
              onde o usuário poderá criar um novo contato, editar um contato existente, ou deletar o contato.
              O projeto conta com diversos tipos de validações, e possui uma interface extremamente intuitiva!
            </p>
            <img src={logo} alt="MyContacts" width="201"/>
        </Container>
      </>
    )
}
