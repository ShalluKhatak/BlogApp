import { filePath } from '../Util/UtilFunction.js';
import { GET_BLOG } from '../db/query.js';
import DB_Connection from '../Util/DbConnection.js';

export const HomeController = (req, res) => {
  const homeFilePath = filePath('View', 'index.html');
  res.sendFile(homeFilePath);
};

export const HomeControllerGetBlog = async (req, res) => {
  const [new_blog] = await DB_Connection.query(GET_BLOG);
  res.json(new_blog);
};

export default HomeController;
