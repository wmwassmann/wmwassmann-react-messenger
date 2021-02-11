import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function NewConversationModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>    
         {/* <Modal.Header closeButton>Create Contact</Modal.Header> */}
        </>
    )
}
