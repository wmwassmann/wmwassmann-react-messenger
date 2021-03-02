import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default function MyProfile() {


    return (
        <div className='profile-body'>
            ssdfsdfsd
            <Container className='image-body'>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                </Row>
            </Container>
            <div className='info-body'>
                <ul>
                    <li>
                        A
                    </li>
                    <li>
                        B
                    </li>
                    <li>
                        C
                    </li>
                </ul>
            </div>

            <Button>Edit Profile</Button>




        </div>
    )
}
