import { useDispatch, useSelector } from 'react-redux';
import {ContactList, ContactItem} from './Phonebook.stiled';
import { deleteContacts } from 'components/redux/reducer';

export const Contacts = () => {
    const { contacts, filter} = useSelector(state => state.contacts);

    const dispatch = useDispatch();

    const handDelete = id => {
        dispatch(deleteContacts(id));
      };
    
      const getFilterContacts = () => {
        return contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
      };
    

    return ( 
        <>
            {(getFilterContacts()).map((el) => 
            <ContactItem key = {el.id}>
                <ContactList>{el.name}: {el.number}   
                    <button type='button' onClick={()=>handDelete(el.id)}>Delete</button>
                </ContactList>
            </ContactItem>
            )}
        </>    
    );
}