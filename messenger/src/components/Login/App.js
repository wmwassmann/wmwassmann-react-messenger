import React from 'react';
import Login from './Login';
import useLocalStorage from '../../hooks/useLocalStorage';
import Home from '../Home/Home';
import { ContactsProvider } from '../../contexts/ContactsProvider';
import { ConversationsProvider } from '../../contexts/ConversationsProvider';

function App() {
    const [id, setId] = useLocalStorage('id')

    const home = (
        <ContactsProvider id={id}>
            <ConversationsProvider>
                <Home id={id} />
            </ConversationsProvider>
        </ContactsProvider>
    )

    return (

        id ? home : <Login onIdSubmit={setId} />

    )
}

export default App;