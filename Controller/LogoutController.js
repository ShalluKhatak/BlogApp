export const LogoutController = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};
