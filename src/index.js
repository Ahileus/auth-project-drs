import express from 'express'
import bodyParser from 'body-parser'
import https from 'https'
import cors from 'cors'
import favicon from 'serve-favicon'
import pool from './db.js'
import router from './router.js'
import 'dotenv/config'
import { options, __dirname } from './config.js'

const app = express()
const PORT = process.env.PORT || 3001 
app.set('view engine', 'pug')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use(favicon(__dirname + '/public/icon/favicon.ico'))
app.use(router)

const server = https.createServer(options, app)

server.on('close', async () => {   
    console.log('Close database connections')
    await pool.end() 
})

server.listen(PORT, () => { console.log(`Server startet on PORT ${PORT}`) })

process.on('SIGINT', () => {
    server.close(() => {
        server.emit('close')
        process.exit(0)
    })
})