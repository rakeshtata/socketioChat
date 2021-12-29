import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import ChatLog from "./Components/ChatLog"
import Messenger from "./Components/Messenger"
import "./App.css"

function App() {
	const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])

	const socketRef = useRef()

	useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:4000")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

	return (
		<div className="card">
			<Messenger setState={setState} state={state} socketRef={socketRef}/>
			<ChatLog chat={chat}/>
		</div>
	)
}

export default App

