import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message'
import Board from './components/Board'
import Getsize from './components/Getsize'

function App() {
  const [player, setPlayer] = useState("X");
  const [bsize, setbsize] = useState(3)
  const [status, setStatus] = useState("turn")
  const [reset, setReset] = useState(false)

  function setsize(size) {
    setbsize(size);
  }

  function setPlayStatus(play, status) {
    let oppPlayer = play === "X" ? "O":"X";
    status === "won"?setPlayer(oppPlayer): setPlayer(play);
    setStatus(status)
  }

  function resetTheBoard() {
    setReset(reset?false:true);
    setStatus("turn")
  }

  return (
    <div className='game'>
      <Getsize setSize={setsize}/>
      <Message play={{player, status}} resetBoard={resetTheBoard}/>
      <Board boardSize={bsize} resetBoard={reset} setPlayer={setPlayStatus}/>
    </div>
  )
}

export default App
