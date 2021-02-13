import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useConversations } from '../../contexts/ConversationsProvider';
import '../css/style.css';

export default function CurrentConversation() {

    const [text, setText] = useState('');
    const { sendMessage, selectedConversation } = useConversations

    function handleSubmit(e) {
        e.preventDefault() 

        sendMessage(selectedConversation.recipients.map(recipient => recipient.id),)
        setText('')
    }



    return (
        <div className='d-flex flex-column flex-grow-1'>            
           <div className= 'flex-grow-1 overflow-auto'>

           </div>
        
        <Form onSubtmit={handleSubmit}>
            <Form.Group className='m-2'>
                <InputGroup>
                    <Form.Control
                        className='message-form'
                        as='textarea' 
                        value={text}
                        required
                        onChange={e => setText(e.target.value)}
                        />
                <InputGroup.Append>
                    <Button type='submit'>Send

                    </Button>
                </InputGroup.Append>
                    
                </InputGroup>
            </Form.Group>
        </Form>
        </div>
    )
}
