import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

const key = fs.readFileSync(__dirname + '/certs/server.key')
const cert = fs.readFileSync(__dirname + '/certs/server.crt')
const options = { key, cert }

const body = { title: 'DRS Project Error', textError: `Such user already exists`, noPassword: false, noUser: false, password: '', user: '' }

export { options, __dirname, body }