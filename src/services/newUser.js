import useBcrypt from '../bcrypt.js' 
import { getUserByName, saveNewUser } from '../db.js'
import { body } from '../config.js'

const newUser = async (req, res) => {
    try {
        const { hash } = await useBcrypt()
        const { userName, userPassword } = req.body

        const candidate = await getUserByName(userName)  
        if (candidate) return res.render('register', { ...body, textError: `User "${userName}" already exists`, noUser: true, user: userName })
              
        const hashedPassword = await hash(userPassword)  
        await saveNewUser(userName, hashedPassword)

        res.render('success', { title: 'DRS Project' })
    } catch (e) {
        res.status(400).render('register', { ...body, error: e })
    }    
}

export default newUser