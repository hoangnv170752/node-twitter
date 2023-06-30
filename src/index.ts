import express from "express";
import userRouter from "./user.routes";
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
  res.send('Hello world')
})

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
})

router.get('/tweets', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'Hello world'
      }
    ]
  })
})

app.use('/api', userRouter);

app.listen(5656, () => {
  console.log('listening on port 5656');
})


