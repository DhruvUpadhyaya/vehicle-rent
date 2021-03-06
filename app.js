const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
	res.render('index', { pageTitle: 'index' });
});
app.listen(3000);
