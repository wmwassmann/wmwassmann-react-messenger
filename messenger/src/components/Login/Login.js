import React, { useRef } from 'react'
import  { Container, Form, Button } from 'react-bootstrap';
import '../css/style.css'

export default function Login() {
    const idRef = useRef()

    return (
          
            <Container className='login-container align-items-center d-flex'>
                <Form className ='form'>
                    <Form.Group>
                        <Form.Label>Enter Your I.D.</Form.Label>
                        <Form.Control type='text' ref={idRef} required />
                    </Form.Group>
                    <Button type='submit'>Login</Button>
                </Form>             
            </Container>            
        
    )
}
