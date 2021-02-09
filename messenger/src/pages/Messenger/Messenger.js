import React, { Component } from 'react';
import Chat from '../../components/Chat/Chat';

class Home extends Component {


    render() {
        return (
        <main className='container'>
           <Chat />      
        </main>  
        )
    }
}

export default Home;