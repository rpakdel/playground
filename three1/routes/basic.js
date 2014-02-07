function basic(req, res)
{
  res.render('basic', { title: 'Basic' });
}

exports.index = basic;