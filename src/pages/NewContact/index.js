import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import contactsService from "../../services/ContactsService";

export default function NewContact(){
  async function handleSubmit(formData) {
    const contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category_id: formData.categoryId,
    };

    const response = await contactsService.createContact(contact)

    console.log(response)
  }

    return (
      <>
        <PageHeader title="Novo Contato"/>

        <ContactForm
          buttonLabel="Cadastrar"
          onSubmit={handleSubmit}
        />
      </>
    )
}
