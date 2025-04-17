import { Add_PRODUCT } from '../db/query.js';
import DB_Connection from '../Util/DbConnection.js';

export const ProductControllerPost = async (req, res) => {
  try {
    const { title, category, description, image, user_id } = req.body;
    const [new_product] = await DB_Connection.query(Add_PRODUCT, [
      title,
      category,
      description,
      image,
      user_id,
    ]);
    if (new_product?.affectedRows > 0) {
      res.status(200).send('Product added');
    } else {
      return res.status(400).send('Product cannot added.');
    }
  } catch (error) {
    console.log('error :>> ', error);
  }
};
