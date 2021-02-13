import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from '../contexts/ContactsProvider';



const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConversationsProvider({ id, children }) {

    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
    const { contacts } = useContacts();

    function createConversation(recipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { recipients, messages: [] }]
        }) 
    }

    function addMessage({ recipients, text, sender}) {
        setConversations(prevConversations => {
            let madeChange = false
            const newMessage = { sender, text }
            const newConversations = prevConversations.map(converstion => {
                if (arrayEquality(conversation.recipients, recipients)) {
                    madeChange = true                
                    return {...conversation, message: [conversation.messages, newMessage]}
                }
                return conversation
            })

            if (madeChange) {
                return newConversations
            } else {
                return [...prevConversations, { recipients, messages: [newMessage]}]
            }
        })
    
    }

    function sendMessage(recipients, text) {
        addMessage({ recipients, text, sender: id})
    }



    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient 
            })
            const name = (contact && contact.name) || recipient 
            return { id: recipient, name } 
        })
        const selected = index === selectedConversationIndex
        return {...conversation, recipients, selected}
    }) 

    const output = {
        conversations: formattedConversations, 
        selectedConversation: formattedConversations[selectedConversationIndex],
        sendMessage,
        selectConversationIndex: setSelectedConversationIndex,
        createConversation
    }

    return (
        <div>
            <ConversationsContext.Provider value={output}>
                {children}
            </ConversationsContext.Provider>
        </div>
    )
}

function arrayEquality(a, b) {
    if (a.length !== b.length) return false
    a.sort()
    b.sort()


    return a.every((element, index) => {
        return element === b[index]
    }) 
}