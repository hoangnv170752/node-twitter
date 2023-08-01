import express from 'express'
import { loginValidator, registerValidator } from '../middlewares/users.middlewares'
import { loginController, registerController } from '../controllers/users.controllers'
const usersRouter = express.Router()

usersRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

usersRouter.get('/tweets', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'Hello world'
      }
    ]
  })
})

usersRouter.post('/login', loginValidator, loginController)

usersRouter.post('/register', registerValidator, registerController)
export default usersRouter
