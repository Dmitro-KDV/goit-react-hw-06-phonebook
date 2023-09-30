import { createReducer, createSlice } from "@reduxjs/toolkit";
// import {creatContacts, setFilter, deleteContacts} from './actions'
import {InitialState} from './initialState'

// export const contactsReducer = createReducer(InitialState, {
//     [creatContacts]: (state, action) => {
//         state.contacts.push(action.payload)
//     },
//     [deleteContacts]: (state, action) => {
//         const index = state.contacts.findIndex(task => task.id === action.payload);
//         state.contacts.splice(index, 1);
//         // state.contacts.filter((el) => el.id !== action.payload);
//     },
// })

// export const filtersReducer  = createReducer(InitialState, {
//     [setFilter]: (state, action) => {
//         return {
//         filter: action.payload,
//       };
//     },
// })

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: InitialState,
    reducers: {
        creatContacts: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContacts: (state, action) => {
            const index = state.contacts.findIndex(task => task.id === action.payload)
            state.contacts.splice(index, 1)
        },
    },
})

export const filterSlice = createSlice({
    name: 'filter',
    initialState: InitialState,
    reducers: {
        setFilter: (state, action) => {
            return {
            filter: action.payload,
          };
        },
    },
})


export const contactsReducer = contactsSlice.reducer

export const filtersReducer = filterSlice.reducer

export const {creatContacts, deleteContacts} = contactsSlice.actions

export const {setFilter} = filterSlice.actions