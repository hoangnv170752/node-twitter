import express from "express";
import { loginValidator } from "../middlewares/users.middlewares";
import { loginController } from "../controllers/users.controllers";
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
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

usersRouter.post("/login", loginValidator, loginController)

export default usersRouter;


