import { FormaPhonebook } from 'components/Phonebook/FormaPhonebook';
import { Contacts } from 'components/Phonebook/Contacts';
import { Filter } from 'components/Phonebook/Filter';
import { Container } from './Phonebook/Phonebook.stiled';


export const App = () => {

  return (
    <Container>
      <h2>Phonebook</h2>
      <FormaPhonebook />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};
