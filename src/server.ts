import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

//   wrap your asynchronous code in try/catch blocks to handle potential errors

const app = express();
// so that we have all the data in req.body
app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(compression());

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`<h1> Jwt ExpressTs </h1>`);
});

const server = http.createServer(app);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    server.listen(port, () => {
      console.log(`Server is listening on the port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
