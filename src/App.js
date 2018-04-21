import React from 'react'
import { Client } from 'boardgame.io/react'
import TicTacToe from './Game'
import Board from './Board'

const clients = [
  Client({
    game: TicTacToe,
    board: Board,
    multiplayer: { server: 'localhost:8000' },
    debug: true
  }),
  Client({
    game: TicTacToe,
    board: Board,
    multiplayer: { server: 'localhost:8000' },
    debug: false
  })
]

export default () => {
  return <div>{clients.map((Client, index) => <Client key={index} playerID={'' + index} />)}</div>
}
