import { filePath } from '../Util/UtilFunction.js';

const LoginController = (req, res) => {
  const homeFilePath = filePath('View', 'login.html');
  res.sendFile(homeFilePath);
};

export default LoginController;
