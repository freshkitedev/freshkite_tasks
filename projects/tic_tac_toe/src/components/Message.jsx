import React, { useEffect, useState } from 'react'
import './Message.css'

const Message = (props) => {
    const [message, setmsg] = useState("Player won");

    useEffect(() => {
        if (props.play.status == "draw") {
            setmsg("Game " + props.play.status)
            return
        }
        setmsg("Player " + props.play.player + " " + props.play.status)
    },[props])

    function handleReset() {
        console.log("Handle Reset");
        props.resetBoard()
    }

    return (
        <div className='msg'>
            <h3>{message}</h3>
            <button className='resetButton' onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Message