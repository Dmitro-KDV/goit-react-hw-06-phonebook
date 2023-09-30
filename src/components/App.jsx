import { FormaPhonebook } from 'components/Phonebook/FormaPhonebook';
import { Contacts } from 'components/Phonebook/Contacts';
import { Filter } from 'components/Phonebook/Filter';
import { Container } from './Phonebook/Phonebook.stiled';
// import { nanoid } from 'nanoid';
import { nanoid } from "@reduxjs/toolkit";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { creatContacts, setFilter, deleteContacts } from './redux/actions';
import { creatContacts, setFilter, deleteContacts } from './redux/reducer';

// const INITIAL_STATE =
//     [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ]

export const App = () => {
  // const [contacts, setContacts] = useState(INITIAL_STATE)
  const { contacts: contacts } = useSelector(state => state.contacts);

  // const [filter, setFilter] = useState('')
  const {filter: filter} = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const parsedSettings = localStorage.getItem('contacts');
  //   if (parsedSettings && JSON.parse(parsedSettings).length) {
  //     setContacts(JSON.parse(parsedSettings))
  //   }
  // }, [])

  // useEffect(() => {
  //   contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  // },[contacts]);

  const addContacts = body => {
    const isAlredyContacts = contacts.find(el => el.name === body.name);
    if (isAlredyContacts) return alert(`${body.name} is alredy in contacts.`);

    const newContacts = {
      ...body,
      id: nanoid(),
    }
    // setContacts((prevContacts)=>[newContacts, ...prevContacts]);
    dispatch(creatContacts(newContacts));
  };

  const handDelete = id => {
    dispatch(deleteContacts(id));
    // setContacts((prevContacts) => {
    //   return prevContacts.filter((el) => el.id !== id)});
  };

  const setFilterContacts = filterName => {
    // setFilter(filterName)
    dispatch(setFilter(filterName));
  };

  const getFilterContacts = () => {
    // return contacts
    // console.log(contacts)
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
