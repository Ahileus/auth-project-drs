import pool from '../db.js'

const allUsers = async (_, res) => {
    let conn 
    try {
        conn = await pool.getConnection()   
    
        const users = await conn.query('SELECT * FROM drsUsers')
        res.status(200).json(users)

    } catch (e) {
        console.error(e)
    }
    finally {
        if (conn) conn.end()
    }
}

export default allUsers