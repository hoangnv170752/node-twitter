import express from "express";
import usersRouter from "./routes/user.routes";
import databaseService from "./services/database.services";
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

app.use(express.json());
app.use('/api', usersRouter);
databaseService.connect();

app.listen(5656, () => {
  console.log('listening on port 5656');
})


