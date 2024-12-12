import React, { useState } from 'react'
import "./Message.css"

const Getsize = (props) => {
    const [boardSize, setBoardSize] = useState(3)

    const handleSetSize = () => {
        props.setSize(boardSize);
    }

    return (
        <div className='msg'>
            <input style={{width:100}} onChange={(e) => { setBoardSize(e.target.value)}}></input>
            <button style={{backgroundColor: 'blueviolet'}} onClick={handleSetSize}> Board size</button>
        </div>
    )
}

export default Getsize