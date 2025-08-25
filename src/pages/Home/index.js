import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles";
import { Link } from 'react-router-dom'

import arrow from '../../assets/images/icons/arrow.svg'
import trash from '../../assets/images/icons/trash.svg'
import edit from '../../assets/images/icons/edit.svg'

export default function Home(){
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..."/>
      </InputSearchContainer>

      <Header>
        <strong> 3 Contatos </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Yãry Castilho</strong>
            <small>instagram</small>
          </div>
          <span>andradeya4@gmail.com</span>
          <span>(19) 99999-9999</span>
        </div>
        <div className="actions">
          <Link to="/edit/123">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
      </ListContainer>
    </Container>
  )
}
