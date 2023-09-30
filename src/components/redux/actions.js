import { createAction, nanoid } from "@reduxjs/toolkit";

export const creatContacts = createAction('CREATCONTACTS', (value) => {
    return {
        payload: {id: nanoid(), ...value}
    }
})

export const deleteContacts = createAction('DELETECONTACRS');

export const setFilter = createAction('SETFILTER'); 

export const getFilter = createAction('GETFILTER');