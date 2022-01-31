require('dotenv').config();
const express = require('express');
const db = require('./connection/db');
const app = express();

const upload = require('./middlewares/upload');

app.set('view engine', 'hbs');

app.use('/public', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: false }));

const path = 'http://localhost:5000/uploads/';

app.get('/api', (req, res) => {
  res.send({
    status: 'success',
    message: 'hello wolrd',
  });
});

app.get('/', (req, res) => {
  db.connect((err, client, done) => {
    if (err) throw err;

    client.query('SELECT * FROM public.user', (err, result) => {
      done();
      if (err) throw err;

      let data = result.rows;

      data = data.map((item, idx) => {
        return {
          no: idx + 1,
          ...item,
          image: path + item.image,
        };
      });

      console.log(data);

      res.render('user', { users: data });
    });
  });
});

app.post('/user', upload.single('image'), (req, res) => {
  const { name, email, password } = req.body;
  const image = req.file.filename;

  const query = `INSERT INTO public.user (name, email, password, image) VALUES ('${name}','${email}','${password}','${image}')`;

  db.connect(function (err, client, done) {
    if (err) throw err;
    client.query(query, function (err, result) {
      if (err) throw err;
      res.redirect('/');
    });
  });
  // res.redirect('/');
});

const isLogin = true;

app.get('/home', (req, res) => {
  res.render('index');
});

app.get('/blog', (req, res) => {
  db.connect((err, client, done) => {
    if (err) throw err;

    client.query('SELECT * FROM tb_blog', (err, result) => {
      done();
      if (err) throw err;

      res.render('blog', { isLogin: isLogin, blogs: result.rows });
    });
  });
});

app.get('/add-blog', (req, res) => {
  res.render('form-blog');
});

app.get('/blog/:id', (req, res) => {
  const blogId = req.params.id;
  res.render('blog-detail', {
    blog: {
      id: blogId,
      title: 'Pasar Coding di Indonesia Dinilai Masih Menjanjikan',
      post_date: '12 Jul 2021 22:30 WIB',
      author: 'Ichsan Emrald Alamsyah',
      content: `Ketimpangan sumber daya manusia (SDM) di sektor digital masih
    menjadi isu yang belum terpecahkan. Berdasarkan penelitian
    ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
    meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
    dolor sit amet consectetur adipisicing elit. Quam, molestiae
    numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
    eligendi debitis?`,
    },
  });
});

app.post('/blog', (req, res) => {
  console.log({
    title: req.body.title,
    content: req.body.content,
  });
  const blog = {
    title: req.body.title,
    post_date: '12 Jul 2021 22:30 WIB',
    author: 'Ichsan Emrald Alamsyah',
    content: req.body.content,
  };

  // store new post blog to blogs array
  blogs.push(blog);

  // redirect to specific route
  res.redirect('/blog');
});

app.get('/delete-blog/:id', (req, res) => {
  // get blog index by fetch req params
  const index = req.params;

  // remove blog at specific index with count number equal to 1
  blogs.splice(index, 1);

  // redirect to blog route for refetch blog page
  res.redirect('/blog');
});

app.listen(5000, () => {
  console.log('server starting on PORT: 5000');
});
