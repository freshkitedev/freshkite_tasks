import React, { useEffect, useRef, useState } from 'react'
import './Board.css'

const initBoard = (size) => Array(size * size).fill(null)

const Board = (props) => {
    const [board, setboard] = useState(initBoard(props.boardSize));
    const player = useRef("X");
    const [gameStop, setGameStop] = useState(false);

    useEffect(() => {
        setboard(initBoard(props.boardSize))
        player.current = "X"
        setGameStop(false);
    },[props.boardSize, props.resetBoard])

    function checkWinner(newBoard, index) {
        let row = Math.floor(index / props.boardSize);
        let col = index % props.boardSize;
        let won = true;

        /* check all columns */
        for (let r = 0; r < props.boardSize; r++) {
            let i = r * props.boardSize + col;
            
            if (newBoard[i] != player.current) {
                won = false;
                break;
            }
        }
        
        if (won) {
            return "won"
        }
        won = true;
        /* check all rows */
        let startIndex = row * props.boardSize;
        
        for (let c = 0; c < props.boardSize; c++) {
            let i = startIndex + c;
            
            if (newBoard[i] != player.current) {
                won = false;
                break;
            }
        }
        if (won) {
            return "won"
        }
        won = true;
        for (let r = 0; r < props.boardSize; r++) {
            let c = r;
            let i = r * props.boardSize + c;
            if (newBoard[i] != player.current) {
                won = false;
                break;
            }
        }
        if (won) {
            return "won"
        }

        won = true;
        let c = props.boardSize - 1;
        for (let r = 0; r < props.boardSize; r++) {
            let i = r * props.boardSize + c;
            if (newBoard[i] != player.current) {
                won = false;
                break;
            }
            c--;
        }
        if (won) {
            return "won"
        }
        if (!newBoard.includes(null)) {
            return "draw"
        }
        return "turn";
    }

    function handlePlay(index) {
        const newBoard = [...board];
        newBoard[index] = player.current;
        let res = checkWinner(newBoard, index);
        if (res == "won") {
            setGameStop(true);
        }
        setboard(newBoard)
        player.current = player.current === "X" ?"O": "X";
        props.setPlayer(player.current, res);
    }
    
    return (
        <div className='board' style={{'--column':props.boardSize}}>
            {
                board.map((b, index) => {
                    return (
                        <button 
                        key={index} 
                        className='boxbutton'
                        onClick={() => handlePlay(index)} 
                        disabled={b !== null || gameStop}>
                            {b}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Board