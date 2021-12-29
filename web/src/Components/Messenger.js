import React from "react"
import TextField from "@material-ui/core/TextField"
import "../App.css"

const Messenger = ({...props}) => {

    const {state ,setState, socketRef} = props

    const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

    const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

    return(
        <form onSubmit={onMessageSubmit}>
			<h1>Messenger</h1>
			<div className="name-field">
				<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
			</div>
			<div>
				<TextField
					name="message"
					onChange={(e) => onTextChange(e)}
					value={state.message}
					id="outlined-multiline-static"
					variant="outlined"
					label="Message"
				/>
			</div>
			<button>Send Message</button>
		</form>
    ) 
}

export default Messenger