import React, {useEffect, useState, createContext} from 'react'
import io from 'socket.io-client'
io("https://betalkkk.web.app/", {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
})

const SocketContext = createContext()
export default SocketContext

export function SocketContextProvider({id, children}) {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io(
            "https://arcane-tor-89589.herokuapp.com/", {query: {id}}
        )
        setSocket(newSocket)
        return () => newSocket.close()
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
