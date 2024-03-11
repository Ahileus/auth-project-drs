import { Router } from 'express'
import { AllUsers, LoginUser, NewUser } from './services/index.js'
import { body } from './config.js'

const router = Router()

router
    .route('/')
    .get((_, res) => res.render('login', { ...body, title: 'DRS Project' }))
    .post((req, res) => LoginUser(req, res))

router
    .route('/register')
    .get((_, res) => res.render('register', { title: 'DRS Project' }))
    .post((req, res) => NewUser(req, res))

router
    .route('/all').get((req, res) => AllUsers(req, res))

router.use((_, res) => res.status(404).redirect('/')) //.send('404 Not Found'))

export default router
