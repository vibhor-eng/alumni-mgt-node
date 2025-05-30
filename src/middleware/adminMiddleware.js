const adminMiddleware = (req, res, next) => {
  console.log(req.session.userId);
    if (!req.session.userId) {
      return res.redirect('/admin/login');
    }
    next();
  };

  export { adminMiddleware }