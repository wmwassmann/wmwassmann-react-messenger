import React, { useRef } from 'react';
import  { Container, Form, Button } from 'react-bootstrap';
import '../css/style.css';
import { v4 as uuidV4 } from 'uuid';

export default function Login( {onIdSubmit }) {
    const idRef = useRef()

    // handles event submission for the submit button
    function handleSubmit(e) {
        e.preventDefault()
        
        onIdSubmit(idRef.current.value)
    }

    // handles the new ID generation using uuid

    function createNewId() {
        onIdSubmit(uuidV4())      
    }

    return (
          
            <Container className='login-container align-items-center d-flex'>
                <Form onSubmit={handleSubmit} className ='form'>
                    <Form.Group>
                        <Form.Label>Enter Your I.D.</Form.Label>
                        <Form.Control type='text' ref={idRef} required />
                    </Form.Group>
                    <Button type='submit'>Login</Button>
                    <Button onClick={createNewId} variant='secondary'>Create New I.D.</Button>
                </Form>             
            </Container>            
        
    )
}
