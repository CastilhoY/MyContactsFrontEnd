import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import contactsService from "../../services/ContactsService";
import Loader from "../../components/Loader";
import toast from "../../utils/toast";

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await contactsService.getCotactById(id);

        console.log({ contactData });
        setIsLoading(false);
      } catch {
        history.push("/");
        toast({
          type: "danger",
          text: "Contato não encontrado!",
        });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {
    //
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title="Editar Yãry" />

      <ContactForm buttonLabel="Salvar Alterações" onSubmit={handleSubmit} />
    </>
  );
}
