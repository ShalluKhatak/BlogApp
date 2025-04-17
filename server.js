import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { HomeRouter } from './Router/HomeRouter.js';
import { LoginRouter } from './Router/LoginRouter.js';
import { SignUpRouter } from './Router/SignUpRouter.js';
import { LogoutRouter } from './Router/LogoutRouter.js';
import { ProductRouter } from './Router/ProductRouter.js';

const app = express();

dotenv.config();
const PORT = process.env.Server_PORT;
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(cookieParser());

app.use('/', HomeRouter);
app.use('/signup', SignUpRouter);
app.use('/login', LoginRouter);
app.use('/logout', LogoutRouter);
app.use('/product', ProductRouter);

app
  .listen(PORT, () => {
    console.log('Server is running on port:', PORT);
  })
  .on('error', (err) => {
    console.log('Fail to start server due to this error : ', err);
  });
