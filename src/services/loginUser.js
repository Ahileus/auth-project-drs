import useBcrypt from '../bcrypt.js' 
import { getUserByName } from '../db.js'
import { body } from '../config.js'

const loginUser = async (req, res) => {
    try {
        const { userName, userPassword } = await req.body
        const { compare } = await useBcrypt()

        const candidate = await getUserByName(userName) 
        if (candidate == null) return res.render('login', { ...body, noUser: true, user: userName } )         
    
        const isMatch = await compare(userPassword, candidate.password)
        if (!isMatch) return res.render('login', { ...body, noPassword: true, user: userName })      
    
        res.render('success', { title: 'DRS Project' })
    } catch (e) {
        res.status(400).render('login', { ...body, error: e })
    }
}

export default loginUser
