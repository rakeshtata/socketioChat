import React from "react"
import "../App.css"

const Chatlog = ({...props}) => {

    const {chat} = props
    return(
        <div className="render-chat">
			<h1>Chat Log</h1>
			{chat.map(({ name, message }, index) => (
				<div key={index}>
					<h3>
						{name}: <span>{message}</span>
					</h3>
				</div>
			))}
		</div>
    ) 
    
}

export default Chatlog