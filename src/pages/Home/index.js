import { useEffect, useState, useMemo, useCallback } from "react";
import {
  Container,
  Header,
  Card,
  InputSearchContainer,
  ListHeader,
  ErrorContainer,
  EmptyListContainer } from "./styles";
import { Link } from 'react-router-dom'

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';

import Loader from '../../components/Loader/';
import ContactsService from "../../services/ContactsService";
import Button from '../../components/Button'

export default function Home(){
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false)

  const filtredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm])

  const loadContacts = useCallback(async () => {
      try{
        setIsLoading(true)

        const contactsList = await ContactsService.listContacts(orderBy)

        setHasError(false)
        setContacts(contactsList);
      } catch{
        setHasError(true)
      } finally {
        setIsLoading(false)
      }

  }, [orderBy])


  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy(){
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    )
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value)
  }

  function handleTryAgain(){
    loadContacts()
  }

  return (
    <Container>
      <Loader isLoading={isLoading}/>

      {contacts.length > 0 && (
        <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={handleChangeSearchTerm}
        />
       </InputSearchContainer>
      )}


      <Header
      justifyContent={
        hasError
          ? 'flex-end'
          : (
            contacts.length > 0
              ? 'space-between'
              : 'center'
          )
      }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filtredContacts.length}
            {filtredContacts.length === 1 ? ' Contato' : ' Contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>

            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>

        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box"/>
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}
          {filtredContacts.length > 0 && (
          <ListHeader $orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
          </ListHeader>
        )}

        {filtredContacts.map((contact) => (
          <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
          </Card>
      ))}</>
      )}
    </Container>
  )
}
