import 'dotenv/config'
import mariadb from 'mariadb'

const pool = mariadb.createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    connectionLimit: 2
})

const executeQuery = async (sql) => {
    let conn
    try {
        conn = await pool.getConnection()
        return await conn.query(sql)
    } catch (e) {
        throw e
    } finally {
        if (conn) conn.release()
    }
}

export const getUserByName = async (name) => {
    const candidates = await executeQuery(`SELECT * FROM drsUsers WHERE user = '${name}'`)
    return candidates[0]
}

export const saveNewUser = async (name, password) => {
    await await executeQuery(`INSERT INTO drsUsers (user, password) VALUES ('${name}', '${password}')`)
}

export default pool