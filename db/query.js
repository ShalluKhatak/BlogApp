export const GET_USER = 'select * from blog_db.user;';
export const GET_BLOG = 'select * from blog_db.blog;';
export const CHECK_USER_WITH_EMAIL =
  'select * from blog_db.user where email=?;';
export const ADD_NEW_USER =
  'INSERT INTO blog_db.user(name,email,password,phone_no,created_at)VALUES(?,?,?,?,CURRENT_TIMESTAMP());';

//   export const USER_LOGIN = 'select * from blog_db.user where email=?;';
export const Add_PRODUCT =
  // 'INSERT INTO blog_db.blog(title,category,description,image,create,modify,user_id)Values(?,?,?,?,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),?);';
  'INSERT INTO blog_db.blog(title,category,`description`,image,`create`,user_id)Values(?,?,?,?,CURRENT_TIMESTAMP(),?);';
