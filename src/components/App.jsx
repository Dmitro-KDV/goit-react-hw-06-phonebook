import { FormaPhonebook } from 'components/Phonebook/FormaPhonebook';
import { Contacts } from 'components/Phonebook/Contacts';
import { Filter } from 'components/Phonebook/Filter';
import { Container } from './Phonebook/Phonebook.stiled';
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
// import { creatContacts, setFilter, deleteContacts } from './redux/actions';
import { creatContacts, setFilter, deleteContacts } from './redux/reducer';


export const App = () => {
  const { contacts, filter } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const addContacts = body => {
    const isAlredyContacts = contacts.find(el => el.name === body.name);
    if (isAlredyContacts) return alert(`${body.name} is alredy in contacts.`);

    const newContacts = {
      ...body,
      id: nanoid(),
    }
    dispatch(creatContacts(newContacts));
  };

  const handDelete = id => {
    dispatch(deleteContacts(id));
  };

  const setFilterContacts = filterName => {
    dispatch(setFilter(filterName));
  };

  const getFilterContacts = () => {
    return contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
  };

  return (
    <Container>
      <h2>Phonebook</h2>
      <FormaPhonebook addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter filterContacts={setFilterContacts} />
      <Contacts contact={getFilterContacts()} handDelete={handDelete}/>
    </Container>
  );
};
