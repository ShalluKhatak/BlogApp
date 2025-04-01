import { filePath } from '../Util/UtilFunction.js';
import { Router } from 'express';

const SignUpController = (req, res) => {
  const homeFilePath = filePath('View', 'signup.html');
  res.sendFile(homeFilePath);
};

export default SignUpController;
