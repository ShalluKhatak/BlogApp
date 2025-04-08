import router from 'express';
import { LogoutController } from '../Controller/LogoutController.js';

export const LogoutRouter = router();

LogoutRouter.get('/', LogoutController);
