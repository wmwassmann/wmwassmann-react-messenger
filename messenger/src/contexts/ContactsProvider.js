import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

// https://reactjs.org/docs/context.html
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.

const ContactsContext = React.createContext()


// This context returns the ContactsContext.Provider when called outside of this context component. 
export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {

    const [contacts, setContacts] = useLocalStorage('contacts', [])
   
    function createContact(id, name) {
        setContacts(prevContacts => {
            return [...prevContacts, { id, name }]
        }) 
    }
    return (
        <div>
            <ContactsContext.Provider value= {{ contacts, createContact }}>
                {children}
            </ContactsContext.Provider>
        </div>
    )
}
