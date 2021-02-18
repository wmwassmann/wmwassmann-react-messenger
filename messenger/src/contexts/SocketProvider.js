import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';


const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ children, id }) {

    const [socket, setSocket] = useState();
    useEffect(() => {
        const newSocket = io(
            'http://localhost:5000', 
            { query: { id }}
        )
        setSocket(newSocket)

        // removes the old socket to prevent duplicate messages and creates new one
        return () => newSocket.close()
    }, [id]);

    return (
        <div>
            <SocketContext.Provider value={socket}>
                {children}
            </SocketContext.Provider>
        </div>
    )
}
