import bcrypt from 'bcrypt'
import 'dotenv/config'

const useBcrypt = async () => {

    const saltRounds = Number(process.env.SALT) || 10
    const pepper = process.env.PEPPER || 'superSecretPepperValue123!['
    const salt = await bcrypt.genSalt(saltRounds)

    const hash = async (password) => { 
        const pepperPassword = genPepper(pepper, password)
        return await bcrypt.hash(pepperPassword, salt) 
    } 

    const compare = async (password, hashPass) => { 
        const pepperPassword = genPepper(pepper, password)
        return await bcrypt.compare(pepperPassword, hashPass) 
    }

    const genPepper = (pepper, password) => pepper + password

    return { hash, compare }
}

export default useBcrypt