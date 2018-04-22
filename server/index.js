import * as dotenv from 'dotenv'
import { Server } from 'boardgame.io/server'
import TicTacToe from '../src/Game'

dotenv.config()

const server = Server({ games: [TicTacToe] })
server.run(process.env.PORT)

console.log('Server started: ', process.env.PORT)
