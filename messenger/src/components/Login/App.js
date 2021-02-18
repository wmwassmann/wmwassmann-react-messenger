import React from 'react';
import Login from './Login';
import useLocalStorage from '../../hooks/useLocalStorage';
import Home from '../Home/Home';
import { ContactsProvider } from '../../contexts/ContactsProvider';
import { ConversationsProvider } from '../../contexts/ConversationsProvider';
import { SocketProvider } from '../../contexts/SocketProvider';

function App() {
    const [id, setId] = useLocalStorage('id')

    const home = (
    <SocketProvider id={id}>
        <ContactsProvider>
            <ConversationsProvider id={id}>
                <Home id={id} />
            </ConversationsProvider>
        </ContactsProvider>
    </SocketProvider>
    )

    return (

        id ? home : <Login onIdSubmit={setId} />

    )
}

export default App;