import React from 'react'
import { Client } from 'boardgame.io/react'
import TicTacToe from './Game'
import Board from './Board'

const TicTacToeClient = Client({
  game: TicTacToe,
  board: Board,
  multiplayer: { server: 'localhost:8000' },
  debug: false
})

export default () => {
  return (
    <div>
      <TicTacToeClient playerID="0" />
      <TicTacToeClient playerID="1" />
    </div>
  )
}
