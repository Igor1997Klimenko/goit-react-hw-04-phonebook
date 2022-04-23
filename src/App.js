import { useState } from 'react';
import { v4 as generateId } from 'uuid';
import ContactForm from './Component/ContactForm/ContactForm';
import ContactList from './Component/ContactList/ContactList';
import Container from './Component/Container/Container';
import Filter from './Component/Filter/Filter';
import useLocaleStorage from './Component/hooks/useLocaleStorage';

const App = () => {
  const [contacts, setContacts] = useLocaleStorage('contacts', []);
  const [filter, setFilter] = useState('');

const handleFormSubmit = userInfo => 
  setContacts([...contacts, {
    id: generateId(),
    ...userInfo,
   }
 ]
)

const handleFilterChange = e => setFilter(e.target.value);

const getFilterContact = () => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
  );
}

const handleContactDelete = contactId => {
setContacts(prev => prev.filter(({id}) => id !== contactId))
}

   return(
     <Container>
     <h1>Phonebook</h1>
    <ContactForm
    onSubmit = {handleFormSubmit}
    contacts = {[...contacts]}
    />

    <h2>Contacts</h2>
    <Filter value={filter} onChange={handleFilterChange}/>
    <ContactList 
    contacts={getFilterContact()} 
    ContactsDelete={handleContactDelete}/>
    </Container>
   );
 }

export default App;
