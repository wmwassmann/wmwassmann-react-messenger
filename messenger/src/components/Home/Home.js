import React from 'react';
import Sidebar from './../Sidebar/Sidebar';
import { useConversations } from '../../contexts/ConversationsProvider';
import CurrentConversation from '../Conversations/CurrentConversation';
import '../css/style.css';

export default function Home({ id }) {
    const { selectedConversation } = useConversations();

    return (
        <div className='sidebar d-flex'>
            <Sidebar id={id} />
            {selectedConversation && <CurrentConversation />}
        </div>
    )
};