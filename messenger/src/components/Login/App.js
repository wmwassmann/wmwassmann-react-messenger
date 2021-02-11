import React from 'react';
import Login from './Login';
import useLocalStorage from '../../hooks/useLocalStorage';
import Home from '../Home/Home';

function App() {
    const [id, setId] = useLocalStorage('id')    

    return (

        id ? <Home id={id} /> : <Login onIdSubmit={setId} />
      
    )
}

export default App;