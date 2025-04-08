import { ADD_NEW_USER, CHECK_USER_WITH_EMAIL } from '../db/query.js';
import DB_Connection from '../Util/DbConnection.js';
import bcrypt from 'bcrypt';
import { filePath } from '../Util/UtilFunction.js';

const salt_rounds = bcrypt.genSaltSync(10);

export const SignUpController = (req, res) => {
  const homeFilePath = filePath('View', 'signup.html');
  res.sendFile(homeFilePath);
};

export const SignupControllerPost = async (req, res) => {
  const { name, email, phone_no, password } = req.body;
  if (
    !(
      Boolean(name?.trim()) &&
      Boolean(email?.trim()) &&
      Boolean(phone_no?.trim()) &&
      Boolean(password?.trim())
    )
  ) {
    return res.status(400).send('Something went wrong');
  }
  const [db_cont] = await DB_Connection.query(CHECK_USER_WITH_EMAIL, [email]);

  if (db_cont.length > 0) {
    return res.status(400).send('Email already exists.');
  }
  const hashedPassword = await bcrypt.hash(password, salt_rounds);
  const [new_user] = await DB_Connection.query(ADD_NEW_USER, [
    name,
    email,
    hashedPassword,
    phone_no,
  ]);

  if (new_user?.affectedRows > 0) {
    res.status(200).send('signup');
  } else {
    return res.status(400).send('User cannot registered.');
  }
};
