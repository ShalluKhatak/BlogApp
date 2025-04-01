import { filePath } from '../Util/UtilFunction.js';

const HomeController = (req, res) => {
  const homeFilePath = filePath('View', 'index.html');
  res.sendFile(homeFilePath);
};

export default HomeController;
